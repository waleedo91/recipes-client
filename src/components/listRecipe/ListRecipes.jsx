import { useState, useEffect } from "react";

import { getAllRecipes } from "../../service/RecipeService";

import { Card } from "react-bootstrap";
import "./ListOrder.css";

export const ListRecipes = () => {
  const [recipes, setRecipes] = useState([]);

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
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Text>
                  <strong>Cook Time:</strong> {recipe.cookTime}
                </Card.Text>
                <Card.Text>
                  <strong>Prep Time:</strong> {recipe.prepTime}
                </Card.Text>
                <Card.Text>{recipe.recipeDescription}</Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
