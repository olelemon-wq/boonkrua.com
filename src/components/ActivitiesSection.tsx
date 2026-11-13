import Link from "next/link";
import { ArrowRight } from "lucide-react";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { buttonVariants } from "@/components/ui/button";
import {
  chessStatusLabel,
  currentChessEdition,
  pastChessEditions,
} from "@/data/chess";
import { cn } from "@/lib/utils";

export default function ActivitiesSection() {
  const current = currentChessEdition;
  const lastEdition = pastChessEditions[0];

  return (
    <section id="activities" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 text-center">
        <h2 className="text-xl leading-snug font-semibold text-balance md:text-2xl">
          กิจกรรมดีๆ การแข่งขัน<span className="whitespace-nowrap">หมากรุก</span>{" "}
          <span className="whitespace-nowrap">บุญเครือรำลึก</span>{" "}
          <span className="whitespace-nowrap">ครั้งที่ {current.noThai}</span>
        </h2>
        <p className="mt-3 text-base font-light text-foreground/80 md:text-lg">
          {chessStatusLabel[current.status]}
          {current.dateLabel ? ` · ${current.dateLabel}` : " · ประกาศรายละเอียดเร็ว ๆ นี้"}
        </p>
        <Link
          href="/chess"
          className={cn(
            buttonVariants({ size: "lg" }),
            "mt-6 h-11 gap-2 rounded-full px-6 text-base"
          )}
        >
          ดูรายละเอียดการแข่งขัน
          <ArrowRight className="size-4" />
        </Link>
      </div>

      {lastEdition?.youtubeId ? (
        <figure>
          <YouTubeEmbed
            youtubeId={lastEdition.youtubeId}
            title={`บรรยากาศการแข่งขันหมากรุกบุญเครือรำลึก ครั้งที่ ${lastEdition.noThai}`}
          />
          <figcaption className="mt-4 text-center text-base font-light text-foreground/80">
            บรรยากาศครั้งที่ {lastEdition.noThai} · {lastEdition.dateLabel}{" "}
            <Link
              href={lastEdition.href}
              className="font-medium whitespace-nowrap text-foreground underline decoration-primary/60 underline-offset-4 transition-colors hover:text-primary"
            >
              อ่านเรื่องราวครั้งที่ {lastEdition.noThai}
            </Link>
          </figcaption>
        </figure>
      ) : null}
    </section>
  );
}
