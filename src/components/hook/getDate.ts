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
