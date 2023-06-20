import React from "react";
import styled from "styled-components";
import { getWeek } from "../hook/getDate";
import Month from "./month/Month";

interface Props {
  date: string;
}

const CalendarBlock = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  grid-template-areas:
    ". a"
    ". b";
  width: 100%;
  gap: 10px;
  background-color: #e5e4e2;
`;

const WidthBlock = styled.div`
  display: flex;
  justify-content: space-between;
  grid-area: a;
  margin-right: 25px;
`;

const DateBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100%;
  justify-content: center;
`;

const DayNumber = styled.button<Props>`
  font-size: 25px;
  width: min-content;
  border-radius: 45px;
  padding: 5px;
  background: ${(p: Props) =>
    p.date === new Date().toLocaleString() ? "red" : "none"};
  color: ${(p: Props) =>
    p.date === new Date().toLocaleString() ? "white" : "none"};
  border: none;
  cursor: default;
`;

const Calendar = () => {
  return (
    <CalendarBlock>
      <WidthBlock>
        {getWeek().map((number) => (
          <DateBlock key={number.toLocaleString()}>
            <div>
              {number
                .toLocaleString("en-US", {
                  weekday: "short",
                })
                .slice(0, -2)}
            </div>
            <DayNumber
              key={number.toLocaleString()}
              type="button"
              date={number.toLocaleString()}
            >
              {number.toLocaleString("en-US", {
                day: "numeric",
              })}
            </DayNumber>
          </DateBlock>
        ))}
      </WidthBlock>
      <Month
        date={getWeek()[0].toLocaleString("en-US", {
          month: "long",
          year: "numeric",
        })}
      />
    </CalendarBlock>
  );
};

export default Calendar;
