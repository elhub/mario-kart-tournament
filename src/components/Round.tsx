import { GridItem } from "@chakra-ui/react";
import type { Round as RountType } from "@/types";
import { BracketCard } from "./BracketCard";

export const Round = ({ round, columnId }: { round: RountType; columnId: number }) => {
  const rowSpan = 4 / round.matches.length;

  return round.matches.map((match, i) => (
    <GridItem display="flex" key={match.id} colStart={columnId} rowStart={i * rowSpan + 1} rowSpan={rowSpan}>
      <BracketCard match={match} roundName={round.name} rowIndex={i} />
    </GridItem>
  ));
};
