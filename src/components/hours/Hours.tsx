import React from "react";
import styled from "styled-components";
import { getWeek } from "../hook/getDate";

const Block = styled.div`
  display: flex;
  height: calc(100vh - 300px);
  overflow-y: scroll;
  overflow-x: hidden;
  padding-top: 15px;
`;

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
  height: 50px;
  border: solid 1px #b7b7b7;
  cursor: pointer;
  &:hover {
    background-color: #f1e7ff;
  }
`;

const HoursBlock = styled.div`
  display: flex;
  font-size: 18px;
  flex-direction: column;
  margin: auto;
  color: grey;
  margin-top: -13px;
`;

const Hour = styled.div`
  width: 50px;
  height: 50px;
  border: solid 1px #ffffff;
`;

const Hours = () => {
  return (
    <Block>
      <HoursBlock>
        {Array.from({ length: 25 }, (n, i) => {
          const d = new Date(0, 0, 0, 0, 60 * i);
          return d.toLocaleTimeString("ru", {
            hour: "2-digit",
            minute: "2-digit",
          });
        }).map((number, i) => (
          <Hour key={i}>{number}</Hour>
        ))}
      </HoursBlock>
      <Days>
        {getWeek().map((number) => (
          <DayB key={number.toLocaleString()}>
            {Array.from({ length: 24 }, (n, i) => {
              const d = new Date(0, 0, 0, 0, 60 * i);
              return d.toLocaleTimeString("ru", {
                hour: "2-digit",
                minute: "2-digit",
              });
            }).map((number) => (
              <Day key={number.toLocaleString()} />
            ))}
          </DayB>
        ))}
      </Days>
    </Block>
  );
};

export default Hours;
