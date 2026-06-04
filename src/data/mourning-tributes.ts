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
  },
  {
    name: "นายฉัตรมงคล เขมาภิรัตน์ (คิง)",
    initial: "ค",
    slug: "king",
    href: "/mourning/king",
    image: "/images/tribute-tueng.png",
  },
  {
    name: "นายบัลลังก์ เขมาภิรัตน์ (แจ็ก)",
    initial: "แ",
    slug: "jack",
    href: "/mourning/jack",
  },
  {
    name: "นางสุดจินดา เศรษฐกูลวิชัย (แหม่ม)",
    initial: "แ",
    slug: "maem",
    href: "/mourning/maem",
  },
  {
    name: "นางกมลรัตน์ เขมาภิรัตน์ (เจนนี่)",
    initial: "เ",
    slug: "jenny",
    href: "/mourning/jenny",
  },
  {
    name: "นายวิสันติ์ เศรษฐกูลวิชัย (อู๊ด)",
    initial: "อ",
    slug: "ood",
    href: "/mourning/ood",
  },
  {
    name: "Angkrit Khemaphiratana (Jay)",
    initial: "J",
    slug: "jay",
    href: "/mourning/jay",
  },
  {
    name: "Siriyanee Sethakulvichai (Amy)",
    initial: "A",
    slug: "amy",
    href: "/mourning/amy",
  },
  {
    name: "Thai Khemaphiratana (Jojo)",
    initial: "J",
    slug: "jojo",
    href: "/mourning/jojo",
  },
  {
    name: "มาโน่",
    initial: "ม",
    slug: "mano",
    href: "/mourning/mano",
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
