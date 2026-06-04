import ActivityVideo from "@/components/ActivityVideo";

export default function ActivitiesSection() {
  return (
    <section id="activities" className="mx-auto max-w-6xl px-6 py-20">
      <h2 className="mb-12 text-center text-xl leading-snug font-semibold md:text-2xl">
        กิจกรรมดีๆ การแข่งขันหมากรุกบุญเครือลำลึก ครั้งที่ ๑
      </h2>
      <ActivityVideo />
    </section>
  );
}
