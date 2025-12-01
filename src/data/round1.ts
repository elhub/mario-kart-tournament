import type { Round } from "@/types";
import { createPlayer } from "./players";

export const round1: Round = {
  id: "r1",
  name: "Round of Sixteen",
  matches: [
    {
      id: "m1",
      date: "Monday, December 1st 2025",
      time: "12:00 PM",
      circuit: "Mushroom Cup",
      cc: "50cc",
      location: "Huben",
      isFinished: true,
      prospect:
        "The Mushroom Cup opens with an absolutely thrilling clash of styles! {p2}, the Queen of Speed, brings her lightning-fast reflexes and tactical genius to the track, making her the odds-on favorite. But don't count out {p1}, the Master of Momentum, whose flowing racing lines and perfect speed maintenance could prove devastating on these technical circuits. {p3}'s mathematical approach means he's already calculated every shortcut twice over, while {p4}'s chaos-loving nature could turn this entire race on its head with one perfectly timed red shell. Expect fireworks as speed meets flow meets strategy meets pure mayhem - and with {p2}'s tactical prowess against {p1}'s momentum mastery, the battle for first could come down to the final corner of the final track!",
      summary:
        "What a race! {p1} dominated from start to finish, showing why she's called the Master of Momentum with her flowing racing lines that kept her ahead of the pack. The battle for second was intense, with {p4} using his chaos mastery perfectly to claim the silver position with a perfectly timed red shell on the final lap! {p3} showed his strategic prowess by securing third place with mathematical precision, while {p2}, despite being the pre-race favorite, had to settle for fourth after an unfortunate banana peel incident on Rainbow Road. Both {p1} and {p4} advance to the quarterfinals in what was an absolutely electric opening to the tournament!",
      players: [createPlayer("p1", 1), createPlayer("p2", 4), createPlayer("p3", 3), createPlayer("p4", 2)],
    },
    {
      id: "m2",
      date: "Tuesday, December 2nd 2025",
      time: "11:30 AM",
      circuit: "Flower Cup",
      cc: "50cc",
      location: "Huben",
      // isFinished: true,
      prospect:
        "The Flower Cup promises to be a masterclass in contrasts! {p6}, the Rainbow Road Royalty, glides into this race as the frontrunner with his graceful navigation of even the most treacherous tracks. But lurking just behind is the enigmatic {p7}, whose flawless mini-turbos and perfect racing lines could create unstoppable momentum. {p5}, the Comeback Kid, thrives on adversity - count on him to use every mushroom to mount spectacular comebacks that'll keep everyone on edge. Meanwhile, {p8}'s surgical precision with triple red shells means no lead is safe. This race could see {p6}'s grace tested by {p7}'s perfection, while {p5} waits for that perfect moment to strike from behind, and {p8} plays sniper from whatever position he finds himself in!",
      players: [createPlayer("p5", 3), createPlayer("p6", 1), createPlayer("p7", 2), createPlayer("p8", 4)],
    },
    {
      id: "m3",
      date: "Wednesday, December 3rd 2025",
      time: "11:30 AM",
      circuit: "Lightning Cup",
      cc: "50cc",
      location: "Huben",
      // isFinished: true,
      prospect:
        "Lightning Cup lives up to its name with this electrifying quartet! {p10}, the Boost Master, enters with explosive acceleration that could see him rocket into an early lead with his mastery of mushroom chains. But can he hold off {p11}, the Huntress, who stalks her prey with patience before striking with devastating speed? {p9}'s defensive prowess makes him an impenetrable wall - his strategic banana placement could completely shut down certain sections of the track. And then there's {p12}, the Track Whisperer, who knows shortcuts the others can only dream of discovering. This race could unfold like a chess match: {p10} surges ahead, {p11} waits for the perfect moment, {p9} builds his fortress, and {p12} might just disappear down a secret path and emerge victorious!",
      players: [createPlayer("p9"), createPlayer("p10"), createPlayer("p11"), createPlayer("p12")],
    },
    {
      id: "m4",
      date: "Thursday, December 4th 2025",
      time: "11:30 AM",
      circuit: "Shell Cup",
      cc: "50cc",
      location: "Huben",
      // isFinished: true,
      prospect:
        "Shell Cup brings together four fierce competitors with wildly different approaches! {p13}, the Intimidator, will use aggressive overtakes to assert dominance early, putting psychological pressure on everyone. {p14}'s pixel-perfect drifts make him a master of technical circuits - expect him to nail every apex with calculated precision. {p15}, the Phoenix, specializes in devastating comebacks from last place, fueled by bullet bills and pure determination. And then there's {p16}, the Gravity Defier, who makes impossible jumps look routine, turning vertical shortcuts into his personal highways to victory. The battle here could see {p13}'s aggression clash with {p14}'s technical mastery, while {p15} waits to rise from the ashes, and {p16} attempts aerial shortcuts that could completely change the race dynamics!",
      players: [createPlayer("p13"), createPlayer("p14"), createPlayer("p15"), createPlayer("p16")],
    },
    {
      id: "m5",
      date: "Friday, December 5th 2025",
      time: "11:30 AM",
      circuit: "Banana Cup",
      cc: "50cc",
      location: "Huben",
      // isFinished: true,
      prospect:
        "Banana Cup serves up an explosive cocktail of talent! {p17}, The Thunder, brings explosive starts and dominant leads - he's a lightning bolt on wheels that's nearly impossible to catch once he gets ahead. {p18}, the Rising Star, combines natural talent with a fearless approach to Rainbow Roads, marking him as a future champion who might just announce his arrival today. {p19}'s tactical mind games and strategic item hoarding could break opponents' spirits before the first lap is done, while {p20}, the Valkyrie of Victory, charges through packs with warrior-like determination, treating podiums as her birthright. Expect {p17} to burst into the lead, {p18} to fearlessly challenge him, {p19} to orchestrate chaos from the middle, and {p20} to fight tooth and nail for every position!",
      players: [createPlayer("p17"), createPlayer("p18"), createPlayer("p19"), createPlayer("p20")],
    },
    {
      id: "m6",
      date: "Monday, December 8th 2025",
      time: "11:30 AM",
      circuit: "Leaf Cup",
      cc: "50cc",
      location: "Huben",
      // isFinished: true,
      prospect:
        "Leaf Cup presents a fascinating tactical puzzle! {p21}, the Speed Demon, enters with throttle control and boost optimization that creates blistering lap times - he's here to shatter records. {p22}, The Wall, makes overtaking an exercise in frustration with his defensive mastery and position holding. {p23} brings old school techniques and timeless strategies that prove experience can trump youth, while {p24}, The Showgirl, plans to entertain with flashy tricks and spectacular jumps while devastating opponents with style. This race could see {p21} set a blistering pace from the front, {p22} lock down second position like Fort Knox, {p23} use veteran wisdom to exploit any mistakes, and {p24} attempt something spectacular that either launches her to victory or sends her tumbling down the standings!",
      players: [createPlayer("p21"), createPlayer("p22"), createPlayer("p23"), createPlayer("p24")],
    },
    {
      id: "m7",
      date: "Tuesday, December 9th 2025",
      time: "11:30 AM",
      circuit: "Star Cup",
      cc: "50cc",
      location: "Huben",
      // isFinished: true,
      prospect:
        "Star Cup shines with innovation and consistency! {p25}, The Innovator, has discovered new racing lines and unconventional strategies that could revolutionize this race - expect the unexpected. {p26}, the Consistency King, brings reliable performances and steady hands that guarantee he'll be there at the end, lurking on the podium. {p27}'s years of experience mean clutch plays and perfect star power timing, while {p28} keeps ice in his veins, staying cool under pressure and turning close finishes into victories with nerves of steel. Watch for {p25} to try something wild that either pays off brilliantly or spectacularly fails, {p26} to steadily accumulate points through pure consistency, {p27} to make veteran moves at crucial moments, and {p28} to maintain his composure when others crack under pressure!",
      players: [createPlayer("p25"), createPlayer("p26"), createPlayer("p27"), createPlayer("p28")],
    },
    {
      id: "m8",
      date: "Wednesday, December 10th 2025",
      time: "11:30 AM",
      circuit: "Mushroom Cup",
      cc: "50cc",
      location: "Huben",
      // isFinished: true,
      prospect:
        "The second Mushroom Cup race brings together determination and precision! {p29}, The Anchor, provides unshakeable focus and ironclad nerves that keep him steady when chaos erupts. {p30}, the Nitro Queen, has perfect mushroom timing and boost chains that create acceleration bursts leaving rivals in the dust. {p31}, The Underdog, refuses to accept defeat, fueling miraculous victories against all odds, while {p32}, the Drift King, masters every corner with precision and fearless blue shell dodges. This could be a race where {p30} bursts into an early lead with her nitro mastery, {p29} stays unshakeably in contention, {p31} mounts an improbable challenge from behind, and {p32} demonstrates flawless cornering when it matters most. Expect the unexpected!",
      players: [createPlayer("p29"), createPlayer("p30"), createPlayer("p31"), createPlayer("p32")],
    },
  ],
};
