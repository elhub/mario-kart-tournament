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
      prospect:
        "THE FINALS - SIXTEEN BECAME EIGHT, EIGHT BECAME FOUR, NOW FOUR BECOME ONE! The Special Cup awaits the ultimate showdown at 150cc! {pal-oskar}, the Guardian, arrives as the fortress that cannot fall - his impenetrable defensive wall and strategic banana mastery claimed the Leaf Cup Semifinal with dominating perfection. His banana placement has become the stuff of legend, an insurmountable barrier that breaks opponents' spirits. {markus-b}, The Anchor, stormed through the Lightning Cup Semifinal with championship glory, his YouTube Academy training paying off in spectacular fashion - but whispers speak of something more: wall ride magic discovered in obscure tutorials, advanced techniques the pros don't want you to know. His hours of study have unlocked abilities beyond comprehension. {christoffer-s}, the Comeback Kid, earned his finals spot through pure never-give-up determination and mushroom mastery in the Leaf Cup, his legendary resilience under pressure proving he belongs among the elite. When others falter, he rises. {sander}, The Drift King, demonstrated why natural talent needs no tutorials with fearless precision cornering in the Lightning Cup - his flawless technique is poetry in motion, each drift a masterclass. Two Semifinal champions who dominated their races face two second-placers who've proven they can rise to any occasion. Defense versus studied precision. Comeback magic versus natural drift mastery. At the tournament's climax on the legendary Special Cup circuits, only one can claim the crown. Who becomes the Mario Kart World Champion?",
      players: [createPlayer("pal-oskar"), createPlayer("markus-b"), createPlayer("christoffer-s"), createPlayer("sander")],
    },
  ],
};
