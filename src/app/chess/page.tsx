import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { chessRulePages } from "@/data/chess-rules";

export const metadata = {
  title: "งานแข่งขันหมากรุก \"บุญเครือรำลึก\" — Boonkrua",
  description: "กติกาและรายละเอียดงานแข่งขันหมากรุกบุญเครือรำลึก",
};

export default function ChessPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl px-6 py-12 md:py-16">
        <nav
          aria-label="breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-1 text-sm text-muted-foreground"
        >
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="size-3.5 shrink-0" />
          <span className="text-foreground">งานแข่งขันหมากรุก</span>
        </nav>

        <header className="mb-10 text-center">
          <h1 className="text-2xl font-medium tracking-wide md:text-3xl">
            งานแข่งขันหมากรุก &quot;บุญเครือรำลึก&quot;
          </h1>
        </header>

        <div className="flex flex-col">
          {chessRulePages.map((page) => (
            <Image
              key={page.src}
              src={page.src}
              alt={page.alt}
              width={page.width}
              height={page.height}
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="block h-auto w-full"
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
