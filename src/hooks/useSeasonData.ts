import { useCallback, useEffect, useRef, useState } from "react";
import { parseSeasonCsv, SheetError } from "@/data/sheet/parseSeasonCsv";
import type { ParsedSeason } from "@/data/sheet/parseSeasonCsv";
import { SHEET_CSV_URL } from "@/seasons";

const CACHE_KEY = "mario-kart-season-sheet-v1";
const REFRESH_INTERVAL_MS = 5 * 60 * 1000;
const MIN_REFETCH_GAP_MS = 30 * 1000;
const FETCH_TIMEOUT_MS = 10 * 1000;

export type SeasonDataState = {
  status: "loading" | "ready" | "error";
  data: ParsedSeason | null;
  error: string | null;
  // Set when `data` comes from the saved copy because the live sheet could not be used.
  savedAt: number | null;
};

type CachedSheet = { text: string; savedAt: number };

const readCache = (): CachedSheet | null => {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    return raw ? (JSON.parse(raw) as CachedSheet) : null;
  } catch {
    return null;
  }
};

const writeCache = (text: string) => {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ text, savedAt: Date.now() } satisfies CachedSheet));
  } catch {
    // Storage may be full or blocked; the cache is only a convenience.
  }
};

const errorMessage = (error: unknown) =>
  error instanceof SheetError
    ? error.message
    : "Could not reach the spreadsheet. Check your connection and try again.";

export const useSeasonData = (enabled: boolean) => {
  const [state, setState] = useState<SeasonDataState>({ status: "loading", data: null, error: null, savedAt: null });
  const lastFetchRef = useRef(0);

  const load = useCallback(async (signal?: AbortSignal) => {
    lastFetchRef.current = Date.now();
    try {
      // A hung request must not keep the bracket hidden forever.
      const timeout = AbortSignal.timeout(FETCH_TIMEOUT_MS);
      const response = await fetch(SHEET_CSV_URL, {
        cache: "no-store",
        signal: signal ? AbortSignal.any([signal, timeout]) : timeout,
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const text = await response.text();
      const data = parseSeasonCsv(text);
      writeCache(text);
      setState({ status: "ready", data, error: null, savedAt: null });
    } catch (error) {
      if (signal?.aborted) return;
      const cached = readCache();
      let saved: ParsedSeason | null = null;
      try {
        saved = cached ? parseSeasonCsv(cached.text) : null;
      } catch {
        saved = null;
      }
      setState({
        status: "error",
        data: saved,
        error: errorMessage(error),
        savedAt: saved && cached ? cached.savedAt : null,
      });
    }
  }, []);

  useEffect(() => {
    if (!enabled) return;
    const controller = new AbortController();
    setState((prev) => (prev.data ? prev : { ...prev, status: "loading" }));
    load(controller.signal);

    const refreshIfStale = () => {
      if (document.visibilityState === "visible" && Date.now() - lastFetchRef.current > MIN_REFETCH_GAP_MS) {
        load();
      }
    };
    const interval = window.setInterval(refreshIfStale, REFRESH_INTERVAL_MS);
    window.addEventListener("focus", refreshIfStale);
    return () => {
      controller.abort();
      window.clearInterval(interval);
      window.removeEventListener("focus", refreshIfStale);
    };
  }, [enabled, load]);

  const reload = useCallback(() => {
    setState((prev) => ({ ...prev, status: prev.data ? prev.status : "loading" }));
    load();
  }, [load]);

  return { ...state, reload };
};
