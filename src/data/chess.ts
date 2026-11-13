import type { FamilyGalleryImage } from "@/data/gallery-family";

/** ช่องทางติดต่อผู้จัด (จากสไลด์กติกาครั้งที่ ๑ หน้า 12) */
export const chessContact = {
  phoneDisplay: "080-239-9353",
  phoneHref: "tel:+66802399353",
  lineId: "@boonkruarumluek",
  lineHref: "https://line.me/R/ti/p/@boonkruarumluek",
  facebookName: "บุญเครือรำลึก",
};

export type ChessEditionStatus = "upcoming" | "open" | "past";

export type ChessEdition = {
  no: number;
  /** เลขไทยสำหรับแสดงผล เช่น "๒" */
  noThai: string;
  href: string;
  status: ChessEditionStatus;
  /** ข้อความวันที่ที่แสดงผล ปล่อยว่างถ้ายังไม่ประกาศ */
  dateLabel?: string;
  venue?: string;
  youtubeId?: string;
  photos: FamilyGalleryImage[];
};

export const chessEditions: ChessEdition[] = [
  {
    no: 2,
    noThai: "๒",
    href: "/chess",
    status: "upcoming",
    // TODO: เติมวันที่ สถานที่ และเปลี่ยน status เป็น "open" เมื่อเปิดรับสมัคร
    photos: [],
  },
  {
    no: 1,
    noThai: "๑",
    href: "/chess/1",
    status: "past",
    dateLabel: "28 ก.พ. – 1 มี.ค. 2569",
    venue: "โรงเรียนเทศบาลศรีมหาราชา อ.ศรีราชา จ.ชลบุรี",
    youtubeId: "Lctt5SJVaio",
    // ภาพจากผู้จัด ย่อเหลือกว้าง 1600px ไว้ที่ public/images/chess/edition-1/
    photos: [
      { src: "/images/chess/edition-1/group-all.jpg", alt: "ภาพหมู่ผู้เข้าแข่งขันและผู้จัดงานบุญเครือรำลึก ครั้งที่ ๑", width: 1600, height: 901 },
      { src: "/images/chess/edition-1/winners-open.jpg", alt: "พิธีมอบรางวัลชนะเลิศและรองชนะเลิศ พร้อมโล่และเงินรางวัล", width: 1600, height: 901 },
      { src: "/images/chess/edition-1/winners-youth.jpg", alt: "นักหมากรุกเยาวชนรับเหรียญและถ้วยรางวัลบนเวที", width: 1600, height: 901 },
      { src: "/images/chess/edition-1/group-cheer.jpg", alt: "ผู้เข้าร่วมงานชูมือรวมพลังหน้าเวทีและโต๊ะแข่งขัน", width: 1600, height: 645 },
      { src: "/images/chess/edition-1/referees.jpg", alt: "คณะกรรมการและทีมงานจัดการแข่งขัน", width: 1600, height: 901 },
      { src: "/images/chess/edition-1/youth-players.jpg", alt: "นักหมากรุกเยาวชนในเสื้องานบุญเครือรำลึก", width: 1600, height: 901 },
      { src: "/images/chess/edition-1/players.jpg", alt: "นักหมากรุกผู้เข้าแข่งขันถ่ายภาพหน้าเวที", width: 1600, height: 901 },
      { src: "/images/chess/edition-1/family.jpg", alt: "ครอบครัวเขมาภิรัตน์ถ่ายภาพหน้าป้ายงาน", width: 1600, height: 1245 },
      { src: "/images/chess/edition-1/family-guests.jpg", alt: "ครอบครัวและแขกผู้ร่วมงานถ่ายภาพร่วมกัน", width: 1600, height: 901 },
    ],
  },
];

export const currentChessEdition = chessEditions[0];
export const pastChessEditions = chessEditions.filter((e) => e.status === "past");

export const chessStatusLabel: Record<ChessEditionStatus, string> = {
  upcoming: "กำลังเตรียมการ",
  open: "เปิดรับสมัคร",
  past: "จัดไปแล้ว",
};

export const chessOriginParagraphs = [
  "การแข่งขันหมากรุกไทย “บุญเครือรำลึก” จัดขึ้นจากความผูกพันของคุณบุญเครือ เขมาภิรัตน์ ผู้เป็นที่รู้จักกันดีในวงการหมากรุกท้องถิ่น และเป็นผู้ที่ชื่นชอบ ติดตาม รวมถึงมีส่วนร่วมในกิจกรรมหมากรุกของชุมชนมาโดยตลอด",
  "ความรักและความสนใจในกีฬาหมากรุกของท่านได้กลายเป็นแรงบันดาลใจสำคัญให้ครอบครัวและคนใกล้ชิดร่วมกันสานต่อสิ่งที่ท่านรัก",
  "การแข่งขันจึงจัดขึ้นเพื่อรำลึกถึงคุณบุญเครือ เขมาภิรัตน์ พร้อมทั้งส่งเสริมกีฬาหมากรุกไทย เปิดโอกาสให้นักกีฬาทุกระดับได้แสดงความสามารถ พบปะแลกเปลี่ยนประสบการณ์ และร่วมสร้างบรรยากาศการแข่งขันที่อบอุ่นและเป็นกันเอง",
];

/* ---------- เนื้อหาครั้งที่ ๑ ---------- */

export const chessScoring = [
  { result: "ชนะ", points: "3 คะแนน" },
  { result: "เสมอ", points: "1 คะแนน" },
  { result: "แพ้", points: "0 คะแนน" },
];

