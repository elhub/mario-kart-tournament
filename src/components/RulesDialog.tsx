import type { RulesInfo } from "@/types";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface RulesDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  year: string;
  info: RulesInfo;
  hasPlayerProfiles: boolean;
}

export const RulesDialog = ({ open, onOpenChange, year, info, hasPlayerProfiles }: RulesDialogProps) => (
  <Dialog open={open} onOpenChange={onOpenChange}>
    <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto mx-4 p-0 gap-0">
      <DialogHeader className="bg-teal-600 dark:bg-teal-700 text-white p-6 rounded-t-2xl">
        <DialogTitle className="text-2xl text-white">
          🏁 ELHUB MARIO KART WORLD CHRISTMAS TOURNAMENT {year} 🏆
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
            <li>
              ✅ Only <strong>32 spots available</strong> - first come, first served!
            </li>
            {hasPlayerProfiles && <li>✅ Showcase your unique racing abilities and special skills</li>}
            <li>
              ✅ <strong>Podium prizes</strong> for our top champions
            </li>
            <li>✅ Bragging rights that'll last well into {Number(year) + 1}!</li>
          </ul>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-xl font-semibold mb-3">📅 Tournament Schedule</h3>
          <ul className="space-y-2">
            <li>
              📍 <strong>One race per day</strong>, every weekday
            </li>
            <li>📍 {info.dateRange}</li>
            <li>
              📍 <strong>Time:</strong> {info.time} sharp (don't be late!)
            </li>
            <li>
              📍 <strong>Location:</strong> {info.location}
            </li>
          </ul>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-xl font-semibold mb-3">🏎️ Tournament Format</h3>
          <ul className="space-y-2">
            <li>🏁 Single elimination bracket</li>
            <li>
              🏁 <strong>Top 2 finishers</strong> from each race advance to the next round
            </li>
            <li>🏁 Circuits and CC classes have been pre-selected for each race</li>
            <li>🏁 Choose your in-game character wisely - it could make all the difference!</li>
          </ul>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-xl font-semibold mb-3">📊 Check Out the Brackets!</h3>
          <p>
            You're already viewing the full tournament bracket! Explore the matchups, track your favorite racers, and
            plan your path to victory.
            {hasPlayerProfiles && " Click on player names to see their unique abilities and racing styles!"}
          </p>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-xl font-semibold mb-3">⚡ Quick Facts</h3>
          <ul className="space-y-2">
            <li>✅ 32 racers enter, 1 champion emerges</li>
            <li>✅ Daily races at {info.time}</li>
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
);
