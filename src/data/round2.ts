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
        "The Quarterfinals bring an elite showdown on the Star Cup! {johanna}, the Master of Momentum, arrives fresh off her first-place finish in Race 1, her flowing racing lines and perfect speed maintenance making her a formidable force. {christoffer-s}, the Comeback Kid, won Race 2 with his mushroom mastery and determination - his resilience under pressure is legendary. {per-kristian}, the Master of Chaos, secured second in Race 1 with his ability to turn mayhem into opportunity at crucial moments. {lise}, the Perfectionist, earned second in Race 2 through flawless mini-turbos and surgical precision. The Star Cup features Wario Shipyard, Maple Treeway, Mushroom Gorge, and Grumble Volcano - technical tracks where one mistake can be costly. At 100cc speeds, {johanna}'s momentum mastery could dominate the flow-based tracks, while {lise}'s perfect execution might shine on technical sections. {christoffer-s}'s resilience and {per-kristian}'s chaos tactics add wild cards to this championship-caliber matchup. Two race winners clash with two proven contenders - who advances to the semifinals?",
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
        createPlayer("pal-oskar"),
        createPlayer("henrik-h"),
        { id: "winner-race-4", name: "Winner of Race 4", description: "" },
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
