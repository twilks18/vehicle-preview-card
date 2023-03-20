import * as React from "react";
import Vehicle from "../components/Vehicle";
import Button from "../components/Button";
import Sedans from "../images/assets/icon-sedans.svg";
import Luxury from "../images/assets/icon-luxury.svg";
import Suvs from "../images/assets/icon-suvs.svg";
import { container, content } from "./Card.module.css";

const ThumbnailMapper = {
  sedans: Sedans,
  luxury: Luxury,
  suvs: Suvs,
};

const buttonName = "Learn More";


const Card = (props) => {
  let vehicalType = props.vehicleDetails.name.toLowerCase();

  let Thumbnail = ThumbnailMapper[vehicalType];

  let bgColor = props.vehicleDetails.color;
  
  let bttnId = `${vehicalType}Bttn`;



  return (
    <div style={{backgroundColor: bgColor}} className={container}>
    <div className={content}>
    <Thumbnail />
    <Vehicle
    name={props.vehicleDetails.name}
    text={props.vehicleDetails.text}
    />
    <Button id={bttnId} name={buttonName} color={bgColor}/>
    </div>
    </div>
  );
};

export default Card;
