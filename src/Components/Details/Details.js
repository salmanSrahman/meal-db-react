import React from "react";
import { Col } from "react-bootstrap";
import "./Details.css";

const Details = ({ meal }) => {
  let newMeal = [];
  for (let i = 1; i <= 20; i++) {
    if (meal["strIngredient" + i]) {
      const allMeal = ` ${meal["strIngredient" + i]} ${meal["strMeasure" + i]}`;
      console.log(allMeal);
      newMeal.push(allMeal);
    }
  }
  const { strMeal, strMealThumb } = meal;
  return (
    <Col className="mx-auto">
      <img src={strMealThumb} className="img-fluid" alt="" />
      <h4 className="text-center py-2 fw-bold">{strMeal}</h4>
      <ul>
        <li>{newMeal}</li>
      </ul>
    </Col>
  );
};

export default Details;
