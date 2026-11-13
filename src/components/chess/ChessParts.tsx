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

export function ChessTable({
  caption,
  head,
  rows,
  firstColClassName,
  isMutedRow,
}: {
  caption: string;
  head: [string, string];
  rows: [string, string][];
  firstColClassName?: string;
  isMutedRow?: (row: [string, string]) => boolean;
}) {
  return (
    <div className="overflow-hidden rounded-xl ring-1 ring-border sm:overflow-x-auto">
      <table className="block w-full border-collapse text-left sm:table">
        <caption className="sr-only">{caption}</caption>
        <thead className="sr-only bg-card-header/60 text-sm font-medium sm:not-sr-only sm:table-header-group">
          <tr>
            <th scope="col" className="px-4 py-3">
              {head[0]}
            </th>
            <th scope="col" className="px-4 py-3">
              {head[1]}
            </th>
          </tr>
        </thead>
        <tbody className="block font-light sm:table-row-group">
          {rows.map(([a, b]) => (
            <tr
              key={a + b}
              className={cn(
                "block border-border align-top not-first:border-t sm:table-row sm:border-t",
                isMutedRow?.([a, b]) && "bg-muted text-muted-foreground"
              )}
            >
              <td
                className={cn(
                  "block px-4 pt-3 pb-0.5 text-sm font-medium whitespace-nowrap tabular-nums sm:table-cell sm:py-3 sm:text-base sm:font-normal",
                  firstColClassName
                )}
              >
                {a}
              </td>
              <td className="block px-4 pb-3 sm:table-cell sm:py-3">{b}</td>
            </tr>
          ))}
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
