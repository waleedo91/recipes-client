import axios from "axios";

const BASE_RECIPE_API_URL = "http://localhost:8080/api/recipes";

export const getAllRecipes = () => axios.get(BASE_RECIPE_API_URL);
