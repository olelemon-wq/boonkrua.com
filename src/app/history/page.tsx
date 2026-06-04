import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  boonkruaChildren,
  boonkruaHistoryIntro,
  boonkruaHistoryParagraphs,
} from "@/data/history-boonkrua";

export const metadata = {
  title: "ประวัตินายบุญเครือ — Boonkrua",
  description: "ประวัตินายบุญเครือ เขมาภิรัตน์",
};

export default function BoonkruaHistoryPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-12 md:py-16">
        <nav
          aria-label="breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-1 text-sm text-muted-foreground"
        >
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="size-3.5 shrink-0" />
          <span className="text-foreground">ประวัตินายบุญเครือ</span>
        </nav>

        <article>
          <header className="mb-10 text-center">
            <Image
              src="/images/memorial-portrait.png"
              alt="นายบุญเครือ เขมาภิรัตน์"
              width={160}
              height={160}
              priority
              className="mx-auto mb-6 size-40 rounded-full border border-border/80 object-cover object-top md:size-[160px]"
            />
            <h1 className="text-2xl font-medium leading-snug md:text-3xl">
              ประวัตินายบุญเครือ
            </h1>
          </header>

          <div className="space-y-6 text-base leading-relaxed font-light text-foreground/90 md:text-lg">
            <p>{boonkruaHistoryIntro}</p>
            <ul className="list-inside list-disc space-y-1 pl-2">
              {boonkruaChildren.map((child) => (
                <li key={child}>{child}</li>
              ))}
            </ul>
            {boonkruaHistoryParagraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
