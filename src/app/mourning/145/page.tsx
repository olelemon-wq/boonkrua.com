import MourningArticleShell from "@/components/MourningArticleShell";
import { getMourningBySlug } from "@/data/mourning-tributes";
import {
  kontiMourningParagraphs,
  kontiMourningSignature,
} from "@/data/mourning-145";

const kontiTribute = getMourningBySlug("145")!;

export const metadata = {
  title: "นายคนธีร์ เขมาภิรัตน์ (หนึ่ง) — Boonkrua",
  description: "คำกล่าวไว้อาลัยถึงนายคนธีร์ เขมาภิรัตน์ (หนึ่ง)",
};

export default function KontiMourningPage() {
  return (
    <MourningArticleShell tribute={kontiTribute}>
      <div className="space-y-6 text-base leading-relaxed font-light text-foreground/90 md:text-lg">
        {kontiMourningParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <footer className="mt-12 border-t border-border/40 pt-8 text-center">
        <p className="text-lg font-medium">{kontiMourningSignature}</p>
      </footer>
    </MourningArticleShell>
  );
}
