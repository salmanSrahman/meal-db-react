import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Details from "../Details/Details";
import "./MealDetails.css";

const MealDetails = () => {
  const [meals, setMeals] = useState([]);
  const { mealId } = useParams();

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
  }, []);

  return (
    <div>
      <Container>
        <Row xl={6}>
          {meals.map((meal) => (
            <Details key={meal.idMeal} meal={meal}></Details>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default MealDetails;
