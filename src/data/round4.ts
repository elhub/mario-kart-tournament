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
      isFinished: true,
      prospect:
        "THE FINALS - SIXTEEN BECAME EIGHT, EIGHT BECAME FOUR, NOW FOUR BECOME ONE! The Special Cup awaits the ultimate showdown at 150cc! {pal-oskar}, the Guardian, arrives as the fortress that cannot fall - his impenetrable defensive wall and strategic banana mastery claimed the Leaf Cup Semifinal with dominating perfection. His banana placement has become the stuff of legend, an insurmountable barrier that breaks opponents' spirits. {markus-b}, The Anchor, stormed through the Lightning Cup Semifinal with championship glory, his YouTube Academy training paying off in spectacular fashion - but whispers speak of something more: wall ride magic discovered in obscure tutorials, advanced techniques the pros don't want you to know. His hours of study have unlocked abilities beyond comprehension. {christoffer-s}, the Comeback Kid, earned his finals spot through pure never-give-up determination and mushroom mastery in the Leaf Cup, his legendary resilience under pressure proving he belongs among the elite. When others falter, he rises. {sander}, The Drift King, demonstrated why natural talent needs no tutorials with fearless precision cornering in the Lightning Cup - his flawless technique is poetry in motion, each drift a masterclass. Two Semifinal champions who dominated their races face two second-placers who've proven they can rise to any occasion. Defense versus studied precision. Comeback magic versus natural drift mastery. At the tournament's climax on the legendary Special Cup circuits, only one can claim the crown. Who becomes the Mario Kart World Champion?",
      summary:
        "ABSOLUTE CHAOS AT 150CC! What a championship thriller! {sander}, The Drift King, pulled off the tournament's biggest plot twist by dominating the Special Cup with 48 points to claim the crown - then casually dropped that he'd been grinding on his SECRET Switch 2 the previous evening (wait, when did you even GET that?!). Meanwhile {markus-b}, The Anchor, came in as everyone's pick to win after obliterating opponents in earlier rounds with his YouTube Academy PhD and wall ride sorcery, but the championship gods had other plans and he landed third with 41 points (turns out studying doesn't guarantee As in Mario Kart either). {pal-oskar}, the Guardian, grabbed second place with 42 points, just one point ahead of Markus in what can only be described as a three-way heart attack special - positions shuffled like a card deck every single track, with nerve levels reaching orbit and spectators forgetting to breathe. {christoffer-s} raced with stand-in {tor-magnus} who boldly guaranteed a top 3 finish, then proceeded to finish fourth with 24 points, which {tor-magnus} insists counts as 'super close' (buddy, that's mathematically closer to last than to third, but we appreciate the confidence). Your 2025 Elhub Mario Kart World Champion: {sander}!",
      players: [
        createPlayer("pal-oskar", 2),
        createPlayer("markus-b", 3),
        createPlayer("christoffer-s", 4),
        createPlayer("sander", 1),
      ],
    },
  ],
};
