// import React from "react";
// import { FaBeer } from "react-icons/fa";
// import "./Card.css";
// const Card = (props) => {
//   return (
//     <div className="cardContainer">
//       <div className="logo">
//         <FaBeer />
//       </div>
//       <div className="contentName">Electricity?</div>
//       <div className="Stats">
//         <div>{props.cost}</div>
//         <div>{props.footPrint}</div>
//         <div>{props.avg}</div>
//       </div>
//     </div>
//   );
// };

// export default Card;
import React, { FC } from "react";
import { FaBeer } from "react-icons/fa";
import "./Card.css";

interface CardProps {
  iconName: string;
  name: string;
  cost: number;
  footPrint: number;
  avg: number;
}

const Card: FC<CardProps> = (props) => {
  return (
    <div className="cardContainer">
      <div className="logo">
        <FaBeer />
      </div>
      <div className="contentName">{props.name}</div>
      <div className="Stats">
        <div>{props.cost}</div>
        <div>{props.footPrint}</div>
        <div>{props.avg}</div>
      </div>
    </div>
  );
};

export default Card;
