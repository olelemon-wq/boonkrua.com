const HERO_CLOUDS_VIDEO = "/videos/clound.mp4";

export default function HeroSkyVideo() {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
      aria-hidden
      className="absolute inset-0 size-full object-cover object-center"
    >
      <source src={HERO_CLOUDS_VIDEO} type="video/mp4" />
    </video>
  );
}
