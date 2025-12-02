import type { Round } from "@/types";
import { createPlayer } from "./players";

export const round2: Round = {
  id: "r2",
  name: "Quarterfinals",
  matches: [
    {
      id: "m9",
      date: "Thursday, December 11th 2025",
      time: "11:30 AM",
      circuit: "Star Cup",
      cc: "100cc",
      location: "Huben",
      // isFinished: true,
      players: [
        createPlayer("johanna"),
        { id: "winner-race-2", name: "Winner of Race 2", description: "" },
        createPlayer("per-kristian"),
        { id: "second-race-2", name: "2nd Place of Race 2", description: "" },
      ],
    },
    {
      id: "m10",
      date: "Friday, December 12th 2025",
      time: "11:30 AM",
      circuit: "Flower Cup",
      cc: "100cc",
      location: "Huben",
      // isFinished: true,
      players: [
        { id: "winner-race-3", name: "Winner of Race 3", description: "" },
        { id: "winner-race-4", name: "Winner of Race 4", description: "" },
        { id: "second-race-3", name: "2nd Place of Race 3", description: "" },
        { id: "second-race-4", name: "2nd Place of Race 4", description: "" },
      ],
    },
    {
      id: "m11",
      date: "Monday, December 15th 2025",
      time: "11:30 AM",
      circuit: "Shell Cup",
      cc: "100cc",
      location: "Huben",
      // isFinished: true,
      players: [
        { id: "winner-race-5", name: "Winner of Race 5", description: "" },
        { id: "winner-race-6", name: "Winner of Race 6", description: "" },
        { id: "second-race-5", name: "2nd Place of Race 5", description: "" },
        { id: "second-race-6", name: "2nd Place of Race 6", description: "" },
      ],
    },
    {
      id: "m12",
      date: "Tuesday, December 16th 2025",
      time: "11:30 AM",
      circuit: "Banana Cup",
      cc: "100cc",
      location: "Huben",
      // isFinished: true,
      players: [
        { id: "winner-race-7", name: "Winner of Race 7", description: "" },
        { id: "winner-race-8", name: "Winner of Race 8", description: "" },
        { id: "second-race-7", name: "2nd Place of Race 7", description: "" },
        { id: "second-race-8", name: "2nd Place of Race 8", description: "" },
      ],
    },
  ],
};
