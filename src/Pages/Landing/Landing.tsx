import React from "react";
import styles from "./styles.module.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BsBank, BsGraphUpArrow } from "react-icons/bs";
import { BiWorld } from "react-icons/bi";
import { palette } from "../../Utils/palette";

export const Landing = () => {
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
          <BsGraphUpArrow size={100} color={palette.yellow} className={styles.icon} />
          <div className={styles.subText}>Track Your Carbon Footprint</div>
        </div>
        <div>
          <BiWorld size={100} color={palette.yellow} className={styles.icon} />
          <div className={styles.subText}>Clean the World</div>
        </div>
      </Carousel>
      <div className={styles.button}>
        <div className={styles.buttonText}>Get Started</div>
      </div>
    </div>
  );
};
