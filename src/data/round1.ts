import type { Round } from "@/types";

export const round1: Round = {
  id: "r1",
  name: "Round of Sixteen",
  matches: [
    {
      id: "m1",
      date: "Monday, December 1st 2025",
      time: "11:30 AM",
      circuit: "Mushroom Cup",
      cc: "50cc",
      location: "Huben",
      // isFinished: true,
      players: [
        {
          id: "p1",
          name: "Sander", // male
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
          name: "Per Kristian", // male
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
      players: [
        {
          id: "p5",
          name: "Christoffer S.", // male
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
          name: "Henrik", // male
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
          name: "Player 7",
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
          name: "Gard", // male
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
      players: [
        {
          id: "p9",
          name: "Pål Oskar", // male
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
          name: "Player 10", // male
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
          name: "Player 12",
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
          name: "Vebjørn", // male
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
      id: "m5",
      date: "Friday, December 5th 2025",
      time: "11:30 AM",
      circuit: "Banana Cup",
      cc: "50cc",
      location: "Huben",
      // isFinished: true,
      players: [
        {
          id: "p17",
          name: "Sergio", // male
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
          name: "Tor Magnus", // male
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
          name: "Player 19",
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
          name: "Mike", // male
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
          name: "Player 23",
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
          name: "Player 24",
          description:
            "The Showman - {name}'s flashy tricks and spectacular jumps entertain crowds while devastating opponents with style.",
          attributes: [
            { emoji: "🎪", label: "Showman" },
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
          name: "Frode", // male
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
          name: "Player 28", // male
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
      id: "m8",
      date: "Wednesday, December 10th 2025",
      time: "11:30 AM",
      circuit: "Mushroom Cup",
      cc: "50cc",
      location: "Huben",
      // isFinished: true,
      players: [
        {
          id: "p29",
          name: "Markus B.", // male
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
          name: "Player 32",
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
