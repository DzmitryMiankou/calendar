import React from "react";
import styled from "styled-components";

const FooterBlock = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #e5e4e2;
  align-items: center;
  color: red;
`;

const FooterWidth = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  color: red;
`;

const Button = styled.button`
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: red;
  &:hover {
    color: black;
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <FooterWidth>
        <Button type="button">Today</Button>
        <Button type="button">Delete</Button>
      </FooterWidth>
    </FooterBlock>
  );
};

export default Footer;
