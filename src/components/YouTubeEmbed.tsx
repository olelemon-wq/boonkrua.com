import { cn } from "@/lib/utils";

type YouTubeEmbedProps = {
  youtubeId: string;
  title: string;
  className?: string;
};

export default function YouTubeEmbed({
  youtubeId,
  title,
  className,
}: YouTubeEmbedProps) {
  return (
    <div className={cn("relative w-full", className)}>
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted/30 shadow-[0_5px_15px_0_rgba(0,0,0,0.08)] ring-1 ring-border/40">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      </div>
    </div>
  );
}
