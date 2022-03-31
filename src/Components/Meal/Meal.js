import React from "react";
import { Col } from "react-bootstrap";
import "./Meal.css";
import { useNavigate } from "react-router-dom";

const Meal = ({ meal }) => {
  console.log(meal);
  const { idMeal, strMeal, strMealThumb } = meal;
  const navigate = useNavigate();
  const showDetails = () => {
    const path = `/meal/${idMeal}`;
    navigate(path);
  };

  return (
    <Col>
      <div className="meal-card" onClick={showDetails}>
        <img src={strMealThumb} className="img-fluid" alt="" />
        <h4 className="text-center py-2 fw-bold">{strMeal}</h4>
      </div>
    </Col>
  );
};

export default Meal;
