import MourningArticleShell from "@/components/MourningArticleShell";
import { getMourningBySlug } from "@/data/mourning-tributes";
import {
  jennyMourningFooterLines,
  jennyMourningParagraphs,
} from "@/data/mourning-jenny";

const jennyTribute = getMourningBySlug("jenny")!;

export const metadata = {
  title: "นางกมลรัตน์ เขมาภิรัตน์ (เจนนี่) — Boonkrua",
  description: "คำกล่าวไว้อาลัยถึงนางกมลรัตน์ เขมาภิรัตน์ (เจนนี่)",
};

export default function JennyMourningPage() {
  return (
    <MourningArticleShell tribute={jennyTribute}>
      <div className="space-y-6 text-base leading-relaxed font-light text-foreground/90 md:text-lg">
        {jennyMourningParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <footer className="mt-12 space-y-2 border-t border-border/40 pt-8 text-center">
        {jennyMourningFooterLines.map((line, index) => (
          <p
            key={index}
            className={
              index === jennyMourningFooterLines.length - 1
                ? "text-lg font-medium"
                : "text-base font-medium"
            }
          >
            {line}
          </p>
        ))}
      </footer>
    </MourningArticleShell>
  );
}
