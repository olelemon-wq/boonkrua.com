import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { buttonVariants } from "@/components/ui/button";
import {
  ChessBreadcrumb,
  ChessSection,
  KeepName,
  chessProse,
} from "@/components/chess/ChessParts";
import {
  chessContact,
  chessOriginParagraphs,
  chessStatusLabel,
  currentChessEdition,
  pastChessEditions,
} from "@/data/chess";
import { cn } from "@/lib/utils";
import { ChessMobileActionBar } from "@/components/chess/ChessMobileChrome";

export const metadata = {
  title: "การแข่งขันหมากรุกไทย “บุญเครือรำลึก” ครั้งที่ ๒ — Boonkrua",
  description:
    "การแข่งขันหมากรุกไทย บุญเครือรำลึก เพื่อรำลึกถึงคุณบุญเครือ เขมาภิรัตน์ ติดตามข่าวการแข่งขันครั้งที่ ๒ และย้อนดูบรรยากาศครั้งที่ ๑",
};

export default function ChessHubPage() {
  const current = currentChessEdition;
  const isOpen = current.status === "open";

  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-4xl px-6 pt-8 pb-16 md:py-16">
        <ChessBreadcrumb
          items={[
            { label: "กิจกรรม", href: "/#activities" },
            { label: "หมากรุกบุญเครือรำลึก" },
          ]}
        />

        <header className="mb-10 text-center md:mb-14">
          <h1 className="text-3xl leading-snug font-semibold text-balance md:text-4xl">
            การแข่งขัน<span className="whitespace-nowrap">หมากรุกไทย</span>{" "}
            <span className="whitespace-nowrap">“บุญเครือรำลึก”</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed font-light text-pretty text-foreground/80 md:text-lg">
            ร่วมสืบสานกีฬาหมากรุกไทย เชิดชูความทรงจำและความรักในกีฬาหมากรุกของคุณ<span className="whitespace-nowrap">บุญเครือ เขมาภิรัตน์</span> พร้อมเปิดเวทีให้นักหมากรุกทุกระดับได้ประชันฝีมือ แลกเปลี่ยนประสบการณ์
            และสร้างมิตรภาพผ่านการแข่งขัน
          </p>
        </header>

        <section
          aria-labelledby="current-edition"
          className="rounded-2xl bg-surface px-6 py-8 md:px-12 md:py-12"
        >
          <div className="grid gap-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
            <div>
              <p className="mb-3 inline-flex items-center gap-2 rounded-full bg-background px-3 py-1 text-sm font-medium text-foreground/80 ring-1 ring-border">
                <span
                  aria-hidden
                  className={cn(
                    "size-2 rounded-full",
                    isOpen ? "bg-emerald-600" : "bg-primary"
                  )}
                />
                {chessStatusLabel[current.status]}
              </p>
              <h2
                id="current-edition"
                className="text-4xl leading-tight font-semibold md:text-5xl"
              >
                ครั้งที่ {current.noThai}
              </h2>
              {current.dateLabel || current.venue ? (
                <p className="mt-3 text-lg font-medium text-foreground/90">
                  {[current.dateLabel, current.venue].filter(Boolean).join(" · ")}
                </p>
              ) : (
                <p className="mt-4 max-w-xl text-base leading-relaxed font-light text-foreground/85 md:text-lg">
                  {`คณะผู้จัดกำลังเตรียมการแข่งขันครั้งที่ ${current.noThai} วันแข่งขัน สถานที่ และการเปิดรับสมัครจะประกาศเร็ว ๆ นี้ ติดตามข่าวได้ทาง LINE หรือ Facebook “${chessContact.facebookName}”`}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
              <a
                href={chessContact.lineHref}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-11 gap-2 rounded-full px-5 text-base"
                )}
              >
                <MessageCircle className="size-4" />
                ติดตามข่าวทาง LINE
              </a>
              <a
                href={chessContact.phoneHref}
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "h-11 gap-2 rounded-full px-5 text-base tabular-nums"
                )}
              >
                <Phone className="size-4" />
                โทร {chessContact.phoneDisplay}
              </a>
            </div>
          </div>

          <p className="mt-8 border-t border-border pt-6 text-sm leading-relaxed text-foreground/75 md:text-base">
            ระหว่างรอประกาศ ดูรูปแบบการแข่งขัน กติกา และกำหนดการของครั้งที่ ๑ เพื่อเตรียมตัวได้ที่{" "}
            <Link
              href="/chess/1#rules"
              className="font-medium text-foreground underline decoration-primary/60 underline-offset-4 transition-colors hover:text-primary"
            >
              กติกาการแข่งขัน
            </Link>
          </p>
        </section>

        <ChessSection id="origin" title="ที่มาของการแข่งขัน">
          <div className={chessProse}>
            {chessOriginParagraphs.map((p) => (
              <p key={p}>
                  <KeepName text={p} />
                </p>
            ))}
          </div>
          <Link
            href="/history"
            className="mt-5 inline-flex items-center gap-1.5 text-base font-medium text-foreground underline decoration-primary/60 underline-offset-4 transition-colors hover:text-primary"
          >
            อ่านประวัติคุณบุญเครือ
            <ArrowRight className="size-4" />
          </Link>
        </ChessSection>

        <ChessSection id="past" title="การแข่งขันที่ผ่านมา">
          <ul className="space-y-10">
            {pastChessEditions.map((edition) => (
              <li
                key={edition.no}
                className="grid gap-6 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] md:items-center"
              >
                {edition.youtubeId ? (
                  <YouTubeEmbed
                    youtubeId={edition.youtubeId}
                    title={`บรรยากาศการแข่งขันหมากรุกบุญเครือรำลึก ครั้งที่ ${edition.noThai}`}
                  />
                ) : null}
                <div>
                  <h3 className="text-2xl font-semibold">
                    ครั้งที่ {edition.noThai}
                  </h3>
                  <p className="mt-2 text-base font-medium tabular-nums">
                    {edition.dateLabel}
                  </p>
                  <p className="mt-1 text-base font-light text-foreground/80">
                    {edition.venue}
                  </p>
                  <Link
                    href={edition.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-base font-medium text-foreground underline decoration-primary/60 underline-offset-4 transition-colors hover:text-primary"
                  >
                    รายละเอียด กติกา และกำหนดการ
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
              </li>
            ))}
          </ul>
        </ChessSection>
      </main>
      <Footer />
      <ChessMobileActionBar />
    </>
  );
}
