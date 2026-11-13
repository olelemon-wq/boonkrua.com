"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ArrowUp } from "lucide-react";
import MiniBoard from "@/components/chess/MiniBoard";
import { squareFor } from "@/data/chess-board";
import { useReadingPosition } from "@/lib/reading-position";
import { cn } from "@/lib/utils";

const SHOW_AFTER = 600; // px

/**
 * ปุ่มกลับขึ้นบนสุด (มือถือ/แท็บเล็ต) โผล่เมื่อเลื่อนอ่านลงมาแล้ว
 * ในหน้าที่มีกระดานหมากรุก ปุ่มจะเป็นกระดานจิ๋วที่บอกว่ากำลังอ่านถึงหัวข้อไหน
 */
export default function BackToTop() {
  const pathname = usePathname();
  const position = useReadingPosition();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > SHOW_AFTER);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // หน้า /chess มีแถบปุ่ม LINE/โทร อยู่เหนือแถบเมนูล่าง จึงยกปุ่มขึ้นอีกชั้น
  const raised = pathname === "/chess";
  const withBoard = position !== null;
  const stops = Array.from({ length: 10 }, (_, i) => squareFor(i));

  return (
    <button
      type="button"
      aria-label="กลับขึ้นบนสุด"
      tabIndex={visible ? 0 : -1}
      aria-hidden={!visible}
      onClick={() => {
        const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      }}
      className={cn(
        "fixed right-4 z-30 flex items-center justify-center shadow-[0_6px_20px_rgba(0,0,0,0.14)] transition-[opacity,translate] duration-300 ease-out active:scale-95 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none motion-reduce:transition-none lg:hidden",
        withBoard
          ? "size-14 rounded-2xl bg-background/95 ring-1 ring-border backdrop-blur-sm"
          : "size-12 rounded-full bg-foreground text-background",
        raised
          ? "bottom-[calc(var(--tabbar-h)+5rem)]"
          : "bottom-[calc(var(--tabbar-h)+1rem)]",
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      {withBoard ? (
        <>
          <MiniBoard stops={stops} active={position} square={5} piece="dot" />
          <span className="absolute -top-2 -right-2 flex size-6 items-center justify-center rounded-full bg-foreground text-background shadow-sm">
            <ArrowUp aria-hidden className="size-3.5" strokeWidth={2.5} />
          </span>
        </>
      ) : (
        <ArrowUp aria-hidden className="size-5" />
      )}
    </button>
  );
}
