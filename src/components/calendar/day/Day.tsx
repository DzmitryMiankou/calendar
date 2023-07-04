import styled from "styled-components";

interface Props {
  date: string;
}

const regionTime = "en-US";
type regionType = typeof regionTime;

const DateBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  width: 100%;
  justify-content: center;
`;

const DayNumber = styled.button<Props>`
  font-size: 25px;
  width: min-content;
  border-radius: 45px;
  padding: 5px;
  background: ${(p: Props) =>
    p.date === new Date().toLocaleString(regionTime, { dateStyle: "short" })
      ? "red"
      : "none"};
  color: ${(p: Props) =>
    p.date === new Date().toLocaleString(regionTime, { dateStyle: "short" })
      ? "white"
      : "none"};
  border: none;
  cursor: default;
  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const Day = ({ number }: { number: Date }) => {
  const date = (str: regionType, option: Object | undefined): string => {
    const date = number.toLocaleString(str, option ?? {});
    if (date.length === 1) {
      return "0" + date;
    } else {
      return date;
    }
  };

  return (
    <DateBlock key={date(regionTime, undefined)}>
      <div>{date(regionTime, { weekday: "short" }).slice(0, -2)}</div>
      <DayNumber
        key={date(regionTime, undefined)}
        type="button"
        date={date(regionTime, { dateStyle: "short" })}
      >
        {date(regionTime, {
          day: "numeric",
        })}
      </DayNumber>
    </DateBlock>
  );
};

export default Day;
