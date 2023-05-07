import React from "react";
import styles from "./styles.module.scss";
import { Carousel } from "react-responsive-carousel";
import classnames from "classnames";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Results = () => {
  return (
    <div className={styles.background}>
      <Carousel
        autoPlay={false}
        showArrows={false}
        showStatus={false}
        className={styles.carousel}
      >
        <div className={styles.emissionsCard}>
          <div className={styles.emissionsText}>You vs Last Month</div>
          <div className={styles.emissionsRow}>
            <div className={classnames(styles.emissionsText, styles.leftSide)}>
              You are emitting 4 units less of CO2 than last month
            </div>
          </div>
        </div>
        <div>Hey2</div>
      </Carousel>
    </div>
  );
};
