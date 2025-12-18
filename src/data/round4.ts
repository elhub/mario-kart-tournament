import type { Round } from "@/types";
import { createPlayer } from "./players";

export const round4: Round = {
  id: "r4",
  name: "Finals",
  matches: [
    {
      id: "m15",
      date: "Friday, December 19th 2025",
      time: "11:30 AM",
      circuit: "Special Cup",
      cc: "150cc",
      location: "Huben",
      // isFinished: true,
      players: [createPlayer("pal-oskar"), createPlayer("markus-b"), createPlayer("christoffer-s"), createPlayer("sander")],
    },
  ],
};
