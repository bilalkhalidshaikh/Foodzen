import React from "react";
import RecipeCard from "./Components/RecipeCard/RecipeCard";
import classes from "./reciepies.module.css";
import { cardData } from "./Components/RecipeCard/recipeData";

const Reciepies = () => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h1>Recipes creating a buzz this week!</h1>
        <span>EXPLORE ALL</span>
      </div>
      <div className={classes.cardContainer}>
        {cardData.map((data, i) => {
          return <RecipeCard key={i} data={data} />;
        })}
      </div>
    </div>
  );
};

export default Reciepies;
