import { Box, Grid } from "@chakra-ui/react";
import type { Tournament } from "@/types";
import { Round } from "@/components/Round";
import { BracketConnections } from "@/components/BracketConnections";
import { round1 } from "@/data/round1";
import { round2 } from "@/data/round2";
import { round3 } from "@/data/round3";
import { round4 } from "@/data/round4";

const tournament: Tournament = {
  id: "t1",
  rounds: [round1, round2, round3, round4],
};

function App() {
  const roundOfSixteenPart1 = {
    ...tournament.rounds[0],
    matches: tournament.rounds[0].matches.slice(0, 4),
  };

  const roundOfSixteenPart2 = {
    ...tournament.rounds[0],
    matches: tournament.rounds[0].matches.slice(4),
  };

  const quarterfinalsPart1 = {
    ...tournament.rounds[1],
    matches: tournament.rounds[1].matches.slice(0, 2),
  };

  const quarterfinalsPart2 = {
    ...tournament.rounds[1],
    matches: tournament.rounds[1].matches.slice(2),
  };

  const semifinalsPart1 = {
    ...tournament.rounds[2],
    matches: tournament.rounds[2].matches.slice(0, 1),
  };

  const semifinalsPart2 = {
    ...tournament.rounds[2],
    matches: tournament.rounds[2].matches.slice(1),
  };

  const finals = {
    ...tournament.rounds[3],
    matches: tournament.rounds[3].matches.slice(0, 1),
  };

  return (
    <Box
      minH="100vh"
      minW="100vw"
      w="full"
      pt={8}
      px={8}
      position="relative"
      backgroundImage="url('/mario-kart-tournament/emkwt-bg-3.jpg')"
      backgroundSize="cover"
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(255, 255, 255, 0.7)",
        zIndex: 0,
      }}
    >
      <BracketConnections />
      <Grid
        templateColumns="repeat(7, 1fr)"
        templateRows="repeat(4, 1fr)"
        w="full"
        gap={8}
        my={8}
        position="relative"
        zIndex={1}
      >
        {/* === Column 1 (4 small boxes) === */}
        <Round round={roundOfSixteenPart1} columnId={1} />

        {/* === Column 2 (2 medium boxes) === */}
        <Round round={quarterfinalsPart1} columnId={2} />

        {/* === Column 3,4,5 (1 tall box) === */}
        <Round round={semifinalsPart1} columnId={3} />
        <Round round={finals} columnId={4} />
        <Round round={semifinalsPart2} columnId={5} />

        {/* === Column 6 (2 medium boxes) === */}
        <Round round={quarterfinalsPart2} columnId={6} />

        {/* === Column 7 (4 small boxes) === */}
        <Round round={roundOfSixteenPart2} columnId={7} />
      </Grid>
    </Box>
  );
}

export default App;
