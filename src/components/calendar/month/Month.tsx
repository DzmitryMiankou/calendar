import React from "react";
import styled from "styled-components";

const MonthBlock = styled.div({
  display: "flex",
  fontSize: "25px",
  justifyContent: "space-between",
  width: "90%",
});

const Button = styled.button({
  fontSize: "25px",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "red",
});

const Month = ({ date }: { date: string }) => {
  return (
    <MonthBlock>
      <Button>{`<`}</Button>
      <div>{date}</div>
      <Button>{`>`}</Button>
    </MonthBlock>
  );
};

export default Month;
