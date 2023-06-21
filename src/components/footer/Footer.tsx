import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import {
  userDeleteAction,
  userQvestAction,
} from "../../redux/reducers/userDate-reducer";

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
  const dispatch: AppDispatch = useDispatch();
  const state = useSelector((state: RootState) => state.userDate);

  const deleteDate = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    event.preventDefault();
    dispatch(userDeleteAction(state.qvest.date));
    dispatch(userQvestAction({ qvest2: false, date: 0 }));
  };

  return (
    <FooterBlock>
      <FooterWidth>
        <Button type="button">Today</Button>
        <>
          {state.qvest.qvest2 ? (
            <Button onClick={(event) => deleteDate(event)} type="button">
              Delete
            </Button>
          ) : (
            <></>
          )}
        </>
      </FooterWidth>
    </FooterBlock>
  );
};

export default Footer;
