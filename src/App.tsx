import { useState } from "react";
import type { Tournament } from "@/types";
import { Round } from "@/components/Round";
import { BracketConnections } from "@/components/BracketConnections";
import { StandInsBadge } from "@/components/StandInsBadge";
import { round1 } from "@/data/round1";
import { round2 } from "@/data/round2";
import { round3 } from "@/data/round3";
import { round4 } from "@/data/round4";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const tournament: Tournament = {
  id: "t1",
  rounds: [round1, round2, round3, round4],
};

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const roundOfSixteenPart1 = {
    ...tournament.rounds[0],
    matches: tournament.rounds[0].matches.slice(0, 4),
  };

  const roundOfSixteenPart2 = {
    ...tournament.rounds[0],
    matches: tournament.rounds[0].matches.slice(4),
  };

  const quarterfinalsPart1 = {
    ...tournament.rounds[1],
    matches: tournament.rounds[1].matches.slice(0, 2),
  };

  const quarterfinalsPart2 = {
    ...tournament.rounds[1],
    matches: tournament.rounds[1].matches.slice(2),
  };

  const semifinalsPart1 = {
    ...tournament.rounds[2],
    matches: tournament.rounds[2].matches.slice(0, 1),
  };

  const semifinalsPart2 = {
    ...tournament.rounds[2],
    matches: tournament.rounds[2].matches.slice(1),
  };

  const finals = {
    ...tournament.rounds[3],
    matches: tournament.rounds[3].matches.slice(0, 1),
  };

  return (
    <div
      className="h-screen w-screen pt-4 md:pt-8 pb-4 md:pb-8 relative overflow-x-auto overflow-y-auto bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/mario-kart-tournament/emkwt-bg-4.jpg')",
      }}
    >
      {/* Background overlay */}
      <div className="fixed inset-0 bg-white/70 dark:bg-black/70 z-0 pointer-events-none" />

      {/* Stand-Ins Badge & Rules Button Container */}
      <div className="fixed top-4 right-4 md:top-[75%] md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10 flex flex-col items-center gap-2 md:gap-6 w-auto md:w-full md:max-w-md">
        <div className="hidden md:flex md:w-full">
          <StandInsBadge />
        </div>

        <Button
          size="lg"
          onClick={() => setIsOpen(true)}
          className="shadow-xl text-xs md:text-base px-3 md:px-4 md:w-full"
        >
          <span className="mr-1 md:mr-2">📋</span>
          <span className="hidden md:inline">Tournament</span>Rules
        </Button>
      </div>

      {/* Rules Modal */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto mx-4 p-0 gap-0">
          <DialogHeader className="bg-teal-600 dark:bg-teal-700 text-white p-6 rounded-t-2xl">
            <DialogTitle className="text-2xl text-white">
              🏁 ELHUB MARIO KART WORLD CHRISTMAS TOURNAMENT 2025 🏆
            </DialogTitle>
          </DialogHeader>
          <div className="py-6 px-6 space-y-6">
            <div>
              <p className="text-lg font-bold mb-2">Hey Elhub Racers! 🎮</p>
              <p>
                Get ready to put your driving skills to the ultimate test! We're excited to announce the{" "}
                <strong>Elhub Mario Kart World Christmas Tournament</strong> - where 32 of Elhub's finest racers will go
                head-to-head in an epic battle for glory!
              </p>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-3">🎯 What's at Stake?</h3>
              <ul className="space-y-2">
                <li>✅ Only <strong>32 spots available</strong> - first come, first served!</li>
                <li>✅ Showcase your unique racing abilities and special skills</li>
                <li>✅ <strong>Podium prizes</strong> for our top champions</li>
                <li>✅ Bragging rights that'll last well into 2026!</li>
              </ul>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-3">📅 Tournament Schedule</h3>
              <ul className="space-y-2">
                <li>📍 <strong>One race per day</strong>, every weekday</li>
                <li>📍 December 1st - December 19th</li>
                <li>📍 <strong>Time:</strong> 11:30 AM sharp (don't be late!)</li>
                <li>📍 <strong>Location:</strong> Huben</li>
              </ul>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-3">🏎️ Tournament Format</h3>
              <ul className="space-y-2">
                <li>🏁 Single elimination bracket</li>
                <li>🏁 <strong>Top 2 finishers</strong> from each race advance to the next round</li>
                <li>🏁 Circuits and CC classes have been pre-selected for each race</li>
                <li>🏁 Choose your in-game character wisely - it could make all the difference!</li>
              </ul>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-3">📊 Check Out the Brackets!</h3>
              <p>
                You're already viewing the full tournament bracket! Explore the matchups, track your favorite racers, and
                plan your path to victory. Click on player names to see their unique abilities and racing styles!
              </p>
            </div>

            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold mb-3">⚡ Quick Facts</h3>
              <ul className="space-y-2">
                <li>✅ 32 racers enter, 1 champion emerges</li>
                <li>✅ Daily races at 11:30 AM</li>
                <li>✅ Pre-selected circuits and CC classes</li>
                <li>✅ Prizes for the podium</li>
              </ul>
            </div>

            <div className="text-center py-4 border-t">
              <p className="text-xl font-bold">May the blue shells be ever in your favor! 🐢💨</p>
              <p className="text-sm text-muted-foreground mt-2">
                See you on the track,
                <br />
                <strong>The Tournament Committee</strong>
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      <BracketConnections />
      <div
        id="bracket-grid"
        className="grid grid-cols-7 grid-rows-4 min-w-[1600px] gap-4 md:gap-8 my-4 md:my-8 mx-4 md:mx-8 relative z-[1]"
      >
        {/* === Column 1 (4 small boxes) === */}
        <Round round={roundOfSixteenPart1} columnId={1} />

        {/* === Column 2 (2 medium boxes) === */}
        <Round round={quarterfinalsPart1} columnId={2} />

        {/* === Column 3,4,5 (1 tall box) === */}
        <Round round={semifinalsPart1} columnId={3} />
        <Round round={finals} columnId={4} />
        <Round round={semifinalsPart2} columnId={5} />

        {/* === Column 6 (2 medium boxes) === */}
        <Round round={quarterfinalsPart2} columnId={6} />

        {/* === Column 7 (4 small boxes) === */}
        <Round round={roundOfSixteenPart2} columnId={7} />
      </div>
    </div>
  );
}

export default App;
