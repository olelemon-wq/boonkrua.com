"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import type { FamilyGalleryImage } from "@/data/gallery-family";

type MasonryPhotoGalleryProps = {
  images: FamilyGalleryImage[];
};

const navButtonClass =
  "size-11 border-0 bg-background/85 text-foreground shadow-md backdrop-blur-sm hover:bg-background disabled:opacity-0 [&_svg]:size-5";

/** แกลเลอรีภาพ กดที่ภาพแล้วเปิด popup (shadcn Dialog) เลื่อนดูภาพถัดไปได้ด้วย Carousel */
export default function MasonryPhotoGallery({ images }: MasonryPhotoGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [current, setCurrent] = useState(0);
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const open = (index: number) => {
    setCurrent(index);
    setOpenIndex(index);
  };

  const activeImage = images[current];

  return (
    <>
      <div className="columns-2 gap-3 md:columns-3 md:gap-4">
        {images.map((image, index) => (
          <button
            key={image.src}
            type="button"
            aria-label={`ดูภาพขยาย: ${image.alt}`}
            onClick={() => open(index)}
            className="mb-3 block w-full break-inside-avoid overflow-hidden rounded-lg bg-muted/30 text-left shadow-[0_5px_15px_0_rgba(0,0,0,0.08)] ring-1 ring-border/40 transition-shadow hover:shadow-[0_8px_20px_0_rgba(0,0,0,0.12)] focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none md:mb-4"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-auto w-full"
              sizes="(max-width: 768px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      <Dialog
        open={openIndex !== null}
        onOpenChange={(next) => {
          if (!next) setOpenIndex(null);
        }}
      >
        <DialogContent
          showCloseButton={false}
          overlayClassName="bg-black/70 supports-backdrop-filter:backdrop-blur-sm"
          onKeyDown={(event) => {
            // Carousel จัดการลูกศรเองเมื่อโฟกัสอยู่ข้างใน
            if (event.defaultPrevented) return;
            if (event.key === "ArrowLeft") api?.scrollPrev();
            if (event.key === "ArrowRight") api?.scrollNext();
          }}
          className="max-w-[calc(100%-1.5rem)] gap-0 overflow-hidden rounded-2xl bg-background p-0 sm:max-w-[min(calc(100%-6rem),1100px)]"
        >
          <div className="flex items-center justify-between gap-3 px-4 pt-2 pb-1">
            <p className="text-sm font-medium tabular-nums text-muted-foreground">
              {current + 1} / {images.length}
            </p>
            <DialogClose
              aria-label="ปิด"
              className="-mr-2 flex size-11 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-muted active:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
            >
              <X className="size-6" />
            </DialogClose>
          </div>

          {openIndex !== null ? (
            <Carousel
              key={openIndex}
              setApi={setApi}
              opts={{ startIndex: openIndex, loop: true }}
              aria-label="ภาพบรรยากาศ"
              className="bg-muted/40"
            >
              <CarouselContent className="ml-0">
                {images.map((image, index) => (
                  <CarouselItem key={image.src} className="pl-0">
                    <div className="relative aspect-[4/3] max-h-[70dvh] w-full sm:aspect-video">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(max-width: 1100px) 100vw, 1100px"
                        priority={index === openIndex}
                        className="object-contain"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious
                aria-label="ภาพก่อนหน้า"
                className={`left-2 sm:left-3 ${navButtonClass}`}
              />
              <CarouselNext
                aria-label="ภาพถัดไป"
                className={`right-2 sm:right-3 ${navButtonClass}`}
              />
            </Carousel>
          ) : null}

          <div className="px-4 pt-3 pb-4">
            <DialogTitle className="text-base leading-snug font-medium text-pretty">
              {activeImage?.alt}
            </DialogTitle>
            <DialogDescription className="mt-1 text-sm">
              ปัดซ้าย-ขวา หรือกดลูกศรเพื่อดูภาพอื่น
            </DialogDescription>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
