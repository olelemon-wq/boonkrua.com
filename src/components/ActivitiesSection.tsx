import Link from "next/link";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import ChessPromoCard from "@/components/chess/ChessPromoCard";
import { currentChessEdition, pastChessEditions } from "@/data/chess";

export default function ActivitiesSection() {
  const current = currentChessEdition;
  const lastEdition = pastChessEditions[0];

  return (
    <section id="activities" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-8 text-center text-xl leading-snug font-semibold md:mb-10 md:text-2xl">
        กิจกรรมดีๆ
      </h2>

      <div className="mx-auto max-w-4xl">
        <ChessPromoCard
          edition={current}
          variant="section"
          title={
            <h3 className="text-2xl leading-snug font-semibold text-balance md:text-[1.75rem]">
              บุญเครือรำลึก
            </h3>
          }
        />
      </div>

      {lastEdition?.youtubeId ? (
        <figure className="mx-auto mt-14 max-w-4xl md:mt-16">
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
