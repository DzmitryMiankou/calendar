import React from "react";
import styled from "styled-components";

interface Props {
  date1: number;
  date2: number;
}

interface PropsState {
  number: Date;
  state: { date: Array<number> };
  time: string;
}

const FocousBlock = styled.div<Props>`
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

const FocousBlocks = ({ number, state, time }: PropsState) => {
  const year = number.getFullYear();
  const month = number.getMonth() + 1;
  const date = number.getDate();

  return (
    <FocousBlock
      date1={state.date[0]}
      date2={+`${year}${month}${date}${time.replace(":", "")}`}
    />
  );
};

export default React.memo(FocousBlocks);
