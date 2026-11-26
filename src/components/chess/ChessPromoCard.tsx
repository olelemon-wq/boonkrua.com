import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  ChessKnight,
  MapPin,
  MessageCircle,
  Trophy,
} from "lucide-react";
import { chessContact, type ChessEdition } from "@/data/chess";
import { cn } from "@/lib/utils";

type ChessPromoCardProps = {
  edition: ChessEdition;
  variant: "dialog" | "section";
  /** หัวเรื่อง (ใน dialog ส่ง DialogTitle เข้ามาเพื่อให้ screen reader ประกาศชื่อ popup) */
  title?: React.ReactNode;
  /** เรียกเมื่อกดลิงก์ (ใช้ปิด popup) */
  onNavigate?: () => void;
};

/** การ์ดโปรโมตการแข่งขันครั้งปัจจุบัน ใช้ทั้งใน popup หน้าแรกและในหน้าแรก */
export default function ChessPromoCard({
  edition,
  variant,
  title,
  onNavigate,
}: ChessPromoCardProps) {
  const dialog = variant === "dialog";

  const banner = edition.poster ? (
    <div
      className={cn(
        "relative overflow-hidden bg-foreground",
        dialog ? "aspect-[4/3]" : "aspect-[4/3] md:aspect-auto md:h-full md:min-h-80",
      )}
    >
      <Image
        src={edition.poster.src}
        alt={edition.poster.alt}
        fill
        sizes={dialog ? "448px" : "(max-width: 768px) 100vw, 560px"}
        className="object-cover object-top"
        priority={dialog}
      />
    </div>
  ) : (
    <div
      className={cn(
        "relative flex flex-col justify-end overflow-hidden bg-foreground text-background",
        dialog ? "min-h-48 px-6 pt-10 pb-6" : "min-h-56 px-7 py-8 md:h-full md:px-9",
      )}
    >
      <ChessKnight
        aria-hidden
        strokeWidth={1.25}
        className="pointer-events-none absolute right-3 bottom-3 size-32 text-background/10 md:size-40"
      />
      {/* ตัวเลขครั้งที่ เป็นหัวใจของการ์ด */}
      <p
        aria-hidden
        className="font-semibold leading-none text-background/90"
        style={{ fontSize: dialog ? "4.5rem" : "5.5rem" }}
      >
        ๒
      </p>
      <div className="relative mt-3">
        {title ?? (
          <h2 className="text-2xl leading-snug font-semibold text-balance md:text-[1.75rem]">
            บุญเครือรำลึก
          </h2>
        )}
        <p className="mt-1 text-base text-background/75">
          การแข่งขัน<span className="whitespace-nowrap">หมากรุกไทย</span>{" "}
          <span className="whitespace-nowrap">ครั้งที่ {edition.noThai}</span>
        </p>
      </div>
    </div>
  );

  const facts = [
    edition.dateLabel && { icon: CalendarDays, label: "วันแข่งขัน", value: edition.dateLabel },
    edition.venue && { icon: MapPin, label: "สถานที่", value: edition.venue },
    edition.prize && { icon: Trophy, label: "รางวัลรวมมูลค่า", value: edition.prize, strong: true },
  ].filter(Boolean) as {
    icon: typeof CalendarDays;
    label: string;
    value: string;
    strong?: boolean;
  }[];

  const body = (
    <div className={cn("flex flex-col", dialog ? "gap-5 px-6 pt-5 pb-6" : "gap-6 px-6 py-7 md:px-8 md:py-8")}>
      <dl className="space-y-3.5">
        {facts.map(({ icon: Icon, label, value, strong }) => (
          <div key={label} className="flex items-start gap-3">
            <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-full bg-card-header/60 text-foreground">
              <Icon aria-hidden className="size-[18px]" />
            </span>
            <div className="min-w-0">
              <dt className="text-sm text-muted-foreground">{label}</dt>
              <dd
                className={cn(
                  "leading-snug text-pretty",
                  strong ? "text-xl font-semibold tabular-nums" : "text-base font-medium",
                )}
              >
                {value}
              </dd>
            </div>
          </div>
        ))}
      </dl>

      <div className="flex flex-wrap items-center gap-x-1.5 gap-y-2 border-t border-border pt-5">
        <Link
          href={edition.href}
          onClick={onNavigate}
          className="group inline-flex h-11 items-center gap-2.5 rounded-full bg-foreground py-1 pr-1.5 pl-5 text-base font-medium text-background transition-colors hover:bg-foreground/85 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none active:translate-y-px"
        >
          ดูรายละเอียด
          <span className="flex size-8 items-center justify-center rounded-full bg-background/15 transition-transform duration-200 ease-out group-hover:translate-x-0.5">
            <ArrowRight aria-hidden className="size-4" />
          </span>
        </Link>
        <a
          href={chessContact.lineHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={onNavigate}
          className="inline-flex h-11 items-center gap-1.5 rounded-full px-3 text-base font-medium text-foreground/85 transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
        >
          <MessageCircle aria-hidden className="size-[18px]" />
          สมัครทาง LINE
        </a>
      </div>
    </div>
  );

  if (dialog) {
    return (
      <div>
        {banner}
        {body}
      </div>
    );
  }

  return (
    <div className="grid overflow-hidden rounded-3xl bg-background shadow-[0_8px_30px_rgba(0,0,0,0.08)] ring-1 ring-border md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]">
      {banner}
      {body}
    </div>
  );
}
