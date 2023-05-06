import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { PlaidLink } from "react-plaid-link";

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
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn About the Wonderful Life of Omar Abdelaziz****.
        </a>

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
      </header>
    </div>
  );
}

export default App;
