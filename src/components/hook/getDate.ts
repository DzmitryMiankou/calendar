function getYearMonthDay(data: Date) {
  return {
    year: data.getFullYear(),
    month: data.getMonth() + 1,
    date: data.getDate(),
  };
}

export function getWeek(): Array<Date> {
  const getWeekDay = () => {
    const now = new Date();
    const numberDayInWeek = new Date().getDay();
    const getYearMD = getYearMonthDay(now);
    const curr = new Date(
      `${getYearMD.year}-${getYearMD.month}-${
        numberDayInWeek === 0 ? Math.abs(getYearMD.date - 7) : getYearMD.date
      }`
    );
    return curr;
  };
  console.log(getWeekDay());
  let week: Array<Date> = [];
  for (let i = 1; i <= 7; i++) {
    const first = getWeekDay().getDate() - getWeekDay().getDay() + i;
    const day = new Date(getWeekDay().setDate(first));
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
  const getYearMD = getYearMonthDay(dates);
  return +`${getYearMD.year}${getYearMD.month}${getYearMD.date}${time.replace(
    ":",
    ""
  )}`;
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
