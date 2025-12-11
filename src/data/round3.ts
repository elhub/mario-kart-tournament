import type { Round } from "@/types";
import { createPlayer } from "./players";

export const round3: Round = {
  id: "r3",
  name: "Semifinals",
  matches: [
    {
      id: "m13",
      date: "Wednesday, December 17th 2025",
      time: "11:30 AM",
      circuit: "Leaf Cup",
      cc: "150cc",
      location: "Huben",
      // isFinished: true,
      players: [
        createPlayer("johanna"),
        createPlayer("per-kristian"),
        { id: "winner-race-10", name: "Winner of Race 10", description: "" },
        { id: "second-race-10", name: "2nd Place of Race 10", description: "" },
      ],
    },
    {
      id: "m14",
      date: "Thursday, December 18th 2025",
      time: "11:30 AM",
      circuit: "Lightning Cup",
      cc: "150cc",
      location: "Huben",
      // isFinished: true,
      players: [
        { id: "winner-race-11", name: "Winner of Race 11", description: "" },
        { id: "winner-race-12", name: "Winner of Race 12", description: "" },
        { id: "second-race-11", name: "2nd Place of Race 11", description: "" },
        { id: "second-race-12", name: "2nd Place of Race 12", description: "" },
      ],
    },
  ],
};
