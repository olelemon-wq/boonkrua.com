"use client";

import { useRef, useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const VIDEO_SRC = "/videos/TOM-CHESS-D1.mp4";

export default function ActivityVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    void video.play();
    setPlaying(true);
  };

  return (
    <div className="relative w-full bg-black">
      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          className="size-full object-cover"
          controls={playing}
          playsInline
          preload="none"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
        >
          เบราว์เซอร์ของคุณไม่รองรับการเล่นวิดีโอ
        </video>
        {!playing && (
          <Button
            type="button"
            variant="secondary"
            size="icon-lg"
            aria-label="เล่นวิดีโอ"
            onClick={handlePlay}
            className="absolute top-1/2 left-1/2 size-16 -translate-x-1/2 -translate-y-1/2 rounded-full shadow-lg"
          >
            <Play className="ml-0.5 size-7 fill-current" />
          </Button>
        )}
      </div>
    </div>
  );
}
