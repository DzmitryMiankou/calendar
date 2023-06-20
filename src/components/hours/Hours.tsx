import React from "react";
import styled from "styled-components";
import DaysButton from "./daysButton/DaysButton";
import { getTimes } from "../hook/getDate";

const Block = styled.div`
  display: flex;
  height: 70vh;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 15px 10px 15px 5px;
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
        {getTimes(25).map((number, i) => (
          <Hour key={i}>{number}</Hour>
        ))}
      </HoursBlock>
      <DaysButton />
    </Block>
  );
};

export default Hours;
