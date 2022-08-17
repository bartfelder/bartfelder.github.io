import React, { useState } from "react";
import uuid4 from "uuid4";
import { ThemeProvider } from "styled-components";

import Header from "../Header/Header";
import InfoGroup from "../InfoGroup/InfoGroup";

import contents from "../../assets/contents.json";
import contactData from "../../assets/contactInfo.json";
import themes from "../../assets/themes.json";

import StyledAppContainer from "./StyledAppContainer";
import StyledBackground from "./StyledBackground";
import StyledVerticalSeparator from "./StyledVerticalSeparator";
import StyledHorizontalSeparator from "./StyledHorizontalSeparator";
import StyledThemeButton from "./StyledThemeButton";

function App() {
  /**
   * Future TODO ideas
   *
   * 1, export to pdf
   * 2, allow editing
   *
   */
  const contentLength = contents.length;
  const [themeIndex, setThemeIndex] = useState(0);

  const cycleTheme = () => setThemeIndex((themeIndex + 1) % 3);

  return (
    <ThemeProvider theme={themes[themeIndex]}>
      <StyledBackground>
        <StyledAppContainer contentLength={contentLength}>
          <Header contactData={contactData} />
          <StyledHorizontalSeparator />
          <StyledVerticalSeparator contentLength={contentLength} />
          {contents.map((group, index) => (
            <InfoGroup {...group} key={uuid4()} groupIndex={index} />
          ))}
        </StyledAppContainer>
      </StyledBackground>
      <StyledThemeButton onClick={cycleTheme}>
        {themes[themeIndex].name}
      </StyledThemeButton>
    </ThemeProvider>
  );
}

export default App;
