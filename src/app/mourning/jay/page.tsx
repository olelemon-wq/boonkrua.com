import MourningArticleShell from "@/components/MourningArticleShell";
import { getMourningBySlug } from "@/data/mourning-tributes";
import {
  jayMourningParagraphs,
  jayMourningSignature,
} from "@/data/mourning-jay";

const jayTribute = getMourningBySlug("jay")!;

export const metadata = {
  title: "Angkrit Khemaphiratana (Jay) — Boonkrua",
  description: "คำกล่าวไว้อาลัยถึง Angkrit Khemaphiratana (Jay)",
};

export default function JayMourningPage() {
  return (
    <MourningArticleShell tribute={jayTribute}>
      <div className="space-y-6 text-base leading-relaxed font-light text-foreground/90 md:text-lg">
        {jayMourningParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <footer className="mt-12 border-t border-border/40 pt-8 text-center">
        <p className="text-lg font-medium">{jayMourningSignature}</p>
      </footer>
    </MourningArticleShell>
  );
}