export const chessMoves = [
  { piece: "โคน", rule: "เดินไปข้างหน้าได้ 3 ทาง (ตรงหน้าและทแยงหน้า) และถอยหลังในแนวทแยงได้ 2 ทาง ครั้งละ 1 ช่อง" },
  { piece: "เม็ด", rule: "เดินและกินในแนวทแยงได้ครั้งละ 1 ช่อง" },
  { piece: "เบี้ย", rule: "เดินตรงไปด้านหน้า 1 ช่อง และกินหมากในแนวทแยงหน้า 1 ช่อง" },
  { piece: "เบี้ยหงาย", rule: "เดินในลักษณะเดียวกับเม็ด" },
  { piece: "การหงายเบี้ย", rule: "เมื่อเบี้ยเดินไปถึงแถวรองสุดท้ายของฝ่ายตรงข้าม จะเปลี่ยนเป็นเบี้ยหงาย" },
];

export const chessLoseConditions = [
  "ยอมแพ้ด้วยตนเอง",
  "ใช้เวลาการแข่งขันครบตามกำหนด",
  "ถูกปรับแพ้เนื่องจากกระทำผิดกติกา",
];

export const chessDrawConditions = [
  "เกิดตำแหน่งหมากซ้ำ 3 ครั้ง",
  "เดินวนโดยไม่มีความคืบหน้าหลายตา",
  "ฝ่ายตรงข้ามไม่มีหมากจน และหากทั้งสองฝ่ายไม่สามารถตกลงกันได้ ให้คณะกรรมการเป็นผู้ตัดสิน",
];

export const chessConduct = [
  "ห้ามพูดคุยหรือรบกวนคู่แข่งขันระหว่างการเล่น",
  "ห้ามใช้โทรศัพท์มือถือระหว่างการแข่งขัน",
  "ห้ามลุกจากโต๊ะแข่งขันโดยไม่ได้รับอนุญาตจากกรรมการ",
  "ห้ามแตะหมากโดยไม่มีเจตนาเดิน",
  "ผู้เล่นต้องกดนาฬิกาหลังจากเดินหมากทุกครั้ง",
  "ต้องหงายหรือปรับเบี้ยให้ถูกต้องตามกติกา",
  "ห้ามรบกวนหรือแสดงพฤติกรรมที่ไม่เหมาะสมต่อคู่แข่งขันฝ่ายตรงข้าม",
];

export const chessPenalties = [
  { offence: "แตะหมากแล้วไม่เดิน", penalty: "ครั้งแรกตักเตือน ครั้งถัดไปอาจปรับแพ้" },
  { offence: "แตะหมากฝ่ายตรงข้ามโดยไม่จำเป็น", penalty: "ตักเตือน และอาจปรับแพ้หากทำซ้ำ" },
  { offence: "เดินหมากผิด", penalty: "ย้อนกลับไปยังตำแหน่งเดิมแล้วเดินใหม่ให้ถูกต้อง" },
  { offence: "เดินหมากผิดซ้ำหลายครั้ง", penalty: "กรรมการมีสิทธิ์ปรับแพ้" },
  { offence: "ใช้เวลาเกินโดยไม่กดนาฬิกา", penalty: "อาจถูกตัดสินว่าหมดเวลา" },
  { offence: "เจตนารบกวนการแข่งขัน", penalty: "ตักเตือน ปรับลดเวลา หรือปรับแพ้" },
  { offence: "เดินหมากผิดแล้วกดนาฬิกา", penalty: "ย้อนกลับตำแหน่งเดิมและนับเป็นการเตือน 1 ครั้ง" },
];

export type ScheduleRow = { time: string; activity: string };

export const chessScheduleDay1: ScheduleRow[] = [
  { time: "08.00–08.30", activity: "ลงทะเบียนนักกีฬา ตรวจรายชื่อ แจกเสื้อ และตรวจอุปกรณ์" },
  { time: "08.40–09.00", activity: "พิธีกล่าวเปิดงานบุญเครือรำลึก" },
  { time: "09.00–09.10", activity: "ชี้แจงกติกาและอธิบายระบบการแข่งขัน" },
  { time: "09.20–11.00", activity: "การแข่งขันรอบที่ 1" },
  { time: "11.00–12.50", activity: "การแข่งขันรอบที่ 2" },
  { time: "12.50–13.50", activity: "พักรับประทานอาหารกลางวัน" },
  { time: "14.00–15.40", activity: "การแข่งขันรอบที่ 3" },
  { time: "16.00–16.10", activity: "ประกาศรายชื่อผู้ผ่านเข้าสู่รอบ 16 คน" },
  { time: "16.10–16.40", activity: "การแข่งขันรอบ Playoff" },
];

export const chessScheduleDay2: ScheduleRow[] = [
  { time: "08.00–08.55", activity: "รายงานตัวผู้ผ่านเข้ารอบ 16 คน" },
  { time: "09.00–10.00", activity: "การแข่งขันรอบ 16 คน" },
  { time: "10.30–11.30", activity: "การแข่งขันรอบ 8 คน" },
  { time: "11.30–12.40", activity: "พักรับประทานอาหารกลางวัน" },
  { time: "12.40–13.40", activity: "การแข่งขันรอบรองชนะเลิศ 4 คน" },
  { time: "14.00–15.45", activity: "การแข่งขันรอบชิงชนะเลิศ" },
  { time: "15.45–16.40", activity: "พิธีมอบรางวัลและถ่ายภาพร่วมกัน" },
];
