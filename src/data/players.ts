import type { Player } from "@/types";

// Player profiles without position data (position is race-specific)
export const playerProfiles: Record<string, Omit<Player, "position">> = {
  p1: {
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
  p2: {
    id: "p2",
    name: "Hedda",
    description:
      "Queen of Speed - {name}'s lightning-fast reflexes and tactical item usage leave opponents eating her dust on the straights.",
    attributes: [
      { emoji: "⚡", label: "Lightning Speed" },
      { emoji: "👑", label: "Royalty" },
      { emoji: "🎮", label: "Tactical Genius" },
    ],
  },
  p3: {
    id: "p3",
    name: "Ole Kristian",
    description:
      "The Strategist - {name} calculates every shortcut and boost pad with mathematical precision, turning races into perfectly executed symphonies.",
    attributes: [
      { emoji: "🧠", label: "Brain Power" },
      { emoji: "🗺️", label: "Navigator" },
      { emoji: "🔬", label: "Analyst" },
    ],
  },
  p4: {
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
  p5: {
    id: "p5",
    name: "Christoffer S.",
    description:
      "The Comeback Kid - {name} never gives up, using every mushroom and star to claw back from impossible positions.",
    attributes: [
      { emoji: "🍄", label: "Mushroom Master" },
      { emoji: "💪", label: "Never Give Up" },
      { emoji: "🔄", label: "Comeback King" },
    ],
  },
  p6: {
    id: "p6",
    name: "Henrik S.",
    description:
      "Rainbow Road Royalty - {name} navigates treacherous tracks with grace, making hairpin turns look effortless while others fall behind.",
    attributes: [
      { emoji: "🌈", label: "Rainbow Master" },
      { emoji: "🦢", label: "Graceful" },
      { emoji: "🏔️", label: "Peak Performance" },
    ],
  },
  p7: {
    id: "p7",
    name: "Lise",
    description:
      "The Perfectionist - {name}'s smooth racing lines and flawless mini-turbos create an unstoppable momentum that rivals fear.",
    attributes: [
      { emoji: "✨", label: "Flawless" },
      { emoji: "🎨", label: "Perfect Lines" },
      { emoji: "⚙️", label: "Optimized" },
    ],
  },
  p8: {
    id: "p8",
    name: "Gard",
    description:
      "Shell Shock Specialist - {name}'s uncanny ability to land triple red shells with surgical precision has earned him legendary status.",
    attributes: [
      { emoji: "🐢", label: "Shell Expert" },
      { emoji: "🎯", label: "Sniper" },
      { emoji: "🏆", label: "Legendary" },
    ],
  },
  p9: {
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
  p10: {
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
  p11: {
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
  p12: {
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
  p13: {
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
  p14: {
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
  p15: {
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
  p16: {
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
  p17: {
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
  p18: {
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
  p19: {
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
  p20: {
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
  p21: {
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
  p22: {
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
  p23: {
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
  p24: {
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
  p25: {
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
  p26: {
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
  p27: {
    id: "p27",
    name: "Bastian",
    description:
      "The Veteran - {name}'s years of experience shine through clutch plays and knowing exactly when to unleash that star power.",
    attributes: [
      { emoji: "⭐", label: "Star Power" },
      { emoji: "🎖️", label: "Veteran" },
      { emoji: "🧙", label: "Wise" },
    ],
  },
  p28: {
    id: "p28",
    name: "Jørgen",
    description:
      "Ice in His Veins - {name} stays cool under pressure, turning close finishes into victories with nerves of steel.",
    attributes: [
      { emoji: "❄️", label: "Ice Cold" },
      { emoji: "🧊", label: "Calm" },
      { emoji: "🔩", label: "Nerves of Steel" },
    ],
  },
  p29: {
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
  p30: {
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
  p31: {
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
  p32: {
    id: "p32",
    name: "Sander",
    description:
      "The Drift King - {name}'s precision cornering and fearless blue shell dodges make him a force to reckon with on any track.",
    attributes: [
      { emoji: "🎯", label: "Precision" },
      { emoji: "💨", label: "Drift Master" },
      { emoji: "🛡️", label: "Defense" },
    ],
  },
};

// Helper function to create a player with position
export function createPlayer(playerId: string, position?: number): Player {
  const profile = playerProfiles[playerId];
  if (!profile) {
    throw new Error(`Player profile not found for ID: ${playerId}`);
  }
  return {
    ...profile,
    position,
  };
}
