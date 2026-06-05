import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import YouTubeEmbed from "@/components/YouTubeEmbed";
import { memorialVideos } from "@/data/memorial-videos";

export const metadata = {
  title: "หนังวีดีโองานพ่อบุญเครือ — Boonkrua",
  description: "หนังวีดีโองานพ่อบุญเครือ เขมาภิรัตน์",
};

export default function MemorialVideoPage() {
  return (
    <>
      <Navbar />
      <main className="w-full">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
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
        </div>

        <section className="mx-auto max-w-6xl px-6 pb-20">
          <div className="flex w-full flex-col gap-8">
            {memorialVideos.map((video) => (
              <div key={video.youtubeId} className="w-full">
                <YouTubeEmbed youtubeId={video.youtubeId} title={video.title} />
                <p className="mt-2 text-center text-sm text-muted-foreground">
                  {video.title}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
