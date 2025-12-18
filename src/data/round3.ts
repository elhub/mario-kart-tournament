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
      isFinished: true,
      prospect:
        "The Semifinals begin with an epic four-way battle on the Leaf Cup! {vebjorn}, the Precision Pilot, dominated the Star Cup quarterfinals with unstoppable flowing racing lines and perfect speed maintenance to claim first place - his momentum mastery has proven devastating. {pal-oskar}, the Guardian, won the Flower Cup quarterfinals through impenetrable defensive mastery and strategic positioning, his fortress-like composure making him incredibly difficult to overtake. {per-kristian}, the Master of Chaos, secured second in the Star Cup by turning mayhem into opportunity at crucial moments, his chaos tactics proving decisive when it mattered. {christoffer-s}, the Comeback Kid, earned second in the Flower Cup through never-give-up determination and mushroom mastery, his resilience under pressure legendary. Now at blistering 150cc speeds on the challenging Leaf Cup circuits, the stakes couldn't be higher. Two quarterfinal champions face two proven second-place finishers who've already upset favorites. Will {vebjorn}'s momentum flow overcome {pal-oskar}'s defensive fortress? Can {per-kristian}'s chaos disrupt {christoffer-s}'s comeback magic? Only two advance to the finals - who claims their spot?",
      summary:
        "The first Semifinal delivered fortress-level dominance on the Leaf Cup! {pal-oskar}, the Guardian, proved utterly impenetrable with his defensive mastery and strategic positioning, establishing an early lead and maintaining it through perfect banana placement that transformed into an insurmountable wall to claim 1ST PLACE 🥇! {christoffer-s}, the Comeback Kid, showcased his legendary resilience and mushroom mastery throughout the brutal 150cc battles, his never-give-up determination earning him 2ND PLACE 🥈 and a ticket to the finals! {vebjorn}, the Precision Pilot, finished third despite his pixel-perfect drifts and technical prowess. {per-kristian}, the Master of Chaos, came in fourth as his chaos tactics couldn't overcome the Guardian's defensive fortress. {pal-oskar} and {christoffer-s} advance to face the Lightning Cup winners in the finals!",
      players: [
        createPlayer("vebjorn", 3),
        createPlayer("per-kristian", 4),
        createPlayer("pal-oskar", 1),
        createPlayer("christoffer-s", 2),
      ],
    },
    {
      id: "m14",
      date: "Thursday, December 18th 2025",
      time: "11:30 AM",
      circuit: "Lightning Cup",
      cc: "150cc",
      location: "Huben",
      isFinished: true,
      prospect:
        "The second Semifinal electrifies with a clash of champions on the Lightning Cup! {johanna}, the Master of Momentum, dominated the Star Cup quarterfinals in first place with unstoppable flowing racing lines and perfect speed maintenance - her momentum mastery has proven devastating throughout the tournament. {markus-b}, The Anchor, won the Banana Cup quarterfinals through unshakeable focus and ironclad nerves, his hours of YouTube pro tip study paying off with championship-caliber performance. {sergio}, The Thunder, secured second in the Shell Cup quarterfinals with explosive acceleration and lightning-bolt speed, his dominant racing style nearly claiming victory. {sander}, The Drift King, earned second in the Banana Cup with fearless precision cornering and flawless technique that required no tutorials - pure natural mastery. Now at blistering 150cc speeds on the Lightning Cup, the intensity skyrockets. Two quarterfinal champions with contrasting styles - {johanna}'s flow versus {markus-b}'s studied precision - face two powerful second-placers in {sergio}'s thunder and {sander}'s surgical drifts. Will YouTube Academy triumph, or does natural talent reign supreme? Only two advance to the finals!",
      summary:
        "YouTube Academy delivers championship glory! {markus-b}, The Anchor, proved his hours of pro tip study paid off magnificently, maintaining unshakeable focus and ironclad nerves throughout the blistering 150cc Lightning Cup battles to claim 1ST PLACE 🥇! {sander}, The Drift King, showcased why tutorials aren't needed when you have natural talent, his fearless precision cornering and flawless drift technique securing 2ND PLACE 🥈 and a ticket to the finals! The battle for supremacy saw studied discipline triumph over raw power. {johanna}, the Master of Momentum, finished third despite her devastating flowing racing lines, while {sergio}, The Thunder, came in third as well with his explosive acceleration unable to overcome the top two's mastery. Natural talent versus YouTube wisdom - both proved championship-worthy! {markus-b} and {sander} advance to face {pal-oskar} and {christoffer-s} in tomorrow's Special Cup finals!",
      players: [
        createPlayer("johanna", 3),
        createPlayer("sergio", 3),
        createPlayer("markus-b", 1),
        createPlayer("sander", 2),
      ],
    },
  ],
};
