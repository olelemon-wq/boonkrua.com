import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Crumb = { label: string; href?: string };

export function ChessBreadcrumb({ items }: { items: Crumb[] }) {
  return (
    <nav
      aria-label="breadcrumb"
      className="mb-8 flex flex-wrap items-center gap-1 text-sm text-muted-foreground"
    >
      <Link href="/" className="transition-colors hover:text-primary">
        Home
      </Link>
      {items.map((item) => (
        <span key={item.label} className="flex items-center gap-1">
          <ChevronRight className="size-3.5 shrink-0" />
          {item.href ? (
            <Link href={item.href} className="transition-colors hover:text-primary">
              {item.label}
            </Link>
          ) : (
            <span className="text-foreground">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}

export function ChessSection({
  id,
  title,
  children,
  className,
}: {
  id?: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      id={id}
      className={cn(
        "mt-12 scroll-mt-40 border-t border-border pt-10 md:mt-16 md:pt-12",
        className
      )}
    >
      <h2 className="mb-5 text-xl font-semibold leading-snug text-balance md:text-2xl">
        {title}
      </h2>
      {children}
    </section>
  );
}

export function ChessSubheading({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="mt-8 mb-3 text-lg font-medium md:text-xl">{children}</h3>
  );
}

/**
 * ตาราง 2 คอลัมน์ของหน้าหมากรุก
 * - ค่าเริ่มต้น: เป็นแถวจริงทุกขนาดจอ (เหมาะกับคอลัมน์แรกสั้น เช่น เวลา ผลการแข่งขัน)
 * - stackOnMobile: บนมือถือวางสองคอลัมน์ซ้อนกันเป็นการ์ด (เหมาะกับข้อความยาวทั้งสองฝั่ง)
 */
export function ChessTable({
  caption,
  head,
  rows,
  firstColClassName,
  secondColClassName,
  isMutedRow,
  stackOnMobile = false,
}: {
  caption: string;
  head: [string, string];
  rows: [string, string][];
  firstColClassName?: string;
  secondColClassName?: string;
  isMutedRow?: (row: [string, string]) => boolean;
  stackOnMobile?: boolean;
}) {
  const stack = stackOnMobile;
  return (
    <div className="overflow-hidden rounded-xl bg-background ring-1 ring-border">
      <table
        className={cn(
          "w-full border-collapse text-left text-base",
          stack && "block sm:table"
        )}
      >
        <caption className="sr-only">{caption}</caption>
        <thead
          className={cn(
            "bg-card-header/50 text-sm font-medium text-foreground/80",
            stack && "sr-only sm:not-sr-only sm:table-header-group"
          )}
        >
          <tr>
            <th scope="col" className="px-4 py-2.5 font-medium">
              {head[0]}
            </th>
            <th scope="col" className={cn("px-4 py-2.5 font-medium", secondColClassName)}>
              {head[1]}
            </th>
          </tr>
        </thead>
        <tbody className={cn("font-light", stack && "block sm:table-row-group")}>
          {rows.map(([a, b]) => {
            const muted = isMutedRow?.([a, b]);
            return (
              <tr
                key={a + b}
                className={cn(
                  "border-t border-border/80 align-top transition-colors hover:bg-surface/70",
                  stack && "block first:border-t-0 sm:table-row sm:first:border-t",
                  muted && "bg-surface text-muted-foreground hover:bg-surface"
                )}
              >
                <th
                  scope="row"
                  className={cn(
                    "px-4 py-3 text-left font-medium whitespace-nowrap tabular-nums",
                    stack && "block pb-0.5 sm:table-cell sm:pb-3",
                    muted && "font-normal",
                    firstColClassName
                  )}
                >
                  {a}
                </th>
                <td
                  className={cn(
                    "px-4 py-3",
                    stack && "block pt-0 sm:table-cell sm:pt-3",
                    secondColClassName
                  )}
                >
                  {b}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const FULL_NAME = "บุญเครือ เขมาภิรัตน์";

/** กันไม่ให้ชื่อ "บุญเครือ เขมาภิรัตน์" ถูกตัดกลางคำเมื่อขึ้นบรรทัดใหม่ */
export function KeepName({ text }: { text: string }) {
  const parts = text.split(FULL_NAME);
  return (
    <>
      {parts.map((part, i) => (
        <span key={i}>
          {part}
          {i < parts.length - 1 ? (
            <span className="whitespace-nowrap">{FULL_NAME}</span>
          ) : null}
        </span>
      ))}
    </>
  );
}

export const chessProse =
  "space-y-4 text-base leading-relaxed font-light text-foreground/90 md:text-lg";
