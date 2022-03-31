import React from "react";
import { Col } from "react-bootstrap";
import "./Details.css";

const Details = ({ meal }) => {
  const { strMeal, strMealThumb } = meal;
  return (
    <div>
      <Col>
        <img src={strMealThumb} className="img-fluid" alt="" />
        <h4 className="text-center py-2 fw-bold">{strMeal}</h4>
      </Col>
    </div>
  );
};

export default Details;
