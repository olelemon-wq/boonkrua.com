import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { mourningTributes } from "@/data/mourning-tributes";

export const metadata = {
  title: "คำไว้อาลัยลูกหลาน — Boonkrua",
  description: "รวมคำกล่าวไว้อาลัยจากลูกหลานถึงคุณบุญเครือ เขมาภิรัตน์",
};

/** "นายฉัตรมงคล เขมาภิรัตน์ (คิง)" → { nickname: "คิง", fullName: "นายฉัตรมงคล เขมาภิรัตน์" } */
function splitName(name: string) {
  const match = name.match(/^(.*?)\s*\(([^)]+)\)\s*$/);
  if (!match) return { nickname: name, fullName: null };
  return { nickname: match[2], fullName: match[1] };
}

export default function MourningIndexPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto w-full max-w-5xl px-6 py-10 md:py-16">
        <nav
          aria-label="breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-1 text-sm text-muted-foreground"
        >
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="size-3.5 shrink-0" />
          <span className="text-foreground">คำไว้อาลัย</span>
        </nav>

        <header className="mb-10 text-center md:mb-14">
          <h1 className="text-3xl leading-snug font-semibold md:text-4xl">
            คำไว้อาลัยลูกหลาน
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base font-light text-pretty text-foreground/80 md:text-lg">
            ถ้อยคำจากลูกหลาน {mourningTributes.length} ท่าน
            ถึงคุณ<span className="whitespace-nowrap">บุญเครือ เขมาภิรัตน์</span>
          </p>
        </header>

        <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4">
          {mourningTributes.map((tribute, index) => {
            const { nickname, fullName } = splitName(tribute.name);
            return (
              <li key={tribute.href}>
                <Link
                  href={tribute.href}
                  className="flex h-full flex-col items-center rounded-2xl bg-surface px-3 pt-6 pb-5 text-center transition-colors hover:bg-card-header/50 active:bg-card-header/70 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  {tribute.image ? (
                    <Image
                      src={tribute.image}
                      alt=""
                      width={96}
                      height={96}
                      priority={index < 4}
                      className="mb-3 size-20 rounded-full object-cover object-top ring-4 ring-background md:size-24"
                    />
                  ) : (
                    <span
                      aria-hidden
                      className="mb-3 flex size-20 items-center justify-center rounded-full bg-background text-2xl font-medium text-muted-foreground md:size-24"
                    >
                      {tribute.initial}
                    </span>
                  )}
                  <span className="text-lg leading-snug font-semibold md:text-xl">
                    {nickname}
                  </span>
                  {fullName ? (
                    <span className="mt-1 text-sm leading-snug font-light text-foreground/75">
                      {fullName.split(" ").map((word, i) => (
                        <span key={i} className="whitespace-nowrap">
                          {i > 0 ? " " : null}
                          {word}
                        </span>
                      ))}
                    </span>
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
      <Footer />
    </>
  );
}
