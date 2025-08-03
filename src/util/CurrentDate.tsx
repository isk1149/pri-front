/**
 * @param format "YYYY.MM.DD", "YYYY-MM-DD", "DD.MM.YYYY"...
 * @returns 현 시점 yyyyMMdd 값을 format에 맞춰 반환
 */
export const currentDate = (format: string): string => {
  const date: Date = new Date();

  const year: string = String(date.getFullYear()); // 연도 (yyyy)
  const month: string = String(date.getMonth() + 1).padStart(2, "0"); // 월 (MM)
  const day: string = String(date.getDate()).padStart(2, "0"); // 일 (dd)

  format = format.replace("YYYY", year);
  format = format.replace("MM", month);
  format = format.replace("DD", day);

  return format;
};
