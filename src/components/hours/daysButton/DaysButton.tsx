import React from "react";
import styled from "styled-components";
import { getWeek, getTimes } from "../../hook/getDate";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

interface Props {
  date1: string;
  date2: string;
}

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

const FocousBloc = styled.div<Props>`
  width: 92%;
  margin-top: 2px;
  margin-left: 2px;
  background-color: ${(p: Props) =>
    p.date1 === p.date2 ? "var(--violet-light-active)" : "none"};
  height: 92%;
  cursor: pointer;
  &:hover {
    background-color: var(--violet-light-hover);
  }
`;

const DaysButton = () => {
  const state = useSelector((state: RootState) => state);

  console.log(state.userDate.date);

  const set = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    a: { date: string; time: string }
  ): void => {
    event.preventDefault();
    console.log(a);
  };

  return (
    <Days>
      {getWeek().map((number) => (
        <DayB key={number.toLocaleString()}>
          {getTimes(24).map((time) => (
            <Day
              key={time}
              onClick={(event) =>
                set(event, { date: number.toLocaleDateString(), time: time })
              }
            >
              <FocousBloc
                date1={`${state.userDate.date}`}
                date2={`${number.toLocaleDateString()}`}
              />
            </Day>
          ))}
        </DayB>
      ))}
    </Days>
  );
};

export default DaysButton;
