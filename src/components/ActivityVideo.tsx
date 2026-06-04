const YOUTUBE_ID = "Lctt5SJVaio";

export default function ActivityVideo() {
  return (
    <div className="relative w-full">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted/30 shadow-[0_5px_15px_0_rgba(0,0,0,0.08)] ring-1 ring-border/40">
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_ID}`}
          title="การแข่งขันหมากรุกบุญเครือลำลึก"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      </div>
    </div>
  );
}
