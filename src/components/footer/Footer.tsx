import React from "react";
import styled from "styled-components";

const FooterBlock = styled.footer`
  display: flex;
  justify-content: center;
  background-color: var(--grey-background);
  border-top: var(--border-block);
  align-items: center;
  color: var(--red);
`;

const FooterWidth = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  align-items: center;
  color: var(--red);
`;

const Button = styled.button`
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: var(--red);
  &:hover {
    color: var(--black);
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
