import type { Round } from "@/types";

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
        { id: "p49", name: "Winner of Match 9", description: "" },
        { id: "p50", name: "Winner of Match 10", description: "" },
        { id: "p51", name: "2nd Place of Match 9", description: "" },
        { id: "p52", name: "2nd Place of Match 10", description: "" },
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
        { id: "p53", name: "Winner of Match 11", description: "" },
        { id: "p54", name: "Winner of Match 12", description: "" },
        { id: "p55", name: "2nd Place of Match 11", description: "" },
        { id: "p56", name: "2nd Place of Match 12", description: "" },
      ],
    },
  ],
};
