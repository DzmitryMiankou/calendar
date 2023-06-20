import React from "react";
import styled from "styled-components";

const FooterBlock = styled.footer`
  display: flex;
  justify-content: space-between;
  background-color: #e5e4e2;
  align-items: center;
  color: red;
`;

const Button = styled.button({
  fontSize: "20px",
  background: "none",
  border: "none",
  cursor: "pointer",
  color: "red",
});

const Footer = () => {
  return (
    <FooterBlock>
      <Button type="button">Today</Button>
      <Button type="button">Delete</Button>
    </FooterBlock>
  );
};

export default Footer;
