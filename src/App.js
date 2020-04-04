import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { NavBar } from "./Component/index";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <NavBar />
    </Router>
  );
}

export default App;
