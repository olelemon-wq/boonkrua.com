import MourningArticleShell from "@/components/MourningArticleShell";
import { getMourningBySlug } from "@/data/mourning-tributes";
import {
  jojoMourningParagraphs,
  jojoMourningSalutation,
  jojoMourningSignature,
} from "@/data/mourning-jojo";

const jojoTribute = getMourningBySlug("jojo")!;

export const metadata = {
  title: "Thai Khemaphiratana (Jojo) — Boonkrua",
  description: "คำกล่าวไว้อาลัยถึง Thai Khemaphiratana (Jojo)",
};

export default function JojoMourningPage() {
  return (
    <MourningArticleShell tribute={jojoTribute}>
      <p className="mb-2 text-center text-lg font-medium md:text-xl">
        {jojoMourningSalutation}
      </p>
      <div className="space-y-6 text-base leading-relaxed font-light text-foreground/90 md:text-lg">
        {jojoMourningParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <footer className="mt-12 border-t border-border/40 pt-8 text-center">
        <p className="text-lg font-medium">{jojoMourningSignature}</p>
      </footer>
    </MourningArticleShell>
  );
}
