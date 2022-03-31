import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Details from "../Details/Details";
import "./MealDetails.css";

const MealDetails = () => {
  const { mealId } = useParams();
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, [mealId]);

  return (
    <div>
      <Row xl={6}>
        {meals.map((meal) => (
          <Details meal={meal}></Details>
        ))}
      </Row>
    </div>
  );
};

export default MealDetails;
