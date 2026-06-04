import { mourningTributes } from "@/data/mourning-tributes";

export type NavMenuItem = {
  label: string;
  href: string;
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
      { label: "ประวัติบริษัท SCC", href: "#history/scc" },
    ],
  },
  {
    label: "เรื่องเล่ามหาลัยชีวิต",
    items: [
      { label: "E Book อ่านทันที", href: "#books" },
      { label: "Download PDFs", href: "#books/pdf" },
    ],
  },
  {
    label: "คำไว้อาลัย",
    items: [
      { label: "คำไว้อาลัยที่กล่าววันงาน", href: "#tributes/ceremony" },
      ...mourningTributes.map((t) => ({ label: t.name, href: t.href })),
    ],
  },
  {
    label: "ภาพต่างๆ",
    items: [
      { label: "ภาพรวมทั้งหมด", href: "#photos/all" },
      { label: "ภาพกับครอบครัว", href: "/gallery-family" },
      { label: "ภาพเก่าในอดีต", href: "#photos/vintage" },
      { label: "ภาพอื่นๆ", href: "#photos/other" },
    ],
  },
  {
    label: "วีดีโอต่างๆ",
    items: [
      { label: "หนังวีดีโองานพ่อบุญเครือ", href: "/video" },
      { label: "คลิปของแจ็ค", href: "#videos/jack" },
      { label: "คลิปของคิง (My Way)", href: "#videos/king-my-way" },
      { label: "คลิปของคิง (Fly me to the moon)", href: "#videos/king-fly-me" },
      { label: "คลิปวันเกิดล่าสุด", href: "#videos/birthday" },
      { label: "คลิปข่าว สัมภาษณ์ ต่างๆ", href: "/interviews" },
    ],
  },
  {
    label: "กิจกรรม",
    items: [
      { label: "งานแข่งขันหมากรุก", href: "/chess" },
    ],
  },
  {
    label: "ติดต่อแอดมิน",
    items: [
      { label: "แจกหนังสือสวดมนต์", href: "#contact/prayer-books" },
      { label: "แจกหนังสือ มหาวิทยาลัยชีวิต", href: "#contact/life-university-books" },
      { label: "แจกทุนการศึกษา", href: "#contact/scholarship" },
      { label: "ติดต่อ แอดมิน", href: "#contact/admin" },
      { label: "QR Code", href: "#contact/qr" },
      { label: "กำหนดการต่างๆ", href: "#contact/schedule" },
    ],
  },
];
