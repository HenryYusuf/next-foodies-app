import React from "react";

import classes from "./meals-grid.module.css";
import MealItem from "./meal-item";
import { MealsProps } from "@/lib/meals";

const MealsGrid = ({ meals }: { meals: MealsProps[] }) => {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
