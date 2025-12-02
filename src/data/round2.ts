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
      prospect:
        "The Quarterfinals explode onto the Star Cup with an absolute clash of champions! {johanna}, the dominant Master of Momentum who steamrolled through Race 1 with flawless flowing lines, enters as the favorite - her first-place finish proving her momentum mastery is no joke. But {christoffer-s}, the Comeback Kid, shocked everyone with his stunning rise from last to first in Race 2, and his mushroom-fueled resilience makes him incredibly dangerous. {per-kristian}, the Master of Chaos, claimed second in Race 1 with a perfectly timed red shell on the final lap - his ability to create mayhem from nowhere keeps everyone on edge. And don't sleep on {lise}, the Perfectionist, whose flawless mini-turbos earned her second place in Race 2 with surgical precision. With 100cc speeds amplifying every mistake, this race could see {johanna} trying to dominate from the front while {christoffer-s} lurks ready to mount another comeback, {per-kristian} waits for the perfect moment to unleash chaos, and {lise} executes her perfect racing lines. Two race winners, two proven contenders - who advances to the semifinals? The Star Cup will decide!",
      players: [createPlayer("johanna"), createPlayer("christoffer-s"), createPlayer("per-kristian"), createPlayer("lise")],
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
