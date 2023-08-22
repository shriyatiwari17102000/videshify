import React from "react";
import user_img from "../../images/user_img.png";
import classes from "./CardComponent.module.css";

const CardComponent = (props) => {
  return (
    <div
      className={`card d-flex  flex-row ${classes.card} ${props.cls} ${props.card_cls} align-items-center`}
    >
   {props.img &&    <img className="me-2" src={props.img} />}
      <div>
        <h1 className={` mb-1 ${classes.card_head}`}>{props.h1}</h1>
        {props.h4 && (
          <h4 className={` mb-1 ${classes.card_head}`}>{props.h4}</h4>
        )}
        {props.p && (
          <p className={` mb-0 ${classes.card_head} ${classes.card_p}`}>
            {props.p}
          </p>
        )}
      </div>
    </div>
  );
};

export default CardComponent;
