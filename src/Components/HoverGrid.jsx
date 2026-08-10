import { useMemo } from "react";

/**
 * HoverGrid
 * A grid of cells that "lights up" individually on hover — no mouse
 * tracking needed, just CSS :hover + transition per cell.
 *
 * Usage:
 *   <div style={{ position: "relative" }}>
 *     <HoverGrid rows={10} cols={24} />
 *     <div style={{ position: "relative", zIndex: 1, pointerEvents: "none" }}>
 *       ...your header text/logo/nav, sitting visually on top of the grid...
 *     </div>
 *   </div>
 *
 * Tip: give text/nav elements pointerEvents: "auto" individually
 * (links, buttons) so they stay clickable while the grid still
 * catches hover everywhere else.
 */
export default function HoverGrid({
  rows = 10,
  cols = 24,
  bg = "#f5f1e8",        // cream, matches your hero background
  cellBorder = "rgba(63, 88, 114, 0.12)",
  hoverColor = "#9fc2d2", // pastel blue accent
  glow = "rgba(63, 88, 114, 0.25)",
}) {
  const cells = useMemo(() => Array.from({ length: rows * cols }), [rows, cols]);

  return (
    <div className="hover-grid-wrapper">
      <div
        className="hover-grid"
        style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}
      >
        {cells.map((_, i) => (
          <div key={i} className="hover-grid-cell" />
        ))}
      </div>

      <style>{`
        .hover-grid-wrapper {
          width: 100%;
          height: 100%;
          background: ${bg};
        }
        .hover-grid {
          display: grid;
          grid-auto-rows: 50px;      /* was 1fr — fixed height so cells actually render */
          width: 100%;
          height: 100%;
      }
        .hover-grid-cell {
          border: 1px solid ${cellBorder};
          background-color: transparent;
          transition: background-color 160ms ease-out, box-shadow 160ms ease-out;
        }
        .hover-grid-cell:hover {
          background-color: ${hoverColor};
          box-shadow: 0 0 12px ${glow};
        }
      `}</style>
    </div>
  );
}