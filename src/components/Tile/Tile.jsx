import React from "react";
import { Card } from "react-bootstrap";
import classes from './Tile.module.css'
const Tile = (props) => {
  return (
    <Card className={`${classes.card} w-100 px-0 ${props.cls} ${props.data.length > 1 ? classes.flex:''}`}>
      {props.data.map((element, index) => (
        <Card.Body key={index} className={`text-center p-0 w-100 ${classes.body}`}>
          <Card.Title className="dash_card_titleleft w-100 mt-0">{element.h4}</Card.Title>
          <Card.Text className="dash_card_head text-center">{element.h1}</Card.Text>
          <Card.Text className="dash_card_para text-center w-100">{element.p}</Card.Text>
        </Card.Body>
      ))}

      {/* <h4>{props.h4}</h4>
      <h1>{props.h1}</h1> */}
      {/* {props.show ? <b>{props.show ? "hello" : "bye bye"}</b> : ""}
      {props.show2 && <b>show2 is true</b>} */}
      {/* <p>{props.p}</p> */}
    </Card>
  );
};

export default Tile;
