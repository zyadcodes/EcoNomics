import React, { useEffect } from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import { callChatGPT } from "./Utils/gpt";
import Card from "./Components/Card";

function App() {
  return (
    <div className={styles.done}>
      Hiiii
      <Card
        iconName="electricity"
        name="Electricity"
        cost={5}
        footPrint={30}
        avg={50}
      />
    </div>
  );
}

export default App;
