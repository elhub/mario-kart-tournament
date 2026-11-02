import { useEffect, useMemo, useState } from "react";
import { parseAsStringLiteral, useQueryState } from "nuqs";
import { TournamentBracket } from "@/components/TournamentBracket";
import { StandInsBadge } from "@/components/StandInsBadge";
import { RulesDialog } from "@/components/RulesDialog";
import { SeasonSwitcher } from "@/components/SeasonSwitcher";
import { SeasonStatus } from "@/components/SeasonStatus";
import { season2025, season2025Rules } from "@/data/season2025";
import { createEmptySeason } from "@/data/sheet/parseSeasonCsv";
import { useSeasonData } from "@/hooks/useSeasonData";
import { useImageLoaded } from "@/hooks/useImageLoaded";
import { DEFAULT_SEASON, SEASON_IDS } from "@/seasons";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BACKGROUND_URL = "/mario-kart-tournament/emkwt-bg-4.jpg";
// Reveal anyway if the connector lines never report in.
const REVEAL_TIMEOUT_MS = 3000;

const emptySeason = createEmptySeason();

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [linesReady, setLinesReady] = useState(false);
  const backgroundLoaded = useImageLoaded(BACKGROUND_URL);
  const [season, setSeason] = useQueryState("season", parseAsStringLiteral(SEASON_IDS).withDefault(DEFAULT_SEASON));

  useEffect(() => {
    const timeout = window.setTimeout(() => setLinesReady(true), REVEAL_TIMEOUT_MS);
    return () => window.clearTimeout(timeout);
  }, []);

  const isSheetSeason = season !== "2025";
  const sheet = useSeasonData(isSheetSeason);
  const showSheetChecks = useMemo(() => new URLSearchParams(window.location.search).has("debug"), []);

  const sheetData = sheet.data ?? emptySeason;
  const tournament = isSheetSeason ? sheetData.tournament : season2025;
  const rules = isSheetSeason ? sheetData.rules : season2025Rules;
  const isLoading = isSheetSeason && sheet.status === "loading";
  const isPageReady = backgroundLoaded && linesReady;
  const isBracketVisible = isPageReady && !isLoading;
  const isEmpty =
    isSheetSeason &&
    sheet.status === "ready" &&
    tournament.rounds.every((r) => r.matches.every((m) => m.players.every((p) => p.isPlaceholder)));

  return (
    <div className="h-screen w-screen pt-16 md:pt-20 pb-4 md:pb-8 relative overflow-x-auto overflow-y-auto">
      {/* Background and overlay fade in together so the bare image never shows on its own */}
      <div
        className={cn("transition-opacity duration-300", !isPageReady && "opacity-0")}
        aria-hidden="true"
      >
        <div
          className="fixed inset-0 bg-cover bg-center bg-no-repeat z-0 pointer-events-none"
          style={{ backgroundImage: `url('${BACKGROUND_URL}')` }}
        />
        <div className="fixed inset-0 bg-white/70 dark:bg-black/70 z-0 pointer-events-none" />
      </div>

      <SeasonSwitcher value={season} onChange={setSeason} />

      {isSheetSeason && (
        <SeasonStatus
          isLoading={isLoading}
          error={sheet.error}
          savedAt={sheet.savedAt}
          isEmpty={isEmpty}
          warnings={sheetData.warnings}
          showWarnings={showSheetChecks && sheet.status !== "loading"}
          onRetry={sheet.reload}
        />
      )}

      {/* Stand-Ins Badge & Rules Button Container */}
      <div className="fixed top-4 right-4 md:top-[75%] md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10 flex flex-col items-center gap-2 md:gap-6 w-auto md:w-full md:max-w-md">
        {!isSheetSeason && (
          <div className="hidden md:flex md:w-full">
            <StandInsBadge />
          </div>
        )}

        <Button
          size="lg"
          onClick={() => setIsOpen(true)}
          className="shadow-xl text-xs md:text-base px-3 md:px-4 md:w-full"
        >
          <span className="mr-1 md:mr-2">📋</span>
          <span className="hidden md:inline">Tournament</span>Rules
        </Button>
      </div>

      <RulesDialog
        open={isOpen}
        onOpenChange={setIsOpen}
        year={season}
        info={rules}
        hasPlayerProfiles={!isSheetSeason}
      />

      <TournamentBracket
        tournament={tournament}
        isVisible={isBracketVisible}
        onLinesReady={() => setLinesReady(true)}
      />
    </div>
  );
}

export default App;
