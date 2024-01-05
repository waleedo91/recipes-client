import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { getAllRecipes } from "../../service/RecipeService";

import { Button, Card } from "react-bootstrap";
import "./ListRecipes.css";

export const ListRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    listRecipes();
  }, []);

  function listRecipes() {
    getAllRecipes()
      .then((response) => {
        console.log(response.data);
        setRecipes(response.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  function goToRecipe(id) {
    navigator(`/recipes/${id}`);
  }

  return (
    <div className="container">
      <h2>Recipes</h2>
      <div className="recipe-list">
        {recipes.map((recipe) => (
          <div
            className="recipe-card"
            key={recipe.id}
            style={{ display: "flex", flexDirection: "row" }}
          >
            <Card style={{ width: "18rem" }}>
              <Card.Body>
                <Card.Title>{recipe.recipeName}</Card.Title>
                <Card.Img
                  className="recipe-image"
                  variant="top"
                  src={recipe.recipeImage}
                />
                <Card.Text>
                  <strong>Cook Time:</strong> {recipe.cookTime}
                </Card.Text>
                <Card.Text>
                  <strong>Prep Time:</strong> {recipe.prepTime}
                </Card.Text>
                <Button onClick={() => goToRecipe(recipe.id)}>
                  View Recipe
                </Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
