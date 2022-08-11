import React from "react";
import uuid4 from "uuid4";

import Header from "./components/Header/Header";
import InfoGroup from "./components/InfoGroup/InfoGroup";

import contents from './assets/contents.json';
import contactData from './assets/contactInfo.json';

import "./App.css"

function App() {

/**
 * TODO 
 * 
 * 1, utilize styled components for styles
 * 2, implement themeing
 * 3, add InfoModal functionality
 * 4, export to pdf
 * 5, allow editing
 * 
 */

  return (
    <>
      <Header contactData={contactData} />
      <main>{contents.map(group => <InfoGroup {...group} key={uuid4()} />)}</main>
    </>
  );
}

export default App;
