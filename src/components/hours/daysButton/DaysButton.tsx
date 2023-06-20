import React from "react";
import styled from "styled-components";
import { getWeek, getTimes } from "../../hook/getDate";
import FocousBlocks from "./focousBlock/FocousBlock";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Days = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const DayB = styled.div`
  width: 100%;
`;

const Day = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 0 0 var(--grey-border), 0 2px 0 0 var(--grey-border),
    0px 0px 0 0 var(--grey-border), 0px 0 0 0 var(--grey-border) inset,
    0 2px 0 0 var(--grey-border) inset;
  border-left: none;
  border-right: var(--border-block);
  @media (max-width: 568px) {
    height: 50px;
  }
`;

const DaysButton = () => {
  const state = useSelector((state: RootState) => state.userDate);
  const set = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    a: { date: Date; time: string }
  ): void => {
    event.preventDefault();
    const year = a.date.getFullYear();
    const month = a.date.getMonth() + 1;
    const date = a.date.getDate();
    const hours = a.date.getHours();
    //const minet = a.date.getMinutes();
    console.log(+`${year}${month}${date}${hours}00`);
  };

  return (
    <Days>
      {getWeek().map((number) => (
        <DayB key={number.toLocaleString()}>
          {getTimes(24).map((time) => (
            <Day
              key={time}
              onClick={(event) => set(event, { date: number, time: time })}
            >
              <FocousBlocks number={number} state={state} time={time} />
            </Day>
          ))}
        </DayB>
      ))}
    </Days>
  );
};

export default DaysButton;
