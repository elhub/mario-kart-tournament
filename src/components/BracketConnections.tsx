import { useEffect, useRef } from "react";
import { Box } from "@chakra-ui/react";
import p5 from "p5";

export const BracketConnections = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const p5Instance = useRef<p5 | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Match connection mapping: source match -> destination match
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
      const getCanvasSize = () => {
        const parent = canvasRef.current?.parentElement;
        const grid = document.getElementById("bracket-grid");
        if (!parent || !grid) return { width: 0, height: 0 };

        // Get the grid's actual rendered size and position
        const gridRect = grid.getBoundingClientRect();
        const parentRect = parent.getBoundingClientRect();

        // Calculate total content size including scroll offset
        const scrollLeft = parent.scrollLeft;
        const scrollTop = parent.scrollTop;

        // Total width/height needed is the furthest edge of content
        const contentRight = gridRect.right - parentRect.left + scrollLeft;
        const contentBottom = gridRect.bottom - parentRect.top + scrollTop;

        // Use the larger of viewport or actual content
        const width = Math.max(parent.clientWidth, contentRight);
        const height = Math.max(parent.clientHeight, contentBottom);

        return { width, height };
      };

      p.setup = () => {
        const parent = canvasRef.current!.parentElement;
        if (!parent) return;
        const { width, height } = getCanvasSize();
        const canvas = p.createCanvas(width, height);
        canvas.parent(canvasRef.current!);
      };

      p.draw = () => {
        p.clear();
        drawConnections(p);
      };

      p.windowResized = () => {
        const { width, height } = getCanvasSize();
        if (width > 0 && height > 0) {
          p.resizeCanvas(width, height);
        }
      };

      const drawConnections = (p: p5) => {
        // Get the canvas container's bounding rect for offset calculation
        const canvasContainer = canvasRef.current?.parentElement;
        if (!canvasContainer) return;

        // Get scroll position
        const scrollLeft = canvasContainer.scrollLeft;
        const scrollTop = canvasContainer.scrollTop;

        // Matches on the right side of the screen (need reversed connections)
        const rightSideMatches = new Set(["m5", "m6", "m7", "m8", "m11", "m12", "m14"]);

        // Iterate through all source matches
        Object.entries(matchConnections).forEach(([sourceMatchId, targetMatchId]) => {
          // Check if source match is finished
          const sourceElement = document.getElementById(sourceMatchId);
          if (!sourceElement) return;

          // Check if match has finished flag
          const finishedFlag = sourceElement.querySelector(".finished-flag");
          if (!finishedFlag) return;

          const targetElement = document.getElementById(targetMatchId);
          if (!targetElement) return;

          // Get positions relative to the document
          const sourceRect = sourceElement.getBoundingClientRect();
          const targetRect = targetElement.getBoundingClientRect();

          // Determine if this is a right-side match (connection needs to be reversed)
          const isRightSide = rightSideMatches.has(sourceMatchId);

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
    <Box ref={canvasRef} position="absolute" top={0} left={0} width="100%" height="100%" pointerEvents="none" zIndex={0} />
  );
};
