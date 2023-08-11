import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../src/Components/Navbar/Navbar";
export  class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home/>} />
      </Routes>
      </BrowserRouter>
    </div>
    )
  }
}
