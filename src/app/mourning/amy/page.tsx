import MourningArticleShell from "@/components/MourningArticleShell";
import { getMourningBySlug } from "@/data/mourning-tributes";
import {
  amyMourningParagraphs,
  amyMourningSalutation,
  amyMourningSignature,
} from "@/data/mourning-amy";

const amyTribute = getMourningBySlug("amy")!;

export const metadata = {
  title: "Siriyanee Sethakulvichai (Amy) — Boonkrua",
  description: "คำกล่าวไว้อาลัยถึง Siriyanee Sethakulvichai (Amy)",
};

export default function AmyMourningPage() {
  return (
    <MourningArticleShell tribute={amyTribute}>
      <p className="mb-2 text-center text-lg font-medium md:text-xl">
        {amyMourningSalutation}
      </p>
      <div className="space-y-6 text-base leading-relaxed font-light text-foreground/90 md:text-lg">
        {amyMourningParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <footer className="mt-12 border-t border-border/40 pt-8 text-center">
        <p className="text-lg font-medium">{amyMourningSignature}</p>
      </footer>
    </MourningArticleShell>
  );
}
