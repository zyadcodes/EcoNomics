import React, { useEffect } from "react";
import logo from "./logo.svg";
import styles from "./App.module.scss";

function App() {
  useEffect(() => {
    fetchCompletion();
  }, []);

  return <div className={styles.done}>Hiiii</div>;
}

export default App;
