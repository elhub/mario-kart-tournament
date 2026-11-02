import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

interface SeasonStatusProps {
  isLoading: boolean;
  error: string | null;
  savedAt: number | null;
  isEmpty: boolean;
  warnings: string[];
  showWarnings: boolean;
  onRetry: () => void;
}

const Notice = ({ tone, children }: { tone: "info" | "error"; children: ReactNode }) => (
  <div
    className={
      tone === "error"
        ? "rounded-xl border-2 border-red-400 bg-red-50 dark:bg-red-950 px-4 py-3 shadow-xl text-sm"
        : "rounded-xl border-2 border-teal-400 bg-white dark:bg-gray-800 px-4 py-3 shadow-xl text-sm"
    }
  >
    {children}
  </div>
);

export const SeasonStatus = ({ isLoading, error, savedAt, isEmpty, warnings, showWarnings, onRetry }: SeasonStatusProps) => {
  const notices: ReactNode[] = [];

  if (isLoading) {
    notices.push(
      <Notice key="loading" tone="info">
        ⏳ Loading the bracket from the spreadsheet…
      </Notice>
    );
  }

  if (error) {
    notices.push(
      <Notice key="error" tone="error">
        <p className="font-semibold">⚠️ Couldn't load the latest data</p>
        <p className="mt-1">{error}</p>
        {savedAt && <p className="mt-1">Showing a saved copy from {new Date(savedAt).toLocaleString()}.</p>}
        <Button size="sm" className="mt-3" onClick={onRetry}>
          Try again
        </Button>
      </Notice>
    );
  }

  if (!isLoading && !error && isEmpty) {
    notices.push(
      <Notice key="empty" tone="info">
        🏁 The bracket will fill up as racers are announced. Check back soon!
      </Notice>
    );
  }

  if (showWarnings) {
    notices.push(
      <Notice key="warnings" tone={warnings.length ? "error" : "info"}>
        <p className="font-semibold">Spreadsheet check</p>
        {warnings.length === 0 ? (
          <p className="mt-1">No problems found.</p>
        ) : (
          <ul className="mt-1 list-disc pl-5 space-y-1">
            {warnings.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        )}
      </Notice>
    );
  }

  if (notices.length === 0) return null;

  return <div className="fixed top-[68px] left-1/2 -translate-x-1/2 z-20 w-[min(92vw,28rem)] space-y-3">{notices}</div>;
};
