import * as React from "react";
import Card from "../components/Card";


import "./index.css";
import CardWrapper from "../components/CardWrapper";


const vehicles = [
  {
    id: 1,
    name: "Sedans",
    text: "Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.",
    color: "hsl(31, 77%, 52%)",
  },

  {
    id: 2,
    name: "Suvs",
    text: "Take on SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.",
    color: "hsl(184, 100%, 22%)",
  },
  
  {
    id:3,
    name: "Luxury",
    text: "Cruise in the best car brands without the bloated prices. Enjoy the enhanced cimfort of a luxury rental and arrive in style.",
    color: "hsl(179, 100%, 13%)",
  }
  
]


const IndexPage = () => {

  return (
    <CardWrapper>
    {vehicles.map(vehicle => (
      <Card key={vehicle.id} vehicleDetails= {vehicle}></Card>
    ))}
    </CardWrapper>
  );
};

export default IndexPage;

export const Head = () => <title>Vehicle Preview</title>;
