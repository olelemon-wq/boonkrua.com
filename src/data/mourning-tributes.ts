export type MourningTribute = {
  name: string;
  initial: string;
  href: string;
  slug: string;
  image?: string;
};

/** รายการคำไว้อาลัยลูกหลาน — slug ตรงกับ boonkrua.com/mourning/… */
export const mourningTributes: MourningTribute[] = [
  {
    name: "นายคนธีร์ เขมาภิรัตน์ (หนึ่ง)",
    initial: "ห",
    slug: "145",
    href: "/mourning/145",
    image: "/images/tribute-145.png",
  },
  {
    name: "นายฉัตรมงคล เขมาภิรัตน์ (คิง)",
    initial: "ค",
    slug: "king",
    href: "/mourning/king",
    image: "/images/tribute-king.png",
  },
  {
    name: "นายบัลลังก์ เขมาภิรัตน์ (แจ็ก)",
    initial: "แ",
    slug: "jack",
    href: "/mourning/jack",
    image: "/images/tribute-jack.png",
  },
  {
    name: "นางสุดจินดา เศรษฐกูลวิชัย (แหม่ม)",
    initial: "แ",
    slug: "maem",
    href: "/mourning/maem",
    image: "/images/tribute-maem.png",
  },
  {
    name: "นางกมลรัตน์ เขมาภิรัตน์ (เจนนี่)",
    initial: "เ",
    slug: "jenny",
    href: "/mourning/jenny",
    image: "/images/tribute-jenny.png",
  },
  {
    name: "นายวิสันติ์ เศรษฐกูลวิชัย (อู๊ด)",
    initial: "อ",
    slug: "ood",
    href: "/mourning/ood",
    image: "/images/tribute-ood.png",
  },
  {
    name: "Angkrit Khemaphiratana (Jay)",
    initial: "J",
    slug: "jay",
    href: "/mourning/jay",
    image: "/images/tribute-jay.png",
  },
  {
    name: "Siriyanee Sethakulvichai (Amy)",
    initial: "A",
    slug: "amy",
    href: "/mourning/amy",
    image: "/images/tribute-amy.png",
  },
  {
    name: "Thai Khemaphiratana (Jojo)",
    initial: "J",
    slug: "jojo",
    href: "/mourning/jojo",
    image: "/images/tribute-jojo.png",
  },
  {
    name: "มาโน่",
    initial: "ม",
    slug: "mano",
    href: "/mourning/mano",
    image: "/images/tribute-mano.png",
  },
];

/** หน้าที่มีเนื้อหาเต็ม (ไม่ใช้ [slug] placeholder) */
export const dedicatedMourningSlugs = [
  "king",
  "145",
  "jack",
  "maem",
  "jenny",
  "ood",
  "jay",
  "amy",
  "jojo",
  "mano",
] as const;

export function getMourningBySlug(slug: string): MourningTribute | undefined {
  return mourningTributes.find((t) => t.slug === slug);
}
