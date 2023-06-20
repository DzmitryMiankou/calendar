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
