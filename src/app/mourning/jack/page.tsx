import MourningArticleShell from "@/components/MourningArticleShell";
import { getMourningBySlug } from "@/data/mourning-tributes";
import {
  jackMourningParagraphs,
  jackMourningSalutation,
  jackMourningSignature,
} from "@/data/mourning-jack";

const jackTribute = getMourningBySlug("jack")!;

export const metadata = {
  title: "นายบัลลังก์ เขมาภิรัตน์ (แจ็ก) — Boonkrua",
  description: "คำกล่าวไว้อาลัยถึงนายบัลลังก์ เขมาภิรัตน์ (แจ็ก)",
};

export default function JackMourningPage() {
  return (
    <MourningArticleShell tribute={jackTribute}>
      <p className="mb-2 text-center text-lg font-medium md:text-xl">
        {jackMourningSalutation}
      </p>
      <div className="space-y-6 text-base leading-relaxed font-light text-foreground/90 md:text-lg">
        {jackMourningParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <footer className="mt-12 border-t border-border/40 pt-8 text-center">
        <p className="text-lg font-medium">{jackMourningSignature}</p>
      </footer>
    </MourningArticleShell>
  );
}
