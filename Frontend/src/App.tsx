import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing } from "./Pages/Landing/Landing";
import styles from "./App.module.scss";
import { Results } from "./Pages/Results/Results";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Results />} />
      </Routes>
    </BrowserRouter>
  );
};
