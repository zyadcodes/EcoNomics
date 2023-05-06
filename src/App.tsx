import React, { useEffect, useState } from "react";
import "./App.css";
import { PlaidLink } from "react-plaid-link";
import logo from "./logo.svg";
import styles from "./App.module.scss";
import { callChatGPT } from "./Utils/gpt";
import Card from "./Components/Card";

function App() {
  const [token, setToken] = useState("");
  const plaidInit = async () => {
    const plaid_init = await fetch(
      "https://us-central1-economics-758db.cloudfunctions.net/plaidInit"
    );
    const json_plaid = await plaid_init.json();
    return json_plaid;
  };
  const asyncUseEffect = async () => {
    const plaid_token = await plaidInit();
    setToken(plaid_token.link_token);
  };
  useEffect(() => {
    asyncUseEffect();
  }, []);
  return (
    <div className={styles.done}>
      Hiiii
        <PlaidLink
          token={token}
          clientName="EcoNomics"
          env="sandbox"
          product={["auth", "transactions"]}
          publicKey="6cda274b8dab393f8f760f01e48299"
          onExit={() => {}}
          onSuccess={() => {}}
        >
          CLICK ME TO OPEN PLAID 😩
        </PlaidLink>
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
