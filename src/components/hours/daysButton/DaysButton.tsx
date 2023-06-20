import React from "react";
import styled from "styled-components";
import { getWeek, getTimes } from "../../hook/getDate";

const Days = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const DayB = styled.div`
  width: 100%;
  border-collapse: collapse;
`;

const Day = styled.div`
  width: 100%;
  height: 50px;
  box-shadow: 2px 0 0 0 #dbdbdb, 0 2px 0 0 #dbdbdb, 2px 2px 0 0 #dbdbdb,
    2px 0 0 0 #dbdbdb inset, 0 2px 0 0 #dbdbdb inset;
  cursor: pointer;
  &:hover {
    background-color: #e7e7ff;
  }
`;

const DaysButton = () => {
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
            />
          ))}
        </DayB>
      ))}
    </Days>
  );
};

export default DaysButton;
