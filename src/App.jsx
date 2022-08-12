import React from "react";
import uuid4 from "uuid4";
import styled from "styled-components";

import Header from "./components/Header/Header";
import InfoGroup from "./components/InfoGroup/InfoGroup";

import contents from "./assets/contents.json";
import contactData from "./assets/contactInfo.json";

import "./App.css";

const AppContainer = styled.div`
  display: grid;
  column-gap: 5px;
  row-gap: 20px;
  grid-template-columns: 20% 10px repeat(4, 20%);
  grid-template-rows: 220px 10px repeat(${contents.length}, 1fr);
  width: fit-content;
`;

const StyledVerticalSeparator = styled.div`
  background-color: #DDDDDD;
  grid-column: 2;
  grid-row-start: 1;
  grid-row-end: span ${contents.length+2}
`
const StyledHorizontalSeparator = styled.div`
  background-color: #999999;
  grid-column-start: 1;
  grid-column-end: span 6;
  grid-row: 2;
`

function App() {
  /**
   * TODO
   *
   * 1, implement themeing
   * 2, add InfoModal functionality
   * 3, export to pdf
   * 4, allow editing
   *
   */

  return (
    <AppContainer>
      <Header contactData={contactData} />
      <StyledHorizontalSeparator />
      <StyledVerticalSeparator />
      {contents.map((group, index) => (
        <InfoGroup {...group} key={uuid4()} groupIndex={index} />
      ))}
    </AppContainer>
  );
}

export default App;
