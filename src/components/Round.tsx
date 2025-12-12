import type { Round as RountType } from "@/types";
import { BracketCard } from "./BracketCard";

export const Round = ({ round, columnId }: { round: RountType; columnId: number }) => {
  const rowSpan = 4 / round.matches.length;

  return round.matches.map((match, i) => (
    <div key={match.id} className="flex" style={{ gridColumn: columnId, gridRow: `${i * rowSpan + 1} / span ${rowSpan}` }}>
      <BracketCard match={match} roundName={round.name} rowIndex={i} />
    </div>
  ));
};
