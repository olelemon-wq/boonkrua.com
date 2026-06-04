import MourningArticleShell from "@/components/MourningArticleShell";
import { getMourningBySlug } from "@/data/mourning-tributes";
import {
  oodMourningParagraphs,
  oodMourningSignature,
} from "@/data/mourning-ood";

const oodTribute = getMourningBySlug("ood")!;

export const metadata = {
  title: "นายวิสันติ์ เศรษฐกูลวิชัย (อู๊ด) — Boonkrua",
  description: "คำกล่าวไว้อาลัยถึงนายวิสันติ์ เศรษฐกูลวิชัย (อู๊ด)",
};

export default function OodMourningPage() {
  return (
    <MourningArticleShell tribute={oodTribute}>
      <div className="space-y-6 text-base leading-relaxed font-light text-foreground/90 md:text-lg">
        {oodMourningParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>

      <footer className="mt-12 border-t border-border/40 pt-8 text-center">
        <p className="text-lg font-medium">{oodMourningSignature}</p>
      </footer>
    </MourningArticleShell>
  );
}
