import React from "react";
import styled from "styled-components";
import { formatDateToNumber } from "../../../hook/getDate";

interface Props<T> {
  date1: T;
  date2: T;
  date3: T;
}

interface PropsState {
  number: Date;
  state: { date: Array<number>; qvest: { qvest2: boolean; date: number } };
  time: string;
}

const FocousBlock = styled.div<Props<number>>`
  width: 92%;
  height: 92%;
  margin: 4% 0 2% 1%;
  background-color: ${(p: Props<number>) =>
    p.date1 === p.date3
      ? "var(--violet-light-delete)"
      : "none" || p.date1 === p.date2
      ? "var(--violet-light-active)"
      : "none"};
  display: ${(p: Props<number>) => (p.date1 === p.date2 ? "block" : "none")};
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    background-color: var(--violet-light-hover);
  }
`;

const FocousBlocks = ({ number, state, time }: PropsState) => {
  return (
    <>
      {state.date.map((dates) => (
        <FocousBlock
          key={dates}
          date1={dates}
          date2={formatDateToNumber(number, time)}
          date3={state.qvest.date}
        />
      ))}
    </>
  );
};

export default React.memo(FocousBlocks);
