import React from "react";
import styled from "styled-components";
import { getWeek } from "../hook/getDate";
import Month from "./month/Month";

interface Props {
  date: string;
}

const CalendarBlock = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  flex-direction: column;
  height: 150px;
  background-color: #e5e4e2;
`;

const WidthBlock = styled.div`
  width: 90%;
  display: flex;
  justify-content: space-between;
`;

const DateBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 10px;
`;

const DayNumber = styled.button<Props>`
  font-size: 25px;
  border-radius: 45px;
  padding: 5px;
  background: ${(p: Props) =>
    p.date === new Date().toLocaleString() ? "red" : "none"};
  color: ${(p: Props) =>
    p.date === new Date().toLocaleString() ? "white" : "none"};
  border: none;
  cursor: pointer;
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
