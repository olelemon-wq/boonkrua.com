/** แถวตัวอักษรของกระดานหมากรุกไทย (ซ้ายไปขวา) */
export const BOARD_FILES = ["ก", "ข", "ค", "ง", "จ", "ฉ", "ช", "ญ"];

export type Square = [file: number, rank: number];

/**
 * ช่องประจำแต่ละหัวข้อในหน้าครั้งที่ ๑ เรียงเป็นเส้นทางเดินของ "ม้า" ทีละตา
 * ข1 → ค3 → ข5 → ง6 → จ8 → ฉ6 → ช4 → ฉ2 → ง1 → ข2
 */
export const KNIGHT_PATH: Square[] = [
  [1, 1], [2, 3], [1, 5], [3, 6], [4, 8],
  [5, 6], [6, 4], [5, 2], [3, 1], [1, 2],
];

export const squareFor = (index: number): Square =>
  KNIGHT_PATH[index % KNIGHT_PATH.length];

export const coord = ([file, rank]: Square) => `${BOARD_FILES[file]}${rank}`;
