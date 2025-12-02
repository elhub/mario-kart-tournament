import type { Round } from "@/types";

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
      players: [
        { id: "winner-race-13", name: "Winner of Race 13", description: "" },
        { id: "winner-race-14", name: "Winner of Race 14", description: "" },
        { id: "second-race-13", name: "2nd Place of Race 13", description: "" },
        { id: "second-race-14", name: "2nd Place of Race 14", description: "" },
      ],
    },
  ],
};
