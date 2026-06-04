import MourningArticleShell from "@/components/MourningArticleShell";
import { getMourningBySlug } from "@/data/mourning-tributes";
import {
  manoMourningClosing,
  manoMourningParagraphs,
  manoMourningSalutation,
  manoMourningSignature,
} from "@/data/mourning-mano";

const manoTribute = getMourningBySlug("mano")!;

export const metadata = {
  title: "มาโน่ — Boonkrua",
  description: "คำกล่าวไว้อาลัยถึงมาโน่",
};

export default function ManoMourningPage() {
  return (
    <MourningArticleShell tribute={manoTribute}>
      <p className="mb-2 text-center text-lg font-medium md:text-xl">
        {manoMourningSalutation}
      </p>
      <div className="space-y-6 text-base leading-relaxed font-light text-foreground/90 md:text-lg">
        {manoMourningParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <p className="text-center font-medium">{manoMourningClosing}</p>
      </div>

      <footer className="mt-12 border-t border-border/40 pt-8 text-center">
        <p className="text-lg font-medium">{manoMourningSignature}</p>
      </footer>
    </MourningArticleShell>
  );
}
