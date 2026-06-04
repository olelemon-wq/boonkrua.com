import MourningArticleShell from "@/components/MourningArticleShell";
import { getMourningBySlug } from "@/data/mourning-tributes";
import {
  maemMourningFooterLines,
  maemMourningParagraphs,
} from "@/data/mourning-maem";

const maemTribute = getMourningBySlug("maem")!;

export const metadata = {
  title: "นางสุดจินดา เศรษฐกูลวิชัย (แหม่ม) — Boonkrua",
  description: "คำกล่าวไว้อาลัยถึงนางสุดจินดา เศรษฐกูลวิชัย (แหม่ม)",
};

export default function MaemMourningPage() {
  return (
    <MourningArticleShell tribute={maemTribute}>
      <div className="space-y-6 text-base leading-relaxed font-light text-foreground/90 md:text-lg">
        {maemMourningParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <footer className="mt-12 space-y-2 border-t border-border/40 pt-8 text-center">
        {maemMourningFooterLines.map((line, index) => (
          <p
            key={index}
            className={
              index === maemMourningFooterLines.length - 1
                ? "text-lg font-medium"
                : index === 0
                  ? "text-base font-medium"
                  : "text-sm text-muted-foreground"
            }
          >
            {line}
          </p>
        ))}
      </footer>
    </MourningArticleShell>
  );
}
