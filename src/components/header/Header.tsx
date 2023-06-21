import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";

const HeaderBlock = styled.header`
  display: flex;
  justify-content: center;
`;

const WidthBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 40px;
  width: 90%;
  @media (max-width: 480px) {
    font-size: 30px;
  }
  @media (max-width: 350px) {
    font-size: 25px;
  }
`;

const Button = styled.button`
  color: var(--red);
  background: none;
  display: flex;
  align-items: baseline;
  border: none;
  cursor: pointer;
  &:hover {
    color: var(--black);
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
        <Button onClick={(e) => set(e)}>
          <AddIcon
            sx={{
              fontSize: "35px",
              strokeWidth: 1,
            }}
          />
        </Button>
      </WidthBlock>
    </HeaderBlock>
  );
};

export default Header;
