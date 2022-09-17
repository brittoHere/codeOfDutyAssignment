import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomeScreen, TodoListScreen, CalculatorListScreen } from "./Screens";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/todo" element={<TodoListScreen />} />
        <Route path="/calculate" element={<CalculatorListScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
