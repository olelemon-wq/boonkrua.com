import MourningArticleShell from "@/components/MourningArticleShell";
import { getMourningBySlug } from "@/data/mourning-tributes";
import { kingMourningParagraphs } from "@/data/mourning-king";

const kingTribute = getMourningBySlug("king")!;

export const metadata = {
  title: "นายฉัตรมงคล เขมาภิรัตน์ (คิง) — Boonkrua",
  description: "คำกล่าวไว้อาลัยถึงนายฉัตรมงคล เขมาภิรัตน์ (คิง)",
};

export default function KingMourningPage() {
  return (
    <MourningArticleShell tribute={kingTribute}>
      <div className="space-y-6 text-base leading-relaxed font-light text-foreground/90 md:text-lg">
        {kingMourningParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <footer className="mt-12 space-y-2 border-t border-border/40 pt-8 text-center">
        <p className="text-base font-medium">รักและเคารพพ่อมากที่สุด</p>
        <p className="text-lg font-medium">นายฉัตรมงคล เขมาภิรัตน์ (คิง)</p>
      </footer>
    </MourningArticleShell>
  );
}
