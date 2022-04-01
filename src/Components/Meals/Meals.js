import React, { useEffect, useState } from "react";
import "./Meals.css";
import Meal from "../Meal/Meal";
import { Container, Row } from "react-bootstrap";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);
  return (
    <div className="meal-container">
      <Container>
        <Row md={4} xs={2}>
          {meals.map((meal) => (
            <Meal key={meal.idMeal} meal={meal}></Meal>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Meals;
