import { SEASON_IDS, SEASON_LABELS } from "@/seasons";
import type { SeasonId } from "@/seasons";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const SeasonSwitcher = ({ value, onChange }: { value: SeasonId; onChange: (season: SeasonId) => void }) => (
  <div className="fixed top-3 left-3 md:left-1/2 md:-translate-x-1/2 z-20">
    <Tabs value={value} onValueChange={(v) => onChange(v as SeasonId)}>
      <TabsList className="h-11 p-1 shadow-xl border bg-white/90 dark:bg-gray-800/90 backdrop-blur">
        {SEASON_IDS.map((id) => (
          <TabsTrigger
            key={id}
            value={id}
            className="h-full px-3 md:px-5 gap-1.5 data-[state=active]:bg-teal-600 data-[state=active]:text-white dark:data-[state=active]:bg-teal-600"
          >
            <span className="hidden sm:inline text-xs opacity-80">{SEASON_LABELS[id]} ·</span>
            <span className="font-bold">{id}</span>
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  </div>
);
