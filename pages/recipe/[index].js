/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import classes from "./Recipe.module.css";
import { getRecipe, getSearchedRecipe } from "../../lib/recipe";
import RecipeC from "../../components/Recipe/Recipe";
const Recipe = ({ allRecipe, searchTerm, searchedRecipe }) => {
  const router = useRouter();
  const [searchedResult, setSearchedResult] = useState();
  const { index } = router.query;

  return (
    <div className={classes.main}>
      <RecipeC recipe={allRecipe} searchedRecipe={searchedRecipe} />
    </div>
  );
};
export const getServerSideProps = async ({ params }) => {
  const allRecipe = await getRecipe(params.index);
  const searchedRecipe = await getSearchedRecipe();
  return {
    props: {
      allRecipe,
      searchedRecipe,
    },
  };
};

export default Recipe;
