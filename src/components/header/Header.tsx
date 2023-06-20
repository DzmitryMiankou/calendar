import React from "react";
import styled from "styled-components";

const HeaderBlock = styled.header`
  display: flex;
  justify-content: center;
`;

const WidthBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  font-size: 40px;
  width: 90%;
`;

const Button = styled.button`
  color: red;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 40px;
  &:hover {
    color: black;
  }
`;

const Header = () => {
  const set = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    prompt(`Enter event time: \r\n YYYY-MM-DD \r\n HH:mm:ss`);
  };

  return (
    <HeaderBlock>
      <WidthBlock>
        <div>Interview Calendar</div>
        <Button onClick={(e) => set(e)}>+</Button>
      </WidthBlock>
    </HeaderBlock>
  );
};

export default Header;
