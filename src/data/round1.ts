import type { Round } from "@/types";

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
      // isFinished: true,
      prospect:
        "The Mushroom Cup opens with an absolutely thrilling clash of styles! {p2}, the Queen of Speed, brings her lightning-fast reflexes and tactical genius to the track, making her the odds-on favorite. But don't count out {p1}, the Drift King, whose precision cornering could prove devastating on these technical circuits. {p3}'s mathematical approach means he's already calculated every shortcut twice over, while {p4}'s chaos-loving nature could turn this entire race on its head with one perfectly timed red shell. Expect fireworks as speed meets precision meets strategy meets pure mayhem - and with {p2}'s tactical prowess against {p1}'s defensive capabilities, the battle for first could come down to the final corner of the final track!",
      players: [
        {
          id: "p1",
          name: "Sander",
          description:
            "The Drift King - {name}'s precision cornering and fearless blue shell dodges make him a force to reckon with on any track.",
          attributes: [
            { emoji: "🎯", label: "Precision" },
            { emoji: "💨", label: "Drift Master" },
            { emoji: "🛡️", label: "Defense" },
          ],
          position: 2,
        },
        {
          id: "p2",
          name: "Hedda",
          description:
            "Queen of Speed - {name}'s lightning-fast reflexes and tactical item usage leave opponents eating her dust on the straights.",
          attributes: [
            { emoji: "⚡", label: "Lightning Speed" },
            { emoji: "👑", label: "Royalty" },
            { emoji: "🎮", label: "Tactical Genius" },
          ],
          position: 1,
        },
        {
          id: "p3",
          name: "Ole Kristian",
          description:
            "The Strategist - {name} calculates every shortcut and boost pad with mathematical precision, turning races into perfectly executed symphonies.",
          attributes: [
            { emoji: "🧠", label: "Brain Power" },
            { emoji: "🗺️", label: "Navigator" },
            { emoji: "🔬", label: "Analyst" },
          ],
          position: 3,
        },
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
          position: 4,
        },
      ],
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
      players: [
        {
          id: "p5",
          name: "Christoffer S.",
          description:
            "The Comeback Kid - {name} never gives up, using every mushroom and star to claw back from impossible positions.",
          attributes: [
            { emoji: "🍄", label: "Mushroom Master" },
            { emoji: "💪", label: "Never Give Up" },
            { emoji: "🔄", label: "Comeback King" },
          ],
          position: 3,
        },
        {
          id: "p6",
          name: "Henrik S.",
          description:
            "Rainbow Road Royalty - {name} navigates treacherous tracks with grace, making hairpin turns look effortless while others fall behind.",
          attributes: [
            { emoji: "🌈", label: "Rainbow Master" },
            { emoji: "🦢", label: "Graceful" },
            { emoji: "🏔️", label: "Peak Performance" },
          ],
          position: 1,
        },
        {
          id: "p7",
          name: "Lise",
          description:
            "The Perfectionist - {name}'s smooth racing lines and flawless mini-turbos create an unstoppable momentum that rivals fear.",
          attributes: [
            { emoji: "✨", label: "Flawless" },
            { emoji: "🎨", label: "Perfect Lines" },
            { emoji: "⚙️", label: "Optimized" },
          ],
          position: 2,
        },
        {
          id: "p8",
          name: "Gard",
          description:
            "Shell Shock Specialist - {name}'s uncanny ability to land triple red shells with surgical precision has earned him legendary status.",
          attributes: [
            { emoji: "🐢", label: "Shell Expert" },
            { emoji: "🎯", label: "Sniper" },
            { emoji: "🏆", label: "Legendary" },
          ],
          position: 4,
        },
      ],
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
      players: [
        {
          id: "p9",
          name: "Pål Oskar",
          description:
            "The Guardian - {name}'s defensive driving and strategic banana placement make him an impenetrable wall on the track.",
          attributes: [
            { emoji: "🛡️", label: "Guardian" },
            { emoji: "🍌", label: "Banana Tactician" },
            { emoji: "🏰", label: "Fortress" },
          ],
        },
        {
          id: "p10",
          name: "Fredrik",
          description:
            "Boost Master - {name}'s mastery of mushroom chains and turbo slides propels him to victory with explosive acceleration.",
          attributes: [
            { emoji: "🚀", label: "Rocket Boost" },
            { emoji: "⚡", label: "Turbo Slide" },
            { emoji: "💨", label: "Speed Demon" },
          ],
        },
        {
          id: "p11",
          name: "Sandra",
          description:
            "The Huntress - {name} stalks her prey with patience, then strikes with devastating speed when the moment is right.",
          attributes: [
            { emoji: "🏹", label: "Huntress" },
            { emoji: "🦅", label: "Predator" },
            { emoji: "⚡", label: "Strike Speed" },
          ],
        },
        {
          id: "p12",
          name: "Henrik H.",
          description:
            "Track Whisperer - {name} knows every shortcut, every jump, every hidden path that others can only dream of discovering.",
          attributes: [
            { emoji: "🗺️", label: "Path Finder" },
            { emoji: "🔍", label: "Explorer" },
            { emoji: "🌟", label: "Secret Master" },
          ],
        },
      ],
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
      players: [
        {
          id: "p13",
          name: "Alexander",
          description:
            "The Intimidator - {name}'s aggressive racing style and fearless overtakes leave opponents second-guessing every move.",
          attributes: [
            { emoji: "😤", label: "Intimidating" },
            { emoji: "🏎️", label: "Aggressive" },
            { emoji: "💢", label: "Fearless" },
          ],
        },
        {
          id: "p14",
          name: "Vebjørn",
          description:
            "Precision Pilot - {name}'s pixel-perfect drifts and calculated risks make him a master of high-speed technical circuits.",
          attributes: [
            { emoji: "🎯", label: "Pixel Perfect" },
            { emoji: "🔧", label: "Technical" },
            { emoji: "📐", label: "Calculated" },
          ],
        },
        {
          id: "p15",
          name: "Brynhildur",
          description:
            "The Phoenix - {name} rises from last place with devastating comebacks, fueled by bullet bills and pure determination.",
          attributes: [
            { emoji: "🔥", label: "Phoenix Rising" },
            { emoji: "🚀", label: "Bullet Bill" },
            { emoji: "💎", label: "Determined" },
          ],
        },
        {
          id: "p16",
          name: "Enzo",
          description:
            "Gravity Defier - {name} makes impossible jumps look routine, turning vertical shortcuts into his personal highways to victory.",
          attributes: [
            { emoji: "🪂", label: "Gravity Defier" },
            { emoji: "🦘", label: "Jump Master" },
            { emoji: "🌌", label: "Sky Walker" },
          ],
        },
      ],
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
      players: [
        {
          id: "p17",
          name: "Sergio",
          description:
            "The Thunder - {name}'s explosive starts and dominant leads make him a lightning bolt on wheels that's impossible to catch.",
          attributes: [
            { emoji: "⚡", label: "Thunder" },
            { emoji: "💥", label: "Explosive Start" },
            { emoji: "👑", label: "Dominant" },
          ],
        },
        {
          id: "p18",
          name: "Tor Magnus",
          description:
            "Rising Star - {name}'s natural talent and fearless approach to rainbow roads mark him as the future champion in the making.",
          attributes: [
            { emoji: "⭐", label: "Rising Star" },
            { emoji: "🌈", label: "Rainbow Walker" },
            { emoji: "🏅", label: "Natural Talent" },
          ],
        },
        {
          id: "p19",
          name: "Markus E.",
          description:
            "The Tactician - {name}'s mind games and strategic item hoarding create psychological warfare that breaks opponents' spirits.",
          attributes: [
            { emoji: "🧠", label: "Mind Games" },
            { emoji: "🎭", label: "Psychological" },
            { emoji: "📦", label: "Item Hoarder" },
          ],
        },
        {
          id: "p20",
          name: "Mari",
          description:
            "Valkyrie of Victory - {name} charges through the pack with warrior-like determination, claiming podiums as her birthright.",
          attributes: [
            { emoji: "⚔️", label: "Valkyrie" },
            { emoji: "🛡️", label: "Warrior" },
            { emoji: "🏆", label: "Champion" },
          ],
        },
      ],
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
      players: [
        {
          id: "p21",
          name: "Pratik",
          description:
            "Speed Demon - {name}'s throttle control and boost optimization create blistering lap times that shatter records.",
          attributes: [
            { emoji: "😈", label: "Speed Demon" },
            { emoji: "⚡", label: "Throttle Control" },
            { emoji: "📊", label: "Record Breaker" },
          ],
        },
        {
          id: "p22",
          name: "Mike",
          description:
            "The Wall - {name}'s defensive mastery and position holding make overtaking him an exercise in frustration for rivals.",
          attributes: [
            { emoji: "🧱", label: "The Wall" },
            { emoji: "🛡️", label: "Defensive" },
            { emoji: "🔒", label: "Position Lock" },
          ],
        },
        {
          id: "p23",
          name: "Per Erik",
          description:
            "Old School Legend - {name}'s classic racing techniques and timeless strategies prove that experience beats youth every time.",
          attributes: [
            { emoji: "👴", label: "Old School" },
            { emoji: "📜", label: "Classic" },
            { emoji: "🏛️", label: "Legendary" },
          ],
        },
        {
          id: "p24",
          name: "Linn Victoria",
          description:
            "The Showgirl - {name}'s flashy tricks and spectacular jumps entertain crowds while devastating opponents with style.",
          attributes: [
            { emoji: "🎪", label: "Showgirl" },
            { emoji: "🤸", label: "Acrobatic" },
            { emoji: "✨", label: "Spectacular" },
          ],
        },
      ],
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
      players: [
        {
          id: "p25",
          name: "Ingvar",
          description:
            "The Innovator - {name} discovers new racing lines and unconventional strategies that revolutionize how the game is played.",
          attributes: [
            { emoji: "💡", label: "Innovator" },
            { emoji: "🔬", label: "Experimental" },
            { emoji: "🚀", label: "Revolutionary" },
          ],
        },
        {
          id: "p26",
          name: "Frode",
          description:
            "Consistency King - {name}'s reliable performances and steady hands guarantee podium finishes race after race without fail.",
          attributes: [
            { emoji: "📈", label: "Consistent" },
            { emoji: "🎯", label: "Reliable" },
            { emoji: "🏅", label: "Podium Regular" },
          ],
        },
        {
          id: "p27",
          name: "Player 27",
          description:
            "The Veteran - {name}'s years of experience shine through clutch plays and knowing exactly when to unleash that star power.",
          attributes: [
            { emoji: "⭐", label: "Star Power" },
            { emoji: "🎖️", label: "Veteran" },
            { emoji: "🧙", label: "Wise" },
          ],
        },
        {
          id: "p28",
          name: "Player 16", // male
          description:
            "Ice in His Veins - {name} stays cool under pressure, turning close finishes into victories with nerves of steel.",
          attributes: [
            { emoji: "❄️", label: "Ice Cold" },
            { emoji: "🧊", label: "Calm" },
            { emoji: "🔩", label: "Nerves of Steel" },
          ],
        },
      ],
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
        "The second Mushroom Cup race brings together determination and flow! {p29}, The Anchor, provides unshakeable focus and ironclad nerves that keep him steady when chaos erupts. {p30}, the Nitro Queen, has perfect mushroom timing and boost chains that create acceleration bursts leaving rivals in the dust. {p31}, The Underdog, refuses to accept defeat, fueling miraculous victories against all odds, while {p32}, the Master of Momentum, flows through tracks like water, maintaining perfect speed while others brake and stumble. This could be a race where {p30} bursts into an early lead with her nitro mastery, {p29} stays unshakeably in contention, {p31} mounts an improbable challenge from behind, and {p32} simply flows past everyone when they least expect it. Expect the unexpected!",
      players: [
        {
          id: "p29",
          name: "Markus B.",
          description:
            "The Anchor - {name}'s unshakeable focus and ironclad nerves keep him steady when chaos erupts around every corner.",
          attributes: [
            { emoji: "⚓", label: "The Anchor" },
            { emoji: "🧘", label: "Focused" },
            { emoji: "🔩", label: "Ironclad" },
          ],
        },
        {
          id: "p30",
          name: "Caroline",
          description:
            "Nitro Queen - {name}'s perfect mushroom timing and boost chains create acceleration bursts that leave rivals in the dust.",
          attributes: [
            { emoji: "💥", label: "Nitro Queen" },
            { emoji: "⏱️", label: "Perfect Timing" },
            { emoji: "🔗", label: "Boost Chain" },
          ],
        },
        {
          id: "p31",
          name: "Joachim",
          description:
            "The Underdog - {name}'s tenacity and refusal to accept defeat fuel miraculous victories against all odds and expectations.",
          attributes: [
            { emoji: "🐕", label: "Underdog" },
            { emoji: "💪", label: "Tenacious" },
            { emoji: "✨", label: "Miraculous" },
          ],
        },
        {
          id: "p32",
          name: "Johanna",
          description:
            "Master of Momentum - {name} flows through tracks like water, maintaining perfect speed while others brake and stumble.",
          attributes: [
            { emoji: "🌊", label: "Flow Master" },
            { emoji: "💨", label: "Momentum" },
            { emoji: "🎯", label: "Speed Perfect" },
          ],
        },
      ],
    },
  ],
};
