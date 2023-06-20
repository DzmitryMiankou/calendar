import React from "react";
import styled from "styled-components";

const HeaderBlock = styled.div({
  display: "flex",
  justifyContent: "center",
});

const WidthBlock = styled.div({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "baseline",
  fontSize: "40px",
  width: "90%",
});

const Button = styled.button({
  color: "red",
  background: "none",
  border: "none",
  cursor: "pointer",
  fontSize: "40px",
  "&:hover": {
    color: "black",
  },
});

const Header = () => {
  return (
    <HeaderBlock>
      <WidthBlock>
        <div>Interview Calendar</div>
        <Button>+</Button>
      </WidthBlock>
    </HeaderBlock>
  );
};

export default Header;
