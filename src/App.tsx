import React from 'react';
import { Provider } from "urql";
import Contact from "./pages/Contact";
import client from "./utils/createUrqlClient";

function App() {
  return (
    <div className="App">
      <Provider value={client}>
        <Contact />
      </Provider>
    </div>
  );
}

export default App;
