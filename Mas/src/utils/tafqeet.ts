// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
/* eslint-disable @typescript-eslint/no-use-before-define */
/**
 *
 *
 * فيما يلي تعريف لبعض المصفوفات
 * التي تحتوي على تفسير الأرقام حسب المنازل العشرية
 *
 *
 */
function toWord($num: number, title?: string) {
  title = "";
  $num = Number($num);
  if (!$num) return "";
  const $aname = [
    "",
    "واحد",
    "اثنان",
    "ثلاثة",
    "اربعة",
    "خمسة",
    "ستة",
    "سبعة",
    "ثمانية",
    "تسعة",
    "عشرة",
    "أحد عشر",
    "اثنا عشر",
  ];
  const $aname10 = [
    "",
    "عشر",
    "عشرون",
    "ثلاثون",
    "اربعون",
    "خمسون",
    "ستون",
    "سبعون",
    "ثمانون",
    "تسعون",
  ];
  const $aname100 = [
    "",
    "مئة",
    "مئتان",
    "ثلاثمائة",
    "اربعمائة",
    "خمسمائة",
    "ستمائة",
    "سبعمائة",
    "ثمانمائة",
    "تسعمائة",
  ];
  const $aname1000 = ["", "الف", "الفان"];
  const num = $num;
  const ones = Math.floor(num % 10),
    tens = Math.floor((num / 10) % 10),
    hundreds = Math.floor((num / 100) % 10),
    thousands = Math.floor((num % 10000) / 1000),
    tenThousands = Math.floor((num / 10000) % 10),
    hundredThousands = Math.floor((num / 100000) % 10),
    millions = Math.floor((num / 1000000) % 10),
    tenMillions = Math.floor((num / 10000000) % 10),
    hundredMillions = Math.floor((num / 100000000) % 10);
  if (num < 13) return $aname[num] + " " + (title ? " " + title : "");
  if (num < 20) return toWord(num - 10) + " عشر " + (title ? " " + title : "");
  if (num < 100)
    return (
      (ones > 0 ? $aname[ones] + " و " + $aname10[tens] : $aname10[tens]) +
      (title ? " " + title : "")
    );
  if (num < 1000)
    return (
      (num - hundreds * 100 > 0
        ? $aname100[hundreds] + " و " + toWord(num - hundreds * 100)
        : $aname100[hundreds]) + (title ? " " + title : "")
    );
  if (num < 3000)
    return (
      (num -
        (thousands * 1000 + tenThousands * 10000 + hundredThousands * 100000) >
      0
        ? $aname1000[thousands] +
          " و " +
          toWord(
            num -
              (thousands * 1000 +
                tenThousands * 10000 +
                hundredThousands * 100000),
          )
        : $aname1000[thousands]) + (title ? " " + title : "")
    );
  if (num < 11000)
    return (
      (num -
        (thousands * 1000 + tenThousands * 10000 + hundredThousands * 100000) >
      0
        ? toWord(thousands + 10 * tenThousands + 100 * hundredThousands) +
          " الاف و " +
          toWord(
            num -
              (thousands * 1000 +
                tenThousands * 10000 +
                hundredThousands * 100000),
          )
        : toWord(thousands + 10 * tenThousands + 100 * hundredThousands) +
          " الاف ") + (title ? " " + title : "")
    );
  if (num < 1000000)
    return (
      (num -
        (thousands * 1000 + tenThousands * 10000 + hundredThousands * 100000) >
      0
        ? toWord(thousands + 10 * tenThousands + 100 * hundredThousands) +
          " الفا و " +
          toWord(
            num -
              (thousands * 1000 +
                tenThousands * 10000 +
                hundredThousands * 100000),
          )
        : toWord(thousands + 10 * tenThousands + 100 * hundredThousands) +
          " الفا ") + (title ? " " + title : "")
    );
  if (num < 1000000000)
    return (
      (num -
        (millions * 1000000 +
          tenMillions * 10000000 +
          hundredMillions * 100000000) >
      0
        ? toWord(millions + 10 * tenMillions + 100 * hundredMillions) +
          " مليون و " +
          toWord(
            num -
              (millions * 1000000 +
                tenMillions * 10000000 +
                hundredMillions * 100000000),
          )
        : toWord(millions + 10 * tenMillions + 100 * hundredMillions) +
          " مليون ") + (title ? " " + title : "")
    );
  return $num;
}
export function Tafqeet($num: number) {
  $num = Number($num);
  if (!$num) return "";

  const ints = Math.floor($num);
  let decimals = $num - ints;
  let text1 = "";
  if (ints >= 1) {
    text1 = toWord(ints) + " جنية ";
  }
  let text2 = "";
  decimals = Math.round(100 * (decimals || 0));
  if (decimals > 0.001) text2 = toWord(decimals) + " قرش";

  return text1 + (text2.length > 0 ? " و " + text2 : "") + " فقط لا غير ";
}
