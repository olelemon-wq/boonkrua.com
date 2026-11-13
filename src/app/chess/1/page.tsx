import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, ChevronDown, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import MasonryPhotoGallery from "@/components/MasonryPhotoGallery";
import {
  ChessBreadcrumb,
  ChessSection,
  ChessSubheading,
  ChessTable,
  KeepName,
  chessProse,
} from "@/components/chess/ChessParts";
import {
  chessConduct,
  chessContact,
  chessDrawConditions,
  chessEditions,
  chessLoseConditions,
  chessMoves,
  chessOriginParagraphs,
  chessPenalties,
  chessScheduleDay1,
  chessScheduleDay2,
  chessScoring,
  currentChessEdition,
} from "@/data/chess";
import { chessRulePages } from "@/data/chess-rules";
import {
  ChessReadingBoard,
  ChessSectionChips,
} from "@/components/chess/ChessMobileChrome";
import ChessBoardToc from "@/components/chess/ChessBoardToc";
import PieceMoves from "@/components/chess/PieceMoves";

export const metadata = {
  title: "การแข่งขันหมากรุกไทย “บุญเครือรำลึก” ครั้งที่ ๑ (2569) — Boonkrua",
  description:
    "รายละเอียดการแข่งขันหมากรุกไทย บุญเครือรำลึก ครั้งที่ ๑ วันที่ 28 ก.พ. – 1 มี.ค. 2569 ณ โรงเรียนเทศบาลศรีมหาราชา ศรีราชา รูปแบบการแข่งขัน กติกา กำหนดการ และวิธีสมัคร",
};

const edition = chessEditions.find((e) => e.no === 1)!;

const toc = [
  { id: "origin", label: "ที่มาของการแข่งขัน" },
  { id: "photos", label: "ภาพบรรยากาศ" },
  { id: "venue", label: "สถานที่และกำหนดการ" },
  { id: "format", label: "รูปแบบการแข่งขัน" },
  { id: "rules", label: "กติกาหมากรุกไทย" },
  { id: "conduct", label: "ระเบียบและมารยาท" },
  { id: "penalties", label: "บทลงโทษ" },
  { id: "schedule", label: "ตารางเวลา" },
  { id: "apply", label: "คุณสมบัติและการสมัคร" },
  { id: "contact", label: "ติดต่อสอบถาม" },
];

const listClass = "list-disc space-y-2 pl-6 marker:text-primary";

