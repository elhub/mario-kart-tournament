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
        "The Mushroom Cup opens with an absolutely thrilling clash of styles! {hedda}, the Queen of Speed, brings her lightning-fast reflexes and tactical genius to the track, making her the odds-on favorite. But don't count out {johanna}, the Master of Momentum, whose flowing racing lines and perfect speed maintenance could prove devastating on these technical circuits. {ole-kristian}'s mathematical approach means he's already calculated every shortcut twice over, while {per-kristian}'s chaos-loving nature could turn this entire race on its head with one perfectly timed red shell. Expect fireworks as speed meets flow meets strategy meets pure mayhem - and with {hedda}'s tactical prowess against {johanna}'s momentum mastery, the battle for first could come down to the final corner of the final track!",
      summary:
        "What a race! {johanna} claimed victory with her signature momentum mastery, flowing through the Mushroom Cup tracks with perfect speed maintenance that proved unstoppable. {per-kristian} secured second place, his chaos-loving nature creating opportunities that others couldn't capitalize on. {ole-kristian}'s mathematical precision earned him third, calculating every shortcut with strategic prowess. {hedda}, despite her lightning-fast reflexes and tactical genius, finished fourth in a competitive field. Both {johanna} and {per-kristian} advance to the quarterfinals!",
      players: [
        createPlayer("johanna", 1),
        createPlayer("hedda", 4),
        createPlayer("ole-kristian", 3),
        createPlayer("per-kristian", 2),
      ],
    },
    {
      id: "m2",
      date: "Tuesday, December 2nd 2025",
      time: "11:30 AM",
      circuit: "Flower Cup",
      cc: "50cc",
      location: "Huben",
      isFinished: true,
      prospect:
        "The Flower Cup promises to be a masterclass in contrasts! {henrik-s}, the Rainbow Road Royalty, glides into this race as the frontrunner with his graceful navigation of even the most treacherous tracks. But lurking just behind is the enigmatic {lise}, whose flawless mini-turbos and perfect racing lines could create unstoppable momentum. {christoffer-s}, the Comeback Kid, thrives on adversity - count on him to use every mushroom to mount spectacular comebacks that'll keep everyone on edge. Meanwhile, {gard}'s surgical precision with triple red shells means no lead is safe. This race could see {henrik-s}'s grace tested by {lise}'s perfection, while {christoffer-s} waits for that perfect moment to strike from behind, and {gard} plays sniper from whatever position he finds himself in!",
      summary:
        "Incredible! {christoffer-s}, the Comeback Kid, proved his reputation well-earned by claiming first place through sheer determination and mushroom mastery across the Flower Cup circuits! {lise} demonstrated why she's called the Perfectionist, her flawless mini-turbos and smooth racing lines securing a well-deserved second place. {henrik-s}'s graceful navigation through treacherous tracks earned him third place, while {gard}, the Shell Shock Specialist, finished fourth. {christoffer-s} and {lise} advance to the quarterfinals, showcasing the power of resilience and precision!",
      players: [
        createPlayer("christoffer-s", 1),
        createPlayer("henrik-s", 3),
        createPlayer("lise", 2),
        createPlayer("gard", 4),
      ],
    },
    {
      id: "m3",
      date: "Wednesday, December 3rd 2025",
      time: "11:30 AM",
      circuit: "Lightning Cup",
      cc: "50cc",
      location: "Huben",
      isFinished: true,
      prospect:
        "Lightning Cup lives up to its name with this electrifying quartet! {fredrik}, the Boost Master, enters with explosive acceleration that could see him rocket into an early lead with his mastery of mushroom chains. But can he hold off {sandra}, the Huntress, who stalks her prey with patience before striking with devastating speed? {pal-oskar}'s defensive prowess makes him an impenetrable wall - his strategic banana placement could completely shut down certain sections of the track. And then there's {henrik-h}, the Track Whisperer, who knows shortcuts the others can only dream of discovering. This race could unfold like a chess match: {fredrik} surges ahead, {sandra} waits for the perfect moment, {pal-oskar} builds his fortress, and {henrik-h} might just disappear down a secret path and emerge victorious!",
      summary:
        "What a thrilling Lightning Cup race! {pal-oskar}, the Guardian, proved impenetrable with his defensive mastery and strategic positioning, claiming first place with the composure of a fortress that cannot be breached. The real drama unfolded in an intense battle for second between {henrik-h} and {sandra}! {henrik-h}, the Track Whisperer, used his knowledge of every shortcut and hidden path to edge out {sandra} by the narrowest of margins, securing second place. {sandra}, the Huntress, stalked her prey with patience and devastating speed throughout, her predatory racing style earning her a hard-fought third place in this closely contested finish. {fredrik}, despite his explosive acceleration and mushroom chain mastery, finished fourth. {pal-oskar} and {henrik-h} advance to the quarterfinals after this electrifying showdown!",
      players: [
        createPlayer("pal-oskar", 1),
        createPlayer("fredrik", 4),
        createPlayer("sandra", 3),
        createPlayer("henrik-h", 2),
      ],
    },
    {
      id: "m4",
      date: "Thursday, December 4th 2025",
      time: "11:30 AM",
      circuit: "Shell Cup",
      cc: "50cc",
      location: "Huben",
      isFinished: true,
      prospect:
        "Shell Cup brings together four fierce competitors with wildly different approaches! {alexander}, the Intimidator, will use aggressive overtakes to assert dominance early, putting psychological pressure on everyone. {tor-magnus}, the Rising Star, combines natural talent with a fearless approach that could mark this as his breakout moment. {brynhildur}, the Phoenix, specializes in devastating comebacks from last place, fueled by bullet bills and pure determination. And then there's {enzo}, the Gravity Defier, who makes impossible jumps look routine, turning vertical shortcuts into his personal highways to victory. The battle here could see {alexander}'s aggression clash with {tor-magnus}'s fearless natural talent, while {brynhildur} waits to rise from the ashes, and {enzo} attempts aerial shortcuts that could completely change the race dynamics!",
      summary:
        "Spectacular Shell Cup victory! {alexander}, the Intimidator, showed great tactical abilities by relying on {hedda} as stand-in, using aggressive racing and psychological warfare to claim first place! The competition for second place was super close - {tor-magnus}, the Rising Star, edged out {enzo} in a nail-biting finish, his fearless natural talent and determination securing the qualifying position by the narrowest of margins. {enzo}, the Gravity Defier, finished third after making impossible jumps look routine throughout the race. {brynhildur}, the Phoenix, finished fourth but demonstrated the resilience that defines her racing style. {alexander} and {tor-magnus} advance to the quarterfinals!",
      players: [
        createPlayer("alexander", 1),
        createPlayer("tor-magnus", 2),
        createPlayer("brynhildur", 4),
        createPlayer("enzo", 3),
      ],
    },
    {
      id: "m5",
      date: "Friday, December 5th 2025",
      time: "11:30 AM",
      circuit: "Banana Cup",
      cc: "50cc",
      location: "Huben",
      isFinished: true,
      prospect:
        "Banana Cup serves up an explosive cocktail of talent! {sergio}, The Thunder, brings explosive starts and dominant leads - he's a lightning bolt on wheels that's nearly impossible to catch once he gets ahead. {vebjorn}, the Precision Pilot, brings pixel-perfect drifts and calculated risks that make him a master of high-speed technical circuits. {markus-e}'s tactical mind games and strategic item hoarding could break opponents' spirits before the first lap is done, while {mari}, the Valkyrie of Victory, charges through packs with warrior-like determination, treating podiums as her birthright. Expect {sergio} to burst into the lead, {vebjorn} to challenge with surgical precision on technical sections, {markus-e} to orchestrate chaos from the middle, and {mari} to fight tooth and nail for every position!",
      summary:
        "Breathtaking Banana Cup thriller! {sergio}, The Thunder, lived up to his explosive reputation by rocketing into a commanding early advantage, his lightning-bolt speed seemingly unbeatable. But as the race progressed, {markus-e}, the Tactician, mounted a relentless challenge with his strategic prowess and psychological warfare. The final stretch saw an incredibly tight duel for victory, with {sergio} barely holding off {markus-e} in a photo-finish where both racers gave everything they had! {vebjorn}, the Precision Pilot, secured second place with his pixel-perfect drifts and calculated racing throughout the technical sections. {mari}, the Valkyrie of Victory, fought with warrior determination to finish fourth. {sergio} and {vebjorn} claim their spots in the quarterfinals after this edge-of-your-seat showdown!",
      players: [createPlayer("sergio", 1), createPlayer("vebjorn", 2), createPlayer("markus-e", 3), createPlayer("mari", 4)],
    },
    {
      id: "m6",
      date: "Monday, December 8th 2025",
      time: "11:30 AM",
      circuit: "Leaf Cup",
      cc: "50cc",
      location: "Huben",
      isFinished: true,
      prospect:
        "Leaf Cup presents a fascinating tactical puzzle! {pratik}, the Speed Demon, enters with throttle control and boost optimization that creates blistering lap times - he's here to shatter records. {mike}, The Wall, makes overtaking an exercise in frustration with his defensive mastery and position holding. {per-erik} brings old school techniques and timeless strategies that prove experience can trump youth, while {linn-victoria}, The Showgirl, plans to entertain with flashy tricks and spectacular jumps while devastating opponents with style. This race could see {pratik} set a blistering pace from the front, {mike} lock down second position like Fort Knox, {per-erik} use veteran wisdom to exploit any mistakes, and {linn-victoria} attempt something spectacular that either launches her to victory or sends her tumbling down the standings!",
      summary:
        "What an absolute nail-biter in the Leaf Cup! {per-erik}, the Old School Legend, proved that experience conquers all, claiming victory with his timeless racing techniques and veteran wisdom. But {pratik}, the Speed Demon, pushed him to the absolute limit with blistering throttle control and boost optimization - the gap between first and second was razor-thin right to the finish line! Meanwhile, {linn-victoria}, The Showgirl, delivered spectacular entertainment with her flashy style to capture third place, narrowly holding off {mike} (with {cecilie} as stand-in) in another incredibly tight battle. The Wall's defensive mastery secured fourth, but the margin separating third and fourth was minuscule. {per-erik} and {pratik} advance to the quarterfinals after this double photo-finish drama!",
      players: [
        createPlayer("pratik", 2),
        createPlayer("mike", 4),
        createPlayer("per-erik", 1),
        createPlayer("linn-victoria", 3),
      ],
    },
    {
      id: "m7",
      date: "Tuesday, December 9th 2025",
      time: "11:30 AM",
      circuit: "Star Cup",
      cc: "50cc",
      location: "Huben",
      isFinished: true,
      prospect:
        "Star Cup shines with innovation and consistency! {ingvar}, The Innovator, has discovered new racing lines and unconventional strategies that could revolutionize this race - expect the unexpected. {frode}, the Consistency King, brings reliable performances and steady hands that guarantee he'll be there at the end, lurking on the podium. {bastian}'s years of experience mean clutch plays and perfect star power timing, while {jorgen} keeps ice in his veins, staying cool under pressure and turning close finishes into victories with nerves of steel. Watch for {ingvar} to try something wild that either pays off brilliantly or spectacularly fails, {frode} to steadily accumulate points through pure consistency, {bastian} to make veteran moves at crucial moments, and {jorgen} to maintain his composure when others crack under pressure!",
      summary:
        "Brilliant Star Cup performance! {jorgen} lived up to his reputation with ice in his veins, maintaining absolute composure under pressure to claim first place with nerves of steel when it mattered most. {bastian}, The Veteran, showcased his years of experience with clutch moves at crucial moments, securing second place through wisdom and perfect timing. {frode}, the Consistency King, delivered exactly what his name promises - steady, reliable racing that earned him third place through pure consistency. {ingvar}, The Innovator, finished fourth after attempting unconventional strategies and revolutionary racing lines throughout the competition. {jorgen} and {bastian} advance to the quarterfinals!",
      players: [createPlayer("ingvar", 4), createPlayer("frode", 3), createPlayer("bastian", 2), createPlayer("jorgen", 1)],
    },
    {
      id: "m8",
      date: "Wednesday, December 10th 2025",
      time: "11:30 AM",
      circuit: "Mushroom Cup",
      cc: "50cc",
      location: "Huben",
      isFinished: true,
      prospect:
        "The second Mushroom Cup race brings together determination and precision! {markus-b}, The Anchor, provides unshakeable focus and ironclad nerves that keep him steady when chaos erupts. {caroline}, the Nitro Queen, has perfect mushroom timing and boost chains that create acceleration bursts leaving rivals in the dust. {joachim}, The Underdog, refuses to accept defeat, fueling miraculous victories against all odds, while {sander}, the Drift King, masters every corner with precision and fearless blue shell dodges. This could be a race where {caroline} bursts into an early lead with her nitro mastery, {markus-b} stays unshakeably in contention, {joachim} mounts an improbable challenge from behind, and {sander} demonstrates flawless cornering when it matters most. Expect the unexpected!",
      summary:
        "Stunning Mushroom Cup finale! {sander}, the Drift King, mastered every corner with absolute precision to claim first place, his flawless cornering technique proving decisive throughout the race. {markus-b}, The Anchor, demonstrated exactly why he's called that - his unshakeable focus and ironclad nerves kept him steady through all the chaos to secure second place. {joachim}, The Underdog, lived up to his never-give-up spirit by fighting for third place against all odds. {caroline}, the Nitro Queen, finished fourth despite her perfect mushroom timing and boost chain mastery. {sander} and {markus-b} advance to the quarterfinals, completing the Round of Sixteen!",
      players: [
        createPlayer("markus-b", 2),
        createPlayer("caroline", 4),
        createPlayer("joachim", 3),
        createPlayer("sander", 1),
      ],
    },
  ],
};
