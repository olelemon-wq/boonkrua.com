export const chessRulePages = Array.from({ length: 13 }, (_, i) => {
  const page = String(i + 1).padStart(4, "0");
  return {
    src: `/images/chess/rules-page-${page}.jpg`,
    alt: `กติกาบุญเครือรำลึก หน้า ${i + 1}`,
    width: 1875,
    height: i === 1 ? 1092 : i === 3 ? 1379 : i === 5 ? 1138 : i === 10 ? 1279 : 1057,
  };
});
