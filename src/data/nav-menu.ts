import { mourningTributes } from "@/data/mourning-tributes";

export type NavMenuItem = {
  label: string;
  href: string;
  /** "soon" = ยังไม่มีหน้า แสดงเป็น "เร็วๆ นี้" และกดไม่ได้ */
  status?: "soon";
};

export type NavMenuGroup = {
  label: string;
  items: NavMenuItem[];
};

export const navMenu: NavMenuGroup[] = [
  {
    label: "ประวัติโดยย่อ",
    items: [
      { label: "ประวัตินายบุญเครือ", href: "/history" },
      { label: "ประวัติบริษัท SCC", href: "#history/scc", status: "soon" },
    ],
  },
  {
    label: "เรื่องเล่ามหาลัยชีวิต",
    items: [
      { label: "E Book อ่านทันที", href: "/#books" },
      { label: "Download PDFs", href: "#books/pdf", status: "soon" },
    ],
  },
  {
    label: "คำไว้อาลัย",
    items: [
      { label: "รวมคำไว้อาลัยทั้งหมด", href: "/mourning" },
      { label: "คำไว้อาลัยที่กล่าววันงาน", href: "#tributes/ceremony", status: "soon" },
      ...mourningTributes.map((t) => ({ label: t.name, href: t.href })),
    ],
  },
  {
    label: "ภาพต่างๆ",
    items: [
      { label: "ภาพรวมทั้งหมด", href: "#photos/all", status: "soon" },
      { label: "ภาพกับครอบครัว", href: "/gallery-family" },
      { label: "ภาพเก่าในอดีต", href: "#photos/vintage", status: "soon" },
      { label: "ภาพอื่นๆ", href: "#photos/other", status: "soon" },
    ],
  },
  {
    label: "วีดีโอต่างๆ",
    items: [
      { label: "หนังวีดีโองานพ่อบุญเครือ", href: "/video" },
      { label: "คลิปของแจ็ค", href: "#videos/jack", status: "soon" },
      { label: "คลิปของคิง (My Way)", href: "#videos/king-my-way", status: "soon" },
      { label: "คลิปของคิง (Fly me to the moon)", href: "#videos/king-fly-me", status: "soon" },
      { label: "คลิปวันเกิดล่าสุด", href: "#videos/birthday", status: "soon" },
      { label: "คลิปข่าว สัมภาษณ์ ต่างๆ", href: "/interviews" },
    ],
  },
  {
    label: "กิจกรรม",
    items: [
      { label: "หมากรุกบุญเครือรำลึก ครั้งที่ ๒", href: "/chess" },
      { label: "หมากรุก ครั้งที่ ๑ (กติกาและบรรยากาศ)", href: "/chess/1" },
    ],
  },
  {
    label: "ติดต่อแอดมิน",
    items: [
      { label: "แจกหนังสือสวดมนต์", href: "/contact#prayer-books" },
      { label: "แจกหนังสือ มหาวิทยาลัยชีวิต", href: "/contact#life-university-books" },
      { label: "แจกทุนการศึกษา", href: "/contact#scholarship" },
      { label: "ติดต่อ แอดมิน", href: "/contact#admin" },
      { label: "QR Code", href: "/contact#qr" },
      { label: "กำหนดการต่างๆ", href: "/contact#schedule" },
    ],
  },
];
