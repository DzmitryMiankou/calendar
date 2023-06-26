import React from "react";
import styled from "styled-components";
import { getWeek, getTimes } from "../../hook/getDate";
import FocousBlocks from "./focousBlock/FocousBlock";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../../redux/store";
import {
  userDateListAction,
  userQvestAction,
} from "../../../redux/reducers/userDate-reducer";
import { formatDateToNumber } from "../../hook/getDate";

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
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    margin-left: 2px;
    width: calc(100% - 2px);
    background-color: var(--violet-light-hover);
  }
`;

const DaysButton = () => {
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: RootState) => state.userDate);

  const setDate = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    a: { date: Date; time: string }
  ): void => {
    event.preventDefault();
    const clickDade = formatDateToNumber(a.date, a.time);
    const qvestCopyDate = state.date.includes(clickDade);
    if (qvestCopyDate === true) {
      dispatch(userQvestAction({ qvest2: true, date: clickDade }));
    }
    if (qvestCopyDate === false) {
      dispatch(userDateListAction(clickDade));
      dispatch(userQvestAction({ qvest2: false, date: 0 }));
    }
  };

  return (
    <Days>
      {getWeek().map((number) => (
        <DayB key={number.toLocaleString()}>
          {getTimes(24).map((time) => (
            <Day
              key={time}
              onClick={(event) => setDate(event, { date: number, time: time })}
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
