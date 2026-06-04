"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { FamilyGalleryImage } from "@/data/gallery-family";

type MasonryPhotoGalleryProps = {
  images: FamilyGalleryImage[];
};

export default function MasonryPhotoGallery({
  images,
}: MasonryPhotoGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? null : (index - 1 + images.length) % images.length
    );
  }, [images.length]);
  const showNext = useCallback(() => {
    setActiveIndex((index) =>
      index === null ? null : (index + 1) % images.length
    );
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeIndex, close, showNext, showPrev]);

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <div className="columns-3 gap-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg bg-muted/30 text-left shadow-[0_5px_15px_0_rgba(0,0,0,0.08)] ring-1 ring-border/40 transition-shadow hover:shadow-[0_8px_20px_0_rgba(0,0,0,0.12)] focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-auto w-full"
              sizes="33vw"
            />
          </button>
        ))}
      </div>

      {activeImage && activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 p-4 backdrop-blur-sm md:p-8"
          role="dialog"
          aria-modal="true"
          aria-label="ดูภาพขยาย"
          onClick={close}
        >
          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="ปิด"
            onClick={close}
            className="absolute top-4 right-4 z-10 size-10 rounded-full border-border/60 bg-white/80 text-foreground shadow-sm hover:bg-muted/50"
          >
            <X className="size-6" />
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="ภาพก่อนหน้า"
            onClick={(event) => {
              event.stopPropagation();
              showPrev();
            }}
            className="absolute top-1/2 left-2 z-10 hidden size-11 -translate-y-1/2 rounded-full border-border/60 bg-white/80 text-foreground shadow-sm hover:bg-muted/50 md:flex"
          >
            <ChevronLeft className="size-7" />
          </Button>

          <Button
            type="button"
            variant="outline"
            size="icon"
            aria-label="ภาพถัดไป"
            onClick={(event) => {
              event.stopPropagation();
              showNext();
            }}
            className="absolute top-1/2 right-2 z-10 hidden size-11 -translate-y-1/2 rounded-full border-border/60 bg-white/80 text-foreground shadow-sm hover:bg-muted/50 md:flex"
          >
            <ChevronRight className="size-7" />
          </Button>

          <p className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-sm text-muted-foreground">
            {activeIndex + 1} / {images.length}
          </p>

          <div
            className="relative max-h-[85vh] max-w-[min(100%,1200px)] rounded-lg shadow-[0_5px_30px_rgba(0,0,0,0.12)]"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              width={activeImage.width}
              height={activeImage.height}
              className="max-h-[85vh] w-auto max-w-full object-contain"
              sizes="100vw"
              priority
            />
          </div>
        </div>
      )}
    </>
  );
}
