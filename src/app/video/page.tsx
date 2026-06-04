import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { memorialVideos } from "@/data/memorial-videos";

export const metadata = {
  title: "หนังวีดีโองานพ่อบุญเครือ — Boonkrua",
  description: "หนังวีดีโองานพ่อบุญเครือ เขมาภิรัตน์",
};

export default function MemorialVideoPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-6 py-12 md:py-16">
        <nav
          aria-label="breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-1 text-sm text-muted-foreground"
        >
          <Link href="/" className="transition-colors hover:text-primary">
            Home
          </Link>
          <ChevronRight className="size-3.5 shrink-0" />
          <span className="text-foreground">หนังวีดีโองานพ่อบุญเครือ</span>
        </nav>

        <header className="mb-12 text-center">
          <h1 className="text-2xl font-medium tracking-wide md:text-3xl">
            หนังวีดีโองานพ่อบุญเครือ
          </h1>
        </header>

        <div className="flex flex-col gap-8">
          {memorialVideos.map((video) => (
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
      </main>
      <Footer />
    </>
  );
}
