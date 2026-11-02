import { useEffect, useRef } from "react";
import p5 from "p5";
import { cn } from "@/lib/utils";

interface BracketConnectionsProps {
  isVisible?: boolean;
  onReady?: () => void;
}

export const BracketConnections = ({ isVisible = true, onReady }: BracketConnectionsProps) => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);
  const onReadyRef = useRef(onReady);
  onReadyRef.current = onReady;

  useEffect(() => {
    if (!canvasRef.current) return;
    let hasNotifiedReady = false;

    // Race connection mapping: source match -> destination match
    const matchConnections: Record<string, string> = {
      m1: "m9",
      m2: "m9",
      m3: "m10",
      m4: "m10",
      m5: "m11",
      m6: "m11",
      m7: "m12",
      m8: "m12",
      m9: "m13",
      m10: "m13",
      m11: "m14",
      m12: "m14",
      m13: "m15",
      m14: "m15",
    };

    const sketch = (p: p5) => {
      p.setup = () => {
        const parent = canvasRef.current!.parentElement;
        if (!parent) return;
        // Start with viewport size, will resize dynamically
        const canvas = p.createCanvas(parent.clientWidth, parent.clientHeight);
        canvas.parent(canvasRef.current!);
      };

      p.draw = () => {
        p.clear();

        // Dynamically resize canvas to cover all content before drawing
        const parent = canvasRef.current?.parentElement;
        if (parent) {
          const neededWidth = parent.scrollWidth;
          const neededHeight = parent.scrollHeight;

          // Only resize if dimensions changed
          if (p.width !== neededWidth || p.height !== neededHeight) {
            p.resizeCanvas(neededWidth, neededHeight);
          }
        }

        drawConnections(p);

        // p5 starts after window load, so the first frame is the earliest the lines can be shown.
        if (!hasNotifiedReady) {
          hasNotifiedReady = true;
          onReadyRef.current?.();
        }
      };

      p.windowResized = () => {
        const parent = canvasRef.current?.parentElement;
        if (parent) {
          p.resizeCanvas(parent.scrollWidth, parent.scrollHeight);
        }
      };

      const drawConnections = (p: p5) => {
        // Get the canvas container's bounding rect for offset calculation
        const canvasContainer = canvasRef.current?.parentElement;
        if (!canvasContainer) return;

        // Get scroll position
        const scrollLeft = canvasContainer.scrollLeft;
        const scrollTop = canvasContainer.scrollTop;

        // Races on the right side of the screen (need reversed connections)
        const rightSideRaces = new Set(["m5", "m6", "m7", "m8", "m11", "m12", "m14"]);

        // Iterate through all source matches
        Object.entries(matchConnections).forEach(([sourceRaceId, targetRaceId]) => {
          // Get source and target elements
          const sourceElement = document.getElementById(sourceRaceId);
          if (!sourceElement) return;

          const targetElement = document.getElementById(targetRaceId);
          if (!targetElement) return;

          // Get positions relative to the document
          const sourceRect = sourceElement.getBoundingClientRect();
          const targetRect = targetElement.getBoundingClientRect();

          // Determine if this is a right-side match (connection needs to be reversed)
          const isRightSide = rightSideRaces.has(sourceRaceId);

          // Calculate connection points accounting for scroll position
          let startX, startY, endX, endY;

          if (isRightSide) {
            // Right side: draw from left of source to right of target
            startX = sourceRect.left + scrollLeft;
            startY = sourceRect.top + scrollTop + sourceRect.height / 2;
            endX = targetRect.right + scrollLeft;
            endY = targetRect.top + scrollTop + targetRect.height / 2;
          } else {
            // Left side: draw from right of source to left of target
            startX = sourceRect.right + scrollLeft;
            startY = sourceRect.top + scrollTop + sourceRect.height / 2;
            endX = targetRect.left + scrollLeft;
            endY = targetRect.top + scrollTop + targetRect.height / 2;
          }

          // Calculate control points for Bezier curve
          const controlPointDistance = Math.abs(endX - startX) / 2;
          const cp1X = isRightSide ? startX - controlPointDistance : startX + controlPointDistance;
          const cp1Y = startY;
          const cp2X = isRightSide ? endX + controlPointDistance : endX - controlPointDistance;
          const cp2Y = endY;

          // Draw the curved line
          p.strokeWeight(3);
          p.stroke(10, 50, 70, 200); // Steel blue with some transparency
          p.noFill();
          p.bezier(startX, startY, cp1X, cp1Y, cp2X, cp2Y, endX, endY);
        });
      };
    };

    // StrictMode mounts twice in dev, and p5.remove() cannot cancel a sketch whose async setup is still pending.
    const timer = window.setTimeout(() => {
      p5Instance.current = new p5(sketch);
    }, 0);

    return () => {
      window.clearTimeout(timer);
      p5Instance.current?.remove();
      p5Instance.current = null;
    };
  }, []);

  return (
    <div
      ref={canvasRef}
      className={cn(
        "absolute top-0 left-0 w-px h-px pointer-events-none z-0 transition-opacity duration-300",
        !isVisible && "opacity-0"
      )}
    />
  );
};
