"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import { chessContact } from "@/data/chess";
import { cn } from "@/lib/utils";

type SectionItem = { id: string; label: string };

/**
 * แถบหัวข้อแบบแอปบนมือถือ: ติดใต้ navbar เลื่อนซ้าย-ขวาได้
 * และไฮไลต์หัวข้อที่กำลังอ่านอยู่ (ซ่อนตั้งแต่ md ขึ้นไป ที่มีสารบัญเต็มแทน)
 */
export function ChessSectionChips({ items }: { items: SectionItem[] }) {
  const [active, setActive] = useState<string | null>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-160px 0px -55% 0px" },
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [items]);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller || !active) return;
    const chip = scroller.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!chip) return;
    const target =
      chip.offsetLeft - (scroller.clientWidth - chip.offsetWidth) / 2;
    scroller.scrollTo({ left: target, behavior: "smooth" });
  }, [active]);

  return (
    <nav
      aria-label="หัวข้อในหน้านี้"
      className="sticky top-(--header-h) z-30 -mx-6 mb-6 border-b border-border bg-background/95 backdrop-blur-sm md:hidden"
    >
      <div
        ref={scrollerRef}
        className="flex gap-2 overflow-x-auto px-6 py-2.5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => {
          const isActive = item.id === active;
          return (
            <a
              key={item.id}
              data-id={item.id}
              href={`#${item.id}`}
              aria-current={isActive ? "location" : undefined}
              className={cn(
                "flex h-10 shrink-0 items-center rounded-full px-4 text-sm whitespace-nowrap transition-colors focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none",
                isActive
                  ? "bg-primary font-medium text-primary-foreground"
                  : "bg-surface text-foreground/80 active:bg-card-header",
              )}
            >
              {item.label}
            </a>
          );
        })}
      </div>
    </nav>
  );
}

/** แถบปุ่มติดต่อ วางเหนือแถบเมนูล่าง แสดงเฉพาะบนมือถือ (ใช้ในหน้า /chess) */
export function ChessMobileActionBar() {
  return (
    <>
      {/* เว้นที่ให้ footer ไม่ถูกแถบปุ่มบัง */}
      <div
        aria-hidden
        className="h-16 md:hidden"
      />
      <div className="fixed inset-x-0 bottom-(--tabbar-h) z-30 border-t border-border bg-background/95 backdrop-blur-md md:hidden">
        <div className="mx-auto grid max-w-lg grid-cols-2 gap-3 px-4 py-2">
          <a
            href={chessContact.lineHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-11 items-center justify-center gap-2 rounded-full bg-primary text-base font-medium text-primary-foreground transition-colors active:bg-accent-hover focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            <MessageCircle className="size-5" />
            LINE
          </a>
          <a
            href={chessContact.phoneHref}
            className="flex h-11 items-center justify-center gap-2 rounded-full bg-background text-base font-medium ring-1 ring-border transition-colors active:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
          >
            <Phone className="size-5" />
            โทรสอบถาม
          </a>
        </div>
      </div>
    </>
  );
}
