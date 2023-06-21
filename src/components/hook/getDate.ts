export function getWeek(): Array<Date> {
  const curr = new Date();
  let week: Array<Date> = [];
  for (let i = 1; i <= 7; i++) {
    const first = curr.getDate() - curr.getDay() + i;
    const day = new Date(curr.setDate(first));
    week.push(day);
  }
  return week;
}

export function getTimes(params: number): Array<string> {
  return Array.from({ length: params }, (n, i) => {
    const d = new Date(0, 0, 0, 0, 60 * i);
    return d.toLocaleTimeString("ru", {
      hour: "2-digit",
      minute: "2-digit",
    });
  });
}

export function formatDateToNumber(dates: Date, time: string): number {
  const year = dates.getFullYear();
  const month = dates.getMonth() + 1;
  const date = dates.getDate();
  return +`${year}${month}${date}${time.replace(":", "")}`;
}

export function deleteElemInArr(
  arr: Array<number>,
  elemDel: number
): Array<number> {
  const myArray = arr;
  const newArray = myArray.filter(function (f) {
    return f !== elemDel;
  });
  return newArray;
}
