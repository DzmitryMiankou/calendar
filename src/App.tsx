import React from "react";
import Header from "./components/header/Header";
import Calendar from "./components/calendar/Calendar";
import Hours from "./components/hours/Hours";
import styled from "styled-components";
import Footer from "./components/footer/Footer";

const AppStyle = styled.div`
  max-width: 740px;
  margin: auto;
  height: 100vh;
  overflow-y: hidden;
  display: grid;
  grid-template-rows: 50px 150px auto 70px;
`;

const App = () => {
  return (
    <AppStyle>
      <Header />
      <Calendar />
      <Hours />
      <Footer />
    </AppStyle>
  );
};

export default App;
