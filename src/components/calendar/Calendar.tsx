import React from "react";
import styled from "styled-components";
import { getWeek } from "../hook/getDate";
import Month from "./month/Month";
import Day from "./day/Day";

const CalendarBlock = styled.div`
  display: grid;
  grid-template-columns: 50px auto;
  grid-template-areas:
    ". a"
    ". b";
  width: 100%;
  gap: 5px;
  border-bottom: var(--border-block);
  border-top: var(--border-block);
  background-color: var(--grey-background);
  @media (max-width: 568px) {
    grid-template-columns: 40px auto;
  }
`;

const WidthBlock = styled.div`
  display: flex;
  justify-content: space-between;
  grid-area: a;
  gap: 5px;
`;

const Calendar = () => {
  return (
    <CalendarBlock>
      <WidthBlock>
        {getWeek().map((number, i) => (
          <Day key={i} number={number} />
        ))}
      </WidthBlock>
      <Month
        date={getWeek()[0].toLocaleString("ru-RU", {
          month: "long",
          year: "numeric",
        })}
      />
    </CalendarBlock>
  );
};

export default Calendar;
