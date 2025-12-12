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
      prospect:
        "The Semifinals begin with an epic four-way battle on the Leaf Cup! {johanna}, the Master of Momentum, dominated the Star Cup quarterfinals with unstoppable flowing racing lines and perfect speed maintenance to claim first place - her momentum mastery has proven devastating. {pal-oskar}, the Guardian, won the Flower Cup quarterfinals through impenetrable defensive mastery and strategic positioning, his fortress-like composure making him incredibly difficult to overtake. {per-kristian}, the Master of Chaos, secured second in the Star Cup by turning mayhem into opportunity at crucial moments, his chaos tactics proving decisive when it mattered. {christoffer-s}, the Comeback Kid, earned second in the Flower Cup through never-give-up determination and mushroom mastery, his resilience under pressure legendary. The Leaf Cup features Baby Park, Dry Dry Desert, Mushroom Bridge, and Mario Circuit - a diverse mix testing both technical skill and raw speed. Now at blistering 150cc speeds, the stakes couldn't be higher. Two quarterfinal champions face two proven second-place finishers who've already upset favorites. Will {johanna}'s momentum flow overcome {pal-oskar}'s defensive fortress? Can {per-kristian}'s chaos disrupt {christoffer-s}'s comeback magic? Only two advance to the finals - who claims their spot?",
      players: [
        createPlayer("johanna"),
        createPlayer("per-kristian"),
        createPlayer("pal-oskar"),
        createPlayer("christoffer-s"),
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
