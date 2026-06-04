"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type TributesCarouselProps = {
  children: ReactNode;
  className?: string;
};

export default function TributesCarousel({
  children,
  className,
}: TributesCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 4);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 4);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    const observer = new ResizeObserver(updateScrollState);
    observer.observe(el);

    return () => {
      el.removeEventListener("scroll", updateScrollState);
      observer.disconnect();
    };
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-tribute-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.85;
    el.scrollBy({
      left: direction === "left" ? -step : step,
      behavior: "smooth",
    });
  };

  return (
    <div className={cn("relative", className)}>
      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label="เลื่อนซ้าย"
        disabled={!canScrollLeft}
        onClick={() => scroll("left")}
        className="absolute top-1/2 left-0 z-10 hidden size-10 -translate-x-1/2 -translate-y-1/2 rounded-full border-border/60 bg-background shadow-md disabled:opacity-30 md:flex"
      >
        <ChevronLeft className="size-5" />
      </Button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-1 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory"
      >
        {children}
      </div>

      <Button
        type="button"
        variant="outline"
        size="icon"
        aria-label="เลื่อนขวา"
        disabled={!canScrollRight}
        onClick={() => scroll("right")}
        className="absolute top-1/2 right-0 z-10 hidden size-10 translate-x-1/2 -translate-y-1/2 rounded-full border-border/60 bg-background shadow-md disabled:opacity-30 md:flex"
      >
        <ChevronRight className="size-5" />
      </Button>

      <div className="mt-4 flex justify-center gap-2 md:hidden">
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="เลื่อนซ้าย"
          disabled={!canScrollLeft}
          onClick={() => scroll("left")}
          className="size-9 rounded-full"
        >
          <ChevronLeft className="size-4" />
        </Button>
        <Button
          type="button"
          variant="outline"
          size="icon"
          aria-label="เลื่อนขวา"
          disabled={!canScrollRight}
          onClick={() => scroll("right")}
          className="size-9 rounded-full"
        >
          <ChevronRight className="size-4" />
        </Button>
      </div>
    </div>
  );
}
