import type { Tournament } from "@/types";
import { Round } from "@/components/Round";
import { BracketConnections } from "@/components/BracketConnections";
import { cn } from "@/lib/utils";

interface TournamentBracketProps {
  tournament: Tournament;
  isVisible: boolean;
  onLinesReady: () => void;
}

export const TournamentBracket = ({ tournament, isVisible, onLinesReady }: TournamentBracketProps) => {
  const [roundOfSixteen, quarterfinals, semifinals, finals] = tournament.rounds;
  const half = (round: typeof roundOfSixteen, part: 0 | 1) => {
    const size = round.matches.length / 2;
    return { ...round, matches: round.matches.slice(part * size, (part + 1) * size) };
  };

  return (
    <>
      <BracketConnections isVisible={isVisible} onReady={onLinesReady} />
      <div
        id="bracket-grid"
        className={cn(
          "grid grid-cols-7 grid-rows-4 min-w-[1600px] gap-4 md:gap-8 my-4 md:my-8 mx-4 md:mx-8 relative z-[1] transition-opacity duration-300",
          !isVisible && "opacity-0 pointer-events-none"
        )}
      >
        {/* === Column 1 (4 small boxes) === */}
        <Round round={half(roundOfSixteen, 0)} columnId={1} />

        {/* === Column 2 (2 medium boxes) === */}
        <Round round={half(quarterfinals, 0)} columnId={2} />

        {/* === Column 3,4,5 (1 tall box) === */}
        <Round round={half(semifinals, 0)} columnId={3} />
        <Round round={finals} columnId={4} />
        <Round round={half(semifinals, 1)} columnId={5} />

        {/* === Column 6 (2 medium boxes) === */}
        <Round round={half(quarterfinals, 1)} columnId={6} />

        {/* === Column 7 (4 small boxes) === */}
        <Round round={half(roundOfSixteen, 1)} columnId={7} />
      </div>
    </>
  );
};
