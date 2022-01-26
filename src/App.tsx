//import React from 'react';
//import logo from './logo.svg';
//import './App.css';

import styled from "styled-components";
import Contact from "./pages/Contact";

const StyledContact = styled(Contact)`
background-image: url('https://media.istockphoto.com/photos/development-web-developer-picture-id698430010?s=612x612');
background-color: black;
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
