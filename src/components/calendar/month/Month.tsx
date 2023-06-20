import React from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const MonthBlock = styled.div`
  grid-area: b;
  display: flex;
  font-size: 25px;
  margin-right: 8%;
  width: 88%;
  margin-left: auto;
  justify-content: space-between;
`;

const Button = styled.button`
  font-size: 25px;
  background: none;
  border: none;
  cursor: pointer;
  color: red;
  &:hover {
    color: black;
  }
`;

const Month = ({ date }: { date: string }) => {
  return (
    <MonthBlock>
      <Button>
        <ArrowBackIosIcon />
      </Button>
      <div>{date}</div>
      <Button>
        <ArrowForwardIosIcon />
      </Button>
    </MonthBlock>
  );
};

export default Month;
