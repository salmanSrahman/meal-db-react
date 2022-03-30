import React from "react";
import { Col } from "react-bootstrap";
import "./Meal.css";

const Meal = ({ meal }) => {
  console.log(meal);
  const { idMeal, strMeal, strMealThumb } = meal;

  return (
    <Col>
      <div className="meal-card">
        <img src={strMealThumb} className="img-fluid" alt="" />
        <h4 className="text-center py-2 fw-bold">{strMeal}</h4>
      </div>
    </Col>
  );
};

export default Meal;
