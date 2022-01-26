//import React from 'react';
//import logo from './logo.svg';
//import './App.css';

import styled from "styled-components";
import Contact from "./pages/Contact";

const StyledContact = styled(Contact)`

`

function App() {
  return (
    <div className="App">
      <StyledContact />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
