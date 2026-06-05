import YouTubeEmbed from "@/components/YouTubeEmbed";

const YOUTUBE_ID = "Lctt5SJVaio";

export default function ActivityVideo() {
  return (
    <YouTubeEmbed
      youtubeId={YOUTUBE_ID}
      title="การแข่งขันหมากรุกบุญเครือลำลึก"
    />
  );
}
