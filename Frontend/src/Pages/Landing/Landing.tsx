import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { BsBank, BsGraphUpArrow } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { palette } from "../../Utils/palette";
import { PlaidLink } from "react-plaid-link";

export const Landing = () => {
  const [isLoading, setIsLoading] = useState(true);
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
    setIsLoading(false);
  };

  useEffect(() => {
    asyncUseEffect();
  }, []);

  if (isLoading) {
    return <div />;
  }

  return (
    <div className={styles.background}>
      <div>
        <div className={styles.mainText}>EcoNomics</div>
        <div className={styles.subText}>Green Wallet, Greener Planet</div>
      </div>
      <Carousel autoPlay={false} showArrows={false} showStatus={false}>
        <div>
          <BsBank size={100} color={palette.yellow} className={styles.icon} />
          <div className={styles.subText}>Connect Your Finances</div>
        </div>
        <div>
          <BsGraphUpArrow
            size={100}
            color={palette.yellow}
            className={styles.icon}
          />
          <div className={styles.subText}>Track Your Carbon Footprint</div>
        </div>
        <div>
          <BiWorld size={100} color={palette.yellow} className={styles.icon} />
          <div className={styles.subText}>Clean the World</div>
        </div>
      </Carousel>
      <PlaidLink
        className={styles.button}
        style={{
            backgroundColor: palette.yellow,
            outline: "none",
            border: "none",
        }}
        token={token}
        clientName="EcoNomics"
        env="sandbox"
        product={["auth", "transactions"]}
        publicKey="6cda274b8dab393f8f760f01e48299"
        onExit={() => {}}
        onSuccess={() => {}}
      >
        <div className={styles.buttonText}>Get Started</div>
      </PlaidLink>
    </div>
  );
};
