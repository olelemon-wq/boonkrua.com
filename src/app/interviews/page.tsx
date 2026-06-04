import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { interviewArticles, interviewVideos } from "@/data/interviews";

export const metadata = {
  title: "คลิปข่าว สัมภาษณ์ ต่างๆ — Boonkrua",
  description: "คลิปวีดีโอและบทความสัมภาษณ์จากสื่อเกี่ยวกับนายบุญเครือ เขมาภิรัตน์",
};

export default function InterviewsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <nav
          aria-label="breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-1 text-sm text-muted-foreground"
        >
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="size-3.5 shrink-0" />
          <span className="text-foreground">คลิปข่าว สัมภาษณ์ ต่างๆ</span>
        </nav>

        <header className="mb-12 text-center">
          <h1 className="text-2xl font-medium tracking-wide md:text-3xl">
            คลิปข่าว สัมภาษณ์ ต่างๆ
          </h1>
        </header>

        <section className="mb-14">
          <h2 className="mb-6 text-xl font-medium md:text-2xl">คลิปวีดีโอ</h2>
          <div className="flex flex-col gap-8">
            {interviewVideos.map((video) => (
              <div key={video.youtubeId} className="space-y-2">
                <div className="relative aspect-video overflow-hidden rounded-lg bg-muted/30 shadow-[0_5px_15px_0_rgba(0,0,0,0.08)] ring-1 ring-border/40">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 size-full border-0"
                  />
                </div>
                <p className="text-center text-sm text-muted-foreground">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-6 text-xl font-medium md:text-2xl">
            บทความสัมภาษณ์จากสื่อ
          </h2>
          <ul className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {interviewArticles.map((article) => (
              <li
                key={article.href}
                className="flex overflow-hidden rounded-lg border border-border/40 bg-background shadow-[0_5px_15px_0_rgba(0,0,0,0.06)] transition-shadow hover:shadow-[0_8px_20px_0_rgba(0,0,0,0.1)]"
              >
                <a
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-full w-full flex-col p-[15px]"
                >
                  <div className="relative aspect-square w-full shrink-0 overflow-hidden rounded-[6px_6px_0_0]">
                    <Image
                      src={article.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="flex min-h-[11.5rem] flex-1 flex-col pt-4">
                    <h3 className="line-clamp-2 min-h-[2.75rem] text-base leading-snug font-medium">
                      {article.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 min-h-[4.125rem] text-sm leading-relaxed font-light text-foreground/85">
                      {article.excerpt}
                    </p>
                    <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-medium text-primary">
                      อ่านต่อ
                      <ExternalLink className="size-3.5 shrink-0" />
                    </span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
