/**
 * 숫자 입력하면, 1000 이상부터 K단위로 출력합니다.
 * @param number 정수
 * @returns K단위로 변환된 숫자. (0, 500, 999, 1.0K, 300.0K)
 */
export const convertToKNotation = (number: number) => {
  if (number < 1000) return number.toString();

  let absNumber = Math.abs(number);
  const suffixes = ["", "K", "M", "B", "T"]; // 10^0, 10^3, 10^6, 10^9, 10^12, ...

  let suffixIndex = 0;

  while (absNumber >= 1000 && suffixIndex < suffixes.length - 1) {
    absNumber /= 1000;
    suffixIndex += 1;
  }

  const formattedNumber = (number < 0 ? "-" : "") + absNumber.toFixed(1);
  return formattedNumber + suffixes[suffixIndex];
};
