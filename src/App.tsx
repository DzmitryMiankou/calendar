import React from "react";
import Header from "./components/header/Header";
import Calendar from "./components/calendar/Calendar";
import Hours from "./components/hours/Hours";
import styled from "styled-components";

const AppStyle = styled.div`
  max-width: 740px;
  margin: auto;
`;

const App = () => {
  return (
    <AppStyle>
      <Header />
      <Calendar />
      <Hours />
    </AppStyle>
  );
};

export default App;