export default function ChessEdition1Page() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-3xl px-6 pt-8 pb-16 selection:bg-card-header md:py-16">
        <ChessBreadcrumb
          items={[
            { label: "กิจกรรม", href: "/#activities" },
            { label: "หมากรุกบุญเครือรำลึก", href: "/chess" },
            { label: "ครั้งที่ ๑" },
          ]}
        />

        <Link
          href="/chess"
          className="group mx-auto mb-12 flex w-fit max-w-full items-center gap-3 rounded-full bg-card-header/45 py-2 pr-4 pl-2 text-sm transition-colors hover:bg-card-header/80 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none md:text-base"
        >
          <span className="shrink-0 rounded-full bg-background px-3 py-0.5 font-semibold">
            ครั้งที่ {currentChessEdition.noThai}
          </span>
          <span className="font-light text-foreground/85">
            กำลังเตรียมการ ติดตามข่าวล่าสุด
          </span>
          <ArrowRight className="size-4 shrink-0 transition-transform group-hover:translate-x-0.5" />
        </Link>

        <article>
          <header className="mb-10 text-center">
            <h1 className="text-3xl leading-snug font-semibold text-balance md:text-4xl">
              การแข่งขัน<span className="whitespace-nowrap">หมากรุกไทย</span>{" "}
              <span className="whitespace-nowrap">“บุญเครือรำลึก”</span>{" "}
              <span className="whitespace-nowrap">ครั้งที่ ๑</span>
            </h1>
            <ul className="mt-5 flex flex-col items-center gap-x-6 gap-y-1.5 text-base text-foreground/80 sm:flex-row sm:flex-wrap sm:justify-center">
              <li className="flex items-center gap-2 font-medium tabular-nums">
                <CalendarDays aria-hidden className="size-4 shrink-0 text-primary" />
                {edition.dateLabel}
              </li>
              <li className="flex items-center gap-2 font-light">
                <MapPin aria-hidden className="size-4 shrink-0 text-primary" />
                {edition.venue}
              </li>
            </ul>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed font-light text-pretty text-foreground/85 md:text-lg">
            ร่วมสืบสานกีฬาหมากรุกไทย เชิดชูความทรงจำและความรักในกีฬาหมากรุกของคุณ<span className="whitespace-nowrap">บุญเครือ เขมาภิรัตน์</span> พร้อมเปิดเวทีให้นักหมากรุกทุกระดับได้ประชันฝีมือ แลกเปลี่ยนประสบการณ์
              และสร้างมิตรภาพผ่านการแข่งขัน
            </p>
          </header>

          {edition.youtubeId ? (
            <YouTubeEmbed
              youtubeId={edition.youtubeId}
              title="บรรยากาศการแข่งขันหมากรุกบุญเครือรำลึก ครั้งที่ ๑"
              className="-mx-6 w-auto sm:mx-0 [&>div]:rounded-none [&>div]:ring-0 sm:[&>div]:rounded-xl sm:[&>div]:ring-1"
            />
          ) : null}

          <div className="mt-8 md:hidden" />
          <ChessSectionChips items={toc} />
          <ChessReadingBoard items={toc} />

          <ChessBoardToc items={toc} />

          <ChessSection id="origin" title="ที่มาของการแข่งขัน" className="border-t-0 pt-0 md:pt-0">
            <div className={chessProse}>
              {chessOriginParagraphs.map((p) => (
                <p key={p}>
                  <KeepName text={p} />
                </p>
              ))}
            </div>
          </ChessSection>

          {edition.photos.length > 0 ? (
            <ChessSection id="photos" title="ภาพบรรยากาศ">
              <MasonryPhotoGallery images={edition.photos} />
            </ChessSection>
          ) : null}

          <ChessSection id="venue" title="สถานที่และกำหนดการจัดการแข่งขัน">
            <div className={chessProse}>
              <p>
                การแข่งขันจัดขึ้น ณ{" "}
                <strong className="font-medium text-foreground">
                  โรงเรียนเทศบาลศรีมหาราชา อำเภอศรีราชา จังหวัดชลบุรี
                </strong>{" "}
                ระหว่างวันเสาร์ที่ 28 กุมภาพันธ์ ถึงวันอาทิตย์ที่ 1 มีนาคม พ.ศ. 2569
                โดยแบ่งออกเป็น 2 วัน
              </p>
              <ul className={listClass}>
                <li>
                  <strong className="font-medium text-foreground">วันแรก:</strong>{" "}
                  รอบคัดเลือกและรอบ Playoff
                </li>
                <li>
                  <strong className="font-medium text-foreground">วันที่สอง:</strong>{" "}
                  รอบ 16 คน รอบ 8 คน รอบรองชนะเลิศ และรอบชิงชนะเลิศ
                </li>
              </ul>
            </div>
          </ChessSection>

          <ChessSection id="format" title="รูปแบบการแข่งขัน">
            <div className={chessProse}>
              <p>
                ใช้รูปแบบหมากรุกไทยประเภทเดี่ยว รับสมัครผู้เข้าแข่งขันจำนวน 64 คน
                แบ่งการแข่งขันออกเป็นรอบต่าง ๆ ดังนี้
              </p>
            </div>

            <ChessSubheading>รอบคัดเลือก</ChessSubheading>
            <div className={chessProse}>
              <p>
                ผู้เข้าแข่งขันจะถูกแบ่งเป็นสายตามระบบที่ผู้จัดกำหนด
                โดยข้อมูลการแข่งขันระบุไว้ 15 สาย สายละ 4 คน
                ภายในแต่ละสายใช้ระบบเก็บคะแนนจากผลการแข่งขัน ดังนี้
              </p>
            </div>
            <div className="my-5 max-w-sm">
              <ChessTable
                caption="คะแนนรอบคัดเลือก"
                head={["ผลการแข่งขัน", "คะแนน"]}
                rows={chessScoring.map((r) => [r.result, r.points])}
                secondColClassName="text-right tabular-nums font-normal"
              />
            </div>
            <div className={chessProse}>
              <p>
                ผู้ที่ได้อันดับ 1 ของแต่ละสาย และผู้เล่นที่มีคะแนนดีที่สุดตามเกณฑ์ที่กำหนด
                จะผ่านเข้าสู่รอบ 16 คน หากมีคะแนนเท่ากันจะใช้การแข่งขัน Playoff
                เพื่อตัดสินผู้ผ่านเข้ารอบ
              </p>
            </div>

            <ChessSubheading>รอบ 16 คน ถึงรอบชิงชนะเลิศ</ChessSubheading>
            <div className={chessProse}>
              <p>
                ตั้งแต่รอบ 16 คนเป็นต้นไปใช้ระบบแพ้คัดออก (Knockout)
                ผู้ชนะผ่านเข้าสู่รอบถัดไปตามลำดับ ได้แก่ รอบ 8 คน รอบรองชนะเลิศ
                และรอบชิงชนะเลิศ ส่วนรอบ Playoff แข่งขัน 1 รอบ
                ผู้ชนะได้รับสิทธิ์ผ่านเข้าสู่รอบต่อไป
              </p>
            </div>
          </ChessSection>

          <ChessSection id="rules" title="กติกาการแข่งขันหมากรุกไทย">
            <div className={chessProse}>
              <p>
                ผู้เข้าแข่งขันต้องปฏิบัติตามกติกาหมากรุกไทยและระเบียบที่คณะกรรมการกำหนด
              </p>
            </div>

            <ChessSubheading>วิธีการเดินหมาก</ChessSubheading>
            <dl className="divide-y divide-border overflow-hidden rounded-xl bg-background ring-1 ring-border">
              {chessMoves.map((m) => (
                <div
                  key={m.piece}
                  className="flex items-start gap-4 px-4 py-4 sm:items-center sm:gap-5 sm:px-5"
                >
                  <PieceMoves kind={m.kind} />
                  <div className="min-w-0 flex-1 sm:grid sm:grid-cols-[7.5rem_minmax(0,1fr)] sm:items-baseline sm:gap-4">
                    <dt className="text-[1.0625rem] leading-snug font-semibold">{m.piece}</dt>
                    <dd className="mt-1 text-[0.9375rem] leading-relaxed font-light text-pretty text-foreground/80 sm:mt-0 sm:text-base">
                      {m.rule}
                    </dd>
                  </div>
                </div>
              ))}
            </dl>
            <p
              aria-hidden
              className="mt-2.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground"
            >
              <span className="inline-flex items-center gap-1.5">
                <span className="size-[7px] rounded-full bg-primary" />
                ช่องที่เดินได้
              </span>
              <span className="inline-flex items-center gap-1.5">
                <span className="size-[7px] rounded-full ring-[1.5px] ring-primary" />
                ช่องที่กินได้ (เบี้ย)
              </span>
            </p>
            <p className="mt-3 text-sm font-light text-foreground/75 md:text-base">
              การเดินหมากประเภทอื่นให้เป็นไปตามกติกาหมากรุกไทยและข้อกำหนดของคณะกรรมการ
            </p>

            <div className="grid gap-x-10 md:grid-cols-2">
              <div>
                <ChessSubheading>ผู้เข้าแข่งขันถือว่าแพ้เมื่อ</ChessSubheading>
                <ul className={`${listClass} ${chessProse}`}>
                  {chessLoseConditions.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
              <div>
                <ChessSubheading>ขอเสมอได้เมื่อ</ChessSubheading>
                <ul className={`${listClass} ${chessProse}`}>
                  {chessDrawConditions.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>
          </ChessSection>

          <ChessSection id="conduct" title="กฎระเบียบและมารยาทในการแข่งขัน">
            <ol className={`list-decimal space-y-2 pl-6 marker:font-medium ${chessProse}`}>
              {chessConduct.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ol>
            <p className={`mt-5 ${chessProse}`}>
              หากผู้เล่นเดินหมากผิดและทราบข้อผิดพลาด ต้องย้อนกลับไปยังตำแหน่งเดิมและแก้ไขให้ถูกต้อง
              โดยไม่เริ่มเดินใหม่ตามอำเภอใจ
            </p>
          </ChessSection>

          <ChessSection id="penalties" title="บทลงโทษเมื่อกระทำผิดกติกา">
            <p className={`mb-5 ${chessProse}`}>
              คณะกรรมการมีสิทธิ์พิจารณาบทลงโทษตามลักษณะและความรุนแรงของการกระทำผิด
            </p>
            <ChessTable
              caption="บทลงโทษเมื่อกระทำผิดกติกา"
              head={["การกระทำผิด", "บทลงโทษ"]}
              rows={chessPenalties.map((r) => [r.offence, r.penalty])}
              firstColClassName="whitespace-normal sm:w-2/5"
              stackOnMobile
            />
          </ChessSection>

          <ChessSection id="schedule" title="ตารางเวลาการแข่งขัน">
            <ChessSubheading>วันแรก เสาร์ 28 ก.พ. 2569 · รอบคัดเลือก</ChessSubheading>
            <ChessTable
              caption="กำหนดการวันแรก"
              head={["เวลา (น.)", "กิจกรรม"]}
              firstColClassName="w-0 pr-2 text-sm sm:pr-4 sm:text-base"
              rows={chessScheduleDay1.map((r) => [r.time, r.activity])}
              isMutedRow={([, activity]) => activity.startsWith("พัก")}
            />
            <ChessSubheading>วันที่สอง อาทิตย์ 1 มี.ค. 2569 · รอบชิงชนะเลิศ</ChessSubheading>
            <ChessTable
              caption="กำหนดการวันที่สอง"
              head={["เวลา (น.)", "กิจกรรม"]}
              firstColClassName="w-0 pr-2 text-sm sm:pr-4 sm:text-base"
              rows={chessScheduleDay2.map((r) => [r.time, r.activity])}
              isMutedRow={([, activity]) => activity.startsWith("พัก")}
            />
          </ChessSection>

          <ChessSection id="apply" title="คุณสมบัติและวิธีสมัครแข่งขัน">
            <ChessSubheading>คุณสมบัติผู้สมัคร</ChessSubheading>
            <ul className={`${listClass} ${chessProse}`}>
              <li>มีอายุตั้งแต่ 12 ปีขึ้นไป</li>
              <li>ผู้สมัคร 1 คน สมัครได้เพียง 1 สิทธิ์</li>
              <li>ยอมรับและปฏิบัติตามกติกาการแข่งขันของผู้จัดงาน</li>
            </ul>
            <ChessSubheading>การยืนยันสิทธิ์</ChessSubheading>
            <ul className={`${listClass} ${chessProse}`}>
              <li>ผู้สมัครต้องได้รับการยืนยันสิทธิ์จากผู้จัดการแข่งขัน</li>
              <li>เมื่อได้รับการยืนยันแล้ว ไม่สามารถโอนสิทธิ์ให้ผู้อื่นได้</li>
              <li>ผู้ที่ไม่มารายงานตัวตามเวลาที่กำหนด ถือว่าสละสิทธิ์</li>
            </ul>
            <ChessSubheading>การรายงานตัว</ChessSubheading>
            <p className={chessProse}>
              รายงานตัวก่อนเริ่มการแข่งขันอย่างน้อย 30 นาที เพื่อรับเสื้อและหมายเลขแข่งขัน
            </p>
          </ChessSection>

          <ChessSection id="contact" title="ติดต่อสอบถาม">
            <dl className={`grid gap-x-6 gap-y-2 sm:grid-cols-[7rem_minmax(0,1fr)] ${chessProse}`}>
              <dt className="font-medium text-foreground">LINE</dt>
              <dd>
                <a
                  href={chessContact.lineHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline decoration-primary/60 underline-offset-4 hover:text-primary"
                >
                  {chessContact.lineId}
                </a>
              </dd>
              <dt className="font-medium text-foreground">โทรศัพท์</dt>
              <dd>
                <a
                  href={chessContact.phoneHref}
                  className="tabular-nums underline decoration-primary/60 underline-offset-4 hover:text-primary"
                >
                  {chessContact.phoneDisplay}
                </a>
              </dd>
              <dt className="font-medium text-foreground">Facebook</dt>
              <dd>{chessContact.facebookName}</dd>
            </dl>
          </ChessSection>


          <section className="mt-16 rounded-2xl bg-card-header/35 px-6 py-10 text-center md:px-12 md:py-12">
            <h2 className="mx-auto mb-5 max-w-xl text-xl leading-snug font-semibold text-balance md:text-2xl">
              ร่วมสืบสานหมากรุกไทยและรำลึกถึงคุณ
              <span className="whitespace-nowrap">บุญเครือ เขมาภิรัตน์</span>
            </h2>
            <div className={`${chessProse} mx-auto max-w-2xl`}>
              <p>
                การแข่งขันหมากรุกไทย “บุญเครือรำลึก” ไม่ได้เป็นเพียงเวทีประชันความสามารถทางด้านกีฬาหมากรุกเท่านั้น
                แต่ยังเป็นกิจกรรมที่สื่อถึงความรัก ความผูกพัน และการสืบทอดสิ่งดีงามจากรุ่นสู่รุ่น
              </p>
              <p>
                การแข่งขันจึงเป็นโอกาสสำคัญในการสร้างความสัมพันธ์ระหว่างนักหมากรุก
                ส่งเสริมกีฬาหมากรุกไทยให้เป็นที่รู้จักอย่างต่อเนื่อง
                และร่วมกันระลึกถึงคุณงามความดีของคุณ<span className="whitespace-nowrap">บุญเครือ เขมาภิรัตน์</span>
                ผู้มีความรักและความผูกพันกับกีฬาหมากรุกไทยอย่างแท้จริง
              </p>
            </div>
            <Link
              href="/chess"
              className="mt-8 inline-flex items-center gap-1.5 text-base font-medium underline decoration-primary/60 underline-offset-4 transition-colors hover:text-primary"
            >
              ติดตามการแข่งขันครั้งที่ {currentChessEdition.noThai}
              <ArrowRight className="size-4" />
            </Link>
          </section>

          <details className="group mt-8 rounded-2xl ring-1 ring-border">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-5 py-4 text-base font-medium transition-colors hover:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none [&::-webkit-details-marker]:hidden">
              <span>
                เอกสารต้นฉบับ{" "}
                <span className="font-light text-foreground/70">
                  (สไลด์ {chessRulePages.length} หน้า)
                </span>
              </span>
              <ChevronDown
                aria-hidden
                className="size-4 shrink-0 transition-transform group-open:rotate-180"
              />
            </summary>
            <div className="flex flex-col gap-2 px-2 pb-2">
              {chessRulePages.map((page) => (
                <Image
                  key={page.src}
                  src={page.src}
                  alt={page.alt}
                  width={page.width}
                  height={page.height}
                  sizes="(max-width: 768px) 100vw, 720px"
                  className="block h-auto w-full rounded-lg"
                />
              ))}
            </div>
          </details>
        </article>
      </main>
      <Footer />
    </>
  );
}
