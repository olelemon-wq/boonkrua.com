import type { ReactNode } from "react";
import {
  ArrowUp,
  ChessBishop,
  ChessPawn,
  ChessQueen,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

export type PieceKind = "khon" | "met" | "bia" | "biaNgai" | "promote";

type Cell = [col: number, row: number];

type Diagram = {
  /** สิ่งที่วางในช่อง (คอลัมน์, แถว) ของตาราง 3×3 — แถว 0 = ข้างหน้า */
  pieces: { at: Cell; icon: LucideIcon; flipped?: boolean }[];
  moves?: Cell[];
  captures?: Cell[];
  arrows?: Cell[];
};

const FRONT: Cell = [1, 0];
const DIAG_FRONT: Cell[] = [[0, 0], [2, 0]];
const DIAG_BACK: Cell[] = [[0, 2], [2, 2]];
const CENTER: Cell = [1, 1];

/**
 * ไอคอนประกอบ: lucide ไม่มีหมากรุกไทยโดยตรง จึงใช้ตัวที่ใกล้เคียง
 * โคน ≈ บิชอป, เม็ด ≈ ควีน, เบี้ย = เบี้ย (เบี้ยหงาย = เบี้ยกลับหัว)
 */
const DIAGRAMS: Record<PieceKind, Diagram> = {
  khon: {
    pieces: [{ at: CENTER, icon: ChessBishop }],
    moves: [FRONT, ...DIAG_FRONT, ...DIAG_BACK],
  },
  met: {
    pieces: [{ at: CENTER, icon: ChessQueen }],
    moves: [...DIAG_FRONT, ...DIAG_BACK],
  },
  bia: {
    pieces: [{ at: CENTER, icon: ChessPawn }],
    moves: [FRONT],
    captures: DIAG_FRONT,
  },
  biaNgai: {
    pieces: [{ at: CENTER, icon: ChessPawn, flipped: true }],
    moves: [...DIAG_FRONT, ...DIAG_BACK],
  },
  // เบี้ยเดินขึ้นไปแล้วหงาย: เบี้ย (ล่าง) → ลูกศร → เบี้ยหงาย (บน)
  promote: {
    pieces: [
      { at: [1, 2], icon: ChessPawn },
      { at: [1, 0], icon: ChessPawn, flipped: true },
    ],
    arrows: [[1, 1]],
  },
};

const CELL = 18; // px

const has = (list: Cell[] | undefined, c: number, r: number) =>
  list?.some(([x, y]) => x === c && y === r) ?? false;

/** แผนภาพทางเดินของหมากแต่ละตัว (ตกแต่งประกอบคำอธิบาย, aria-hidden) */
export default function PieceMoves({ kind }: { kind: PieceKind }) {
  const d = DIAGRAMS[kind];

  return (
    <div
      aria-hidden
      className="grid grid-cols-3 grid-rows-3 gap-px overflow-hidden rounded-lg bg-card-header p-px"
      style={{ width: CELL * 3 + 4, height: CELL * 3 + 4 }}
    >
      {Array.from({ length: 9 }, (_, i) => {
        const c = i % 3;
        const r = Math.floor(i / 3);
        const piece = d.pieces.find(({ at: [x, y] }) => x === c && y === r);
        let content: ReactNode = null;
        if (piece) {
          const Icon = piece.icon;
          content = (
            <Icon
              className={cn("size-[15px] text-foreground", piece.flipped && "rotate-180")}
              strokeWidth={2.2}
            />
          );
        } else if (has(d.arrows, c, r)) {
          content = <ArrowUp className="size-3 text-primary" strokeWidth={2.5} />;
        } else if (has(d.moves, c, r)) {
          content = <span className="size-2 rounded-full bg-primary" />;
        } else if (has(d.captures, c, r)) {
          content = <span className="size-2 rounded-full ring-[1.5px] ring-primary" />;
        }
        return (
          <span
            key={i}
            style={{ width: CELL, height: CELL }}
            className={cn(
              "flex items-center justify-center",
              piece ? "bg-card-header" : (r + c) % 2 === 0 ? "bg-background" : "bg-surface",
            )}
          >
            {content}
          </span>
        );
      })}
    </div>
  );
}
