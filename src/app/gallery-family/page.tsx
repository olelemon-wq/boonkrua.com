import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MasonryPhotoGallery from "@/components/MasonryPhotoGallery";
import { familyGalleryImages } from "@/data/gallery-family";

export const metadata = {
  title: "ภาพกับครอบครัว — Boonkrua",
  description: "ภาพกับครอบครัว เถ้าแก่บุญเครือ",
};

export default function GalleryFamilyPage() {
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
          <span className="text-foreground">ภาพกับครอบครัว</span>
        </nav>

        <header className="mb-10 text-center">
          <h1 className="text-2xl font-medium tracking-wide md:text-3xl">
            ภาพกับครอบครัว
          </h1>
        </header>

        <MasonryPhotoGallery images={familyGalleryImages} />
      </main>
      <Footer />
    </>
  );
}
