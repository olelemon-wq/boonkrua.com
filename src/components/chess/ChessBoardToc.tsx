"use client";

import { useState } from "react";
import MiniBoard from "@/components/chess/MiniBoard";
import { coord, squareFor } from "@/data/chess-board";
import { cn } from "@/lib/utils";

type TocItem = { id: string; label: string };

/** สารบัญแบบกระดานหมากรุกจำลอง (จอ md ขึ้นไป): ชี้หัวข้อไหน ม้าจะกระโดดไปช่องของหัวข้อนั้น */
export default function ChessBoardToc({ items }: { items: TocItem[] }) {
  const [active, setActive] = useState(0);
  const stops = items.map((_, i) => squareFor(i));

  return (
    <nav
      aria-label="สารบัญ"
      className="mt-12 hidden rounded-2xl bg-surface px-6 py-6 md:grid md:grid-cols-[auto_minmax(0,1fr)] md:items-center md:gap-7 lg:px-8"
    >
      <MiniBoard stops={stops} active={active} square={22} numbers coordinates />

      <ol className="grid grid-cols-2 gap-x-5">
        {items.map((item, i) => (
          <li key={item.id} className="border-b border-border/80">
            <a
              href={`#${item.id}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              className="group flex items-center gap-2.5 rounded-sm py-2.5 text-base font-light text-foreground/80 transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              <span
                className={cn(
                  "w-7 shrink-0 rounded-md py-0.5 text-center text-xs font-medium tabular-nums transition-colors duration-200",
                  i === active
                    ? "bg-foreground text-background"
                    : "bg-background text-foreground/60 ring-1 ring-border",
                )}
              >
                {coord(stops[i])}
              </span>
              <span className="leading-snug">{item.label}</span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
