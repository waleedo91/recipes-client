import { BrowserRouter, Routes, Route } from "react-router-dom";

import { HeaderComponent } from "./components/HeaderComponent";
import { HomePage } from "./components/home/HomePage";
import { FooterComponent } from "./components/FooterComponent";
import { ListRecipes } from "./components/listRecipe/ListRecipes";

import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/recipes" element={<ListRecipes />} />
        </Routes>
        {/* <FooterComponent /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
