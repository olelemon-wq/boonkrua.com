import { ChessKnight } from "lucide-react";
import { BOARD_FILES, type Square } from "@/data/chess-board";
import { cn } from "@/lib/utils";

type MiniBoardProps = {
  /** ช่องของแต่ละหัวข้อ */
  stops: Square[];
  /** หัวข้อที่ม้ายืนอยู่ */
  active: number;
  /** ขนาดช่อง (px) — ทุกช่องเท่ากันเสมอ */
  square: number;
  /** แสดงเลขลำดับหัวข้อบนช่อง */
  numbers?: boolean;
  /** แสดงพิกัด ก–ญ และ 1–8 รอบกระดาน */
  coordinates?: boolean;
  /** ตัวหมาก: ไอคอนม้า หรือจุด (สำหรับกระดานจิ๋ว) */
  piece?: "knight" | "dot";
  className?: string;
};

/** กระดานหมากรุกไทยจำลอง 8×8 (ตกแต่ง, aria-hidden) */
export default function MiniBoard({
  stops,
  active,
  square,
  numbers = false,
  coordinates = false,
  piece = "knight",
  className,
}: MiniBoardProps) {
  const [file, rank] = stops[active] ?? stops[0];
  const size = square * 8;
  const pieceSize = piece === "dot" ? Math.max(4, Math.round(square * 0.7)) : square;

  const board = (
    <div
      className={cn(
        "rounded-lg bg-card-header/70 shadow-[0_2px_6px_rgba(0,0,0,0.06)]",
        square >= 12 ? "p-1.5" : "rounded-md p-[3px]",
      )}
    >
      <div
        className="relative grid grid-cols-8 grid-rows-8 overflow-hidden rounded-[3px]"
        style={{ width: size, height: size }}
      >
        {Array.from({ length: 64 }, (_, i) => {
          const row = Math.floor(i / 8);
          const f = i % 8;
          const r = 8 - row;
          const light = (row + f) % 2 === 0;
          const stop = stops.findIndex(([sf, sr]) => sf === f && sr === r);
          return (
            <span
              key={i}
              style={{ width: square, height: square }}
              className={cn(
                "flex items-center justify-center text-[9px] leading-none font-medium tabular-nums transition-colors duration-300",
                light ? "bg-background" : "bg-card-header/45",
                stop === active && "bg-primary/25",
                numbers && stop >= 0 ? "text-foreground/45" : "text-transparent",
              )}
            >
              {numbers && stop >= 0 && stop !== active ? stop + 1 : ""}
            </span>
          );
        })}
        <span
          className="absolute top-0 left-0 flex items-center justify-center text-foreground transition-transform duration-300 ease-out motion-reduce:transition-none"
          style={{
            width: square,
            height: square,
            transform: `translate(${file * square}px, ${(8 - rank) * square}px)`,
          }}
        >
          {piece === "knight" ? (
            <ChessKnight
              style={{ width: square * 0.72, height: square * 0.72 }}
              strokeWidth={2}
            />
          ) : (
            <span
              className="rounded-full bg-foreground"
              style={{ width: pieceSize, height: pieceSize }}
            />
          )}
        </span>
      </div>
    </div>
  );

  if (!coordinates) {
    return (
      <div aria-hidden className={cn("select-none", className)}>
        {board}
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className={cn("grid select-none grid-cols-[auto_auto] gap-x-1.5 gap-y-1", className)}
    >
      <div className="flex flex-col pt-1.5">
        {[8, 7, 6, 5, 4, 3, 2, 1].map((r) => (
          <span
            key={r}
            style={{ height: square }}
            className="flex items-center text-[10px] tabular-nums text-foreground/40"
          >
            {r}
          </span>
        ))}
      </div>
      {board}
      <span />
      <div className="flex px-1.5">
        {BOARD_FILES.map((f) => (
          <span
            key={f}
            style={{ width: square }}
            className="text-center text-[10px] text-foreground/40"
          >
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}
