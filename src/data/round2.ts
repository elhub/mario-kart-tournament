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
      isFinished: true,
      prospect:
        "The Quarterfinals bring an elite showdown on the Star Cup! {johanna}, the Master of Momentum, arrives fresh off her first-place finish in Race 1, her flowing racing lines and perfect speed maintenance making her a formidable force. {alexander}, the Intimidator, won Race 2 with his mushroom mastery and determination - his resilience under pressure is legendary. {per-kristian}, the Master of Chaos, secured second in Race 1 with his ability to turn mayhem into opportunity at crucial moments. {lise}, the Perfectionist, earned second in Race 2 through flawless mini-turbos and surgical precision. The Star Cup features Wario Shipyard, Maple Treeway, Mushroom Gorge, and Grumble Volcano - technical tracks where one mistake can be costly. At 100cc speeds, {johanna}'s momentum mastery could dominate the flow-based tracks, while {lise}'s perfect execution might shine on technical sections. {alexander}'s resilience and {per-kristian}'s chaos tactics add wild cards to this championship-caliber matchup. Two race winners clash with two proven contenders - who advances to the semifinals?",
      summary:
        "Dominant Star Cup quarterfinal! {johanna}, the Master of Momentum, proved unstoppable with her flowing racing lines and perfect speed maintenance, claiming first place through sheer momentum mastery across the technical tracks. {per-kristian}, the Master of Chaos, secured second place by turning mayhem into opportunity at crucial moments, his chaos tactics proving decisive. {lise}, the Perfectionist, earned third with her flawless mini-turbos and surgical precision throughout the demanding circuits. {alexander}, the Intimidator, finished fourth despite his aggressive racing style and psychological warfare. {johanna} and {per-kristian} advance to the semifinals!",
      players: [
        createPlayer("johanna", 1),
        createPlayer("alexander", 4),
        createPlayer("per-kristian", 2),
        createPlayer("lise", 3),
      ],
    },
    {
      id: "m10",
      date: "Friday, December 12th 2025",
      time: "11:30 AM",
      circuit: "Flower Cup",
      cc: "100cc",
      location: "Huben",
      isFinished: true,
      prospect:
        "The second Quarterfinal delivers a clash of champions on the Flower Cup! {pal-oskar}, the Guardian, dominated Race 3 with his impenetrable defensive mastery and strategic positioning - his fortress-like composure makes him incredibly difficult to overtake. {christoffer-s}, the Comeback Kid, claimed victory in Race 4 through tactical brilliance and aggressive racing, his psychological warfare capabilities striking fear in opponents. {henrik-h}, the Track Whisperer, secured second in Race 3 by the narrowest of margins, his intimate knowledge of every shortcut and hidden path giving him an edge on unfamiliar circuits. {tor-magnus}, the Rising Star, earned second in Race 4 through fearless natural talent and determination in a super close finish. The Flower Cup features Mario Circuit 3, Daisy Cruiser, DK Mountain, and Luigi Circuit - tracks that reward both defensive positioning and daring shortcuts. At 100cc, {pal-oskar}'s defensive wall meets {christoffer-s}'s aggressive intimidation, while {henrik-h}'s shortcut mastery could unlock hidden advantages and {tor-magnus} aims to prove his rising star status. Two dominant race winners face two hungry second-placers - who punches their ticket to the semifinals?",
      summary:
        "Masterful Flower Cup quarterfinal! {pal-oskar}, the Guardian, maintained his impenetrable fortress throughout the race, his defensive mastery and strategic positioning proving unstoppable across Mario Circuit 3, Daisy Cruiser, DK Mountain, and Luigi Circuit to claim first place. {christoffer-s}, the Comeback Kid, showcased his never-give-up determination and mushroom mastery to secure second place, his resilience under pressure earning him advancement to the semifinals. {tor-magnus}, the Rising Star, demonstrated his natural talent and fearless approach to finish third, proving his championship potential. {henrik-h}, the Track Whisperer, finished fourth despite his intimate knowledge of every shortcut and hidden path on these demanding circuits. {pal-oskar} and {christoffer-s} advance to the semifinals, where two defensive masters will battle for tournament glory!",
      players: [
        createPlayer("pal-oskar", 1),
        createPlayer("christoffer-s", 2),
        createPlayer("henrik-h", 4),
        createPlayer("tor-magnus", 3),
      ],
    },
    {
      id: "m11",
      date: "Monday, December 15th 2025",
      time: "11:30 AM",
      circuit: "Shell Cup",
      cc: "100cc",
      location: "Huben",
      isFinished: true,
      prospect:
        "The third Quarterfinal brings explosive speed to the Shell Cup! {sergio}, The Thunder, won Race 5 after rocketing to an early lead and surviving a relentless challenge in a photo-finish - his lightning-bolt acceleration is legendary. {per-erik}, the Old School Legend, claimed victory in Race 6 with veteran wisdom and timeless techniques, proving experience reigns supreme. {vebjorn}, the Precision Pilot, secured second in Race 5 with pixel-perfect drifts and calculated risks through technical sections. {pratik}, the Speed Demon, finished second in Race 6 after pushing Per Erik to the absolute limit with blistering throttle control and boost optimization. The Shell Cup features Mushroom Bridge, Dry Dry Desert, Bowser's Castle, and Yoshi Circuit - a mix demanding both raw speed and technical mastery. At 100cc, {sergio}'s explosive starts face {pratik}'s record-shattering pace, while {per-erik}'s wisdom battles {vebjorn}'s surgical precision. Two dominant winners meet two fierce challengers who nearly claimed victory. Who emerges victorious from this quarterfinal clash?",
      summary:
        "Precision perfection on the Shell Cup! {vebjorn}, the Precision Pilot, delivered a masterclass in technical racing with pixel-perfect drifts and calculated risks across Mushroom Bridge, Dry Dry Desert, Bowser's Castle, and Yoshi Circuit to claim first place. {sergio}, The Thunder, unleashed his explosive acceleration and lightning-bolt speed to secure second place, his dominant racing style proving unstoppable. {per-erik}, the Old School Legend, demonstrated veteran wisdom and timeless techniques to finish third, his experience shining through. {pratik}, the Speed Demon, finished fourth despite his blistering throttle control and record-breaking pace. {vebjorn} and {sergio} advance to the semifinals, where precision meets explosive power!",
      players: [
        createPlayer("sergio", 2),
        createPlayer("per-erik", 3),
        createPlayer("vebjorn", 1),
        createPlayer("pratik", 4),
      ],
    },
    {
      id: "m12",
      date: "Tuesday, December 16th 2025",
      time: "11:30 AM",
      circuit: "Banana Cup",
      cc: "100cc",
      location: "Huben",
      isFinished: true,
      prospect:
        "The final Quarterfinal delivers high-stakes drama on the Banana Cup! {jorgen} won Race 7 with ice-cold composure and nerves of steel, maintaining absolute control under pressure when victory was on the line. {sander}, the Drift King, claimed Race 8 victory through flawless cornering technique and precision mastery on every turn. {bastian}, The Veteran, secured second in Race 7 with clutch moves at crucial moments, his years of experience shining through. {markus-b}, The Anchor, earned second in Race 8 by staying unshakeably steady through chaos with his ironclad nerves and focus. The Banana Cup brings demanding tracks where both mental fortitude and technical skill matter. At 100cc speeds, {jorgen}'s cool-under-pressure mentality faces {sander}'s corner-perfect precision, while {bastian}'s veteran wisdom battles {markus-b}'s unshakeable steadiness. Two ice-cold winners meet two rock-solid second-placers - who claims the final semifinal spot?",
      summary:
        "The hours of YouTube pro tips paid off! {markus-b}, The Anchor, put his extensive training montage to work, maintaining unshakeable focus and ironclad nerves across the Banana Cup tracks to claim first place - apparently '10 Advanced Drift Techniques The Pros Don't Want You To Know' was worth the watch. {sander}, the Drift King, demonstrated why he needs no tutorials with precision cornering and fearless blue shell dodges to secure second place through pure mastery. {bastian}, The Veteran, finished third with clutch veteran wisdom that no YouTube algorithm could ever teach. {jorgen}, Ice in His Veins, placed fourth despite his cool-under-pressure composure. {markus-b} and {sander} advance to the semifinals - one powered by dedication and research, the other by raw natural talent!",
      players: [
        createPlayer("jorgen", 4),
        createPlayer("sander", 2),
        createPlayer("bastian", 3),
        createPlayer("markus-b", 1),
      ],
    },
  ],
};
