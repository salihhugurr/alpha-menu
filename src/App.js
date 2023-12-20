import React from "react";

import {Homepage,Menu} from "./pages"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
      <Route path="/menu" element={<Menu />} />
    </Routes>
  </Router>
);

export default App;
