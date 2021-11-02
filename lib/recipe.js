import axios from "axios";
import { BASE_URL } from "../constants/baseUrl";
import {
  recipeData,
  searchedRecipeData,
  viewModalData,
  Recipedata1
} from "../constants/recipeData";

export const getRecipe = async (id) => {
  console.log("id is", id);
  const recipe = await axios.get(`${BASE_URL}recipe/${id}`).then(({ data }) => {
    return data;
  });
  return recipe;
};

export const viewAllRecipe = async (link) => {
  const recipe = await axios.get(`${link}`).then(({ data }) => {
    return data;
  });
  return recipe;
};

export const getSearchedRecipe = async (term) => {
  if (term === undefined || term === null || term === "") {
    return null;
  }

  const recipe = await axios.get(`${BASE_URL}search/${term}`).then(({ data }) => {
    console.log(data)
    return data;
  });
  return recipe;
};

export const storeAndGetNextDC  = async (url) => {
  const dc = await axios.get(url).then(({ data }) => {
    return data;
  });
  return dc;
};