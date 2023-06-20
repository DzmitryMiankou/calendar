import React from "react";
import styled from "styled-components";
import DaysButton from "./daysButton/DaysButton";
import { getTimes } from "../hook/getDate";

const Block = styled.div`
  display: flex;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 15px 0 15px 5px;
`;

const HoursBlock = styled.div`
  display: flex;
  font-size: 18px;
  flex-direction: column;
  margin: auto;
  color: var(--grey-text);
  font-weight: 600;
  margin-top: -13px;
`;

const Hour = styled.div`
  width: 50px;
  height: 80px;
  &:last-child {
    height: 10px;
  }
  @media (max-width: 568px) {
    height: 50px;
  }
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
