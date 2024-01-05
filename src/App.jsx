import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HeaderComponent } from "./components/header/HeaderComponent";
import { HomePage } from "./components/home/HomePage";
import { FooterComponent } from "./components/footer/FooterComponent";
import { ListRecipes } from "./components/listRecipe/ListRecipes";

import "./App.css";
import RecipeView from "./components/recipe/RecipeView";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<ListRecipes />} />
          <Route path="/recipes/:id" element={<RecipeView />} />
        </Routes>
        <FooterComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
