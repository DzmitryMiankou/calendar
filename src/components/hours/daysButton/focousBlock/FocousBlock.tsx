import React from "react";
import styled from "styled-components";
import { formatDateToNumber } from "../../../hook/getDate";

interface Props {
  date1: number;
  date2: number;
  date3: number;
}

interface PropsState {
  number: Date;
  state: { date: Array<number>; qvest: { qvest2: boolean; date: number } };
  time: string;
}

const FocousBlock = styled.div<Props>`
  width: 92%;
  margin-top: 2px;
  margin-left: 2px;
  background-color: ${(p: Props) =>
    p.date1 === p.date3
      ? "var(--violet-light-delete)"
      : "none" || p.date1 === p.date2
      ? "var(--violet-light-active)"
      : "none"};
  height: 92%;
  display: ${(p: Props) => (p.date1 === p.date2 ? "block" : "none")};
  cursor: pointer;
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
