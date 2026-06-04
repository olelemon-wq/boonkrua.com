import { notFound } from "next/navigation";
import MourningArticleShell from "@/components/MourningArticleShell";
import {
  dedicatedMourningSlugs,
  getMourningBySlug,
  mourningTributes,
} from "@/data/mourning-tributes";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return mourningTributes
    .filter((t) => !dedicatedMourningSlugs.includes(t.slug as (typeof dedicatedMourningSlugs)[number]))
    .map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const tribute = getMourningBySlug(slug);
  if (!tribute) return { title: "ไม่พบหน้า — Boonkrua" };
  return {
    title: `${tribute.name} — Boonkrua`,
    description: `คำกล่าวไว้อาลัยถึง${tribute.name}`,
  };
}

export default async function MourningSlugPage({ params }: PageProps) {
  const { slug } = await params;
  const tribute = getMourningBySlug(slug);
  if (
    !tribute ||
    dedicatedMourningSlugs.includes(slug as (typeof dedicatedMourningSlugs)[number])
  )
    notFound();

  return (
    <MourningArticleShell tribute={tribute}>
      <p className="text-center text-base leading-relaxed text-muted-foreground md:text-lg">
        กำลังจัดทำเนื้อหาคำไว้อาลัย — โปรดกลับมาอีกครั้งในภายหลัง
      </p>
    </MourningArticleShell>
  );
}
