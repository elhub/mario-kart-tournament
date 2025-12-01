import type { Round } from "@/types";

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
        {
          id: "p1",
          name: "Johanna",
          description:
            "Master of Momentum - {name} flows through tracks like water, maintaining perfect speed while others brake and stumble.",
          attributes: [
            { emoji: "🌊", label: "Flow Master" },
            { emoji: "💨", label: "Momentum" },
            { emoji: "🎯", label: "Speed Perfect" },
          ],
        },
        { id: "p34", name: "Winner of Race 2", description: "" },
        {
          id: "p4",
          name: "Per Kristian",
          description:
            "Master of Chaos - {name} thrives in the mayhem, turning red shells and banana peels into opportunities for spectacular comebacks.",
          attributes: [
            { emoji: "🔥", label: "Chaos King" },
            { emoji: "🎲", label: "Risk Taker" },
            { emoji: "💥", label: "Explosive" },
          ],
        },
        { id: "p36", name: "2nd Place of Race 2", description: "" },
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
        { id: "p37", name: "Winner of Race 3", description: "" },
        { id: "p38", name: "Winner of Race 4", description: "" },
        { id: "p39", name: "2nd Place of Race 3", description: "" },
        { id: "p40", name: "2nd Place of Race 4", description: "" },
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
        { id: "p41", name: "Winner of Race 5", description: "" },
        { id: "p42", name: "Winner of Race 6", description: "" },
        { id: "p43", name: "2nd Place of Race 5", description: "" },
        { id: "p44", name: "2nd Place of Race 6", description: "" },
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
        { id: "p45", name: "Winner of Race 7", description: "" },
        { id: "p46", name: "Winner of Race 8", description: "" },
        { id: "p47", name: "2nd Place of Race 7", description: "" },
        { id: "p48", name: "2nd Place of Race 8", description: "" },
      ],
    },
  ],
};
