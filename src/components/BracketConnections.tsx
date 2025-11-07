import { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import p5 from "p5";

export const BracketConnections = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

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
          // Check if source match is finished
          const sourceElement = document.getElementById(sourceRaceId);
          if (!sourceElement) return;

          // Check if match has finished flag
          const finishedFlag = sourceElement.querySelector(".finished-flag");
          if (!finishedFlag) return;

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

    p5Instance.current = new p5(sketch);

    return () => {
      if (p5Instance.current) {
        p5Instance.current.remove();
      }
    };
  }, []);

  return (
    <Box ref={canvasRef} position="absolute" top={0} left={0} width="1px" height="1px" pointerEvents="none" zIndex={0} />
  );
};
