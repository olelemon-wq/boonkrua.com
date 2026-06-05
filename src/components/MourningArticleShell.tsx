import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  MourningFontSizeToolbar,
  MourningReadableBody,
  MourningReadingProvider,
} from "@/components/MourningReadingControls";
import type { MourningTribute } from "@/data/mourning-tributes";

type MourningArticleShellProps = {
  tribute: MourningTribute;
  children?: React.ReactNode;
};

export default function MourningArticleShell({
  tribute,
  children,
}: MourningArticleShellProps) {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-3xl px-6 py-12 pb-24 md:py-16 md:pb-28">
        <nav
          aria-label="breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-1 text-sm text-muted-foreground"
        >
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="size-3.5 shrink-0" />
          <Link
            href="/#memorials"
            className="transition-colors hover:text-primary"
          >
            คำไว้อาลัย
          </Link>
          <ChevronRight className="size-3.5 shrink-0" />
          <span className="text-foreground">{tribute.name}</span>
        </nav>

        <MourningReadingProvider>
          <article>
            <header className="mb-10 text-center">
              {tribute.image ? (
                <Image
                  src={tribute.image}
                  alt={tribute.name}
                  width={160}
                  height={160}
                  priority
                  className="mx-auto mb-6 size-40 rounded-full border border-border/80 object-cover object-top md:size-[160px]"
                />
              ) : (
                <span className="mx-auto mb-6 flex size-40 items-center justify-center rounded-full border border-border/80 bg-muted/30 text-4xl font-medium text-muted-foreground md:size-[160px]">
                  {tribute.initial}
                </span>
              )}
              <h1 className="text-2xl font-medium leading-snug md:text-3xl">
                {tribute.name}
              </h1>
              <h2 className="mt-6 text-2xl font-medium text-black md:text-3xl">
                คำกล่าวไว้อาลัย
              </h2>
            </header>

            <MourningReadableBody>{children}</MourningReadableBody>
          </article>
          <MourningFontSizeToolbar />
        </MourningReadingProvider>
      </main>
      <Footer />
    </>
  );
}
