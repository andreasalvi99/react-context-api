import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUsPage";
import Products from "./pages/ProductsPage";
import DefaultLayout from "./layouts/DefaultLayout";
import ProductsDetailsPage from "./pages/ProductsDetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
import { BudgetModeProvider } from "./contexts/BudgetContext";
BudgetModeProvider;

export default function App() {
  return (
    <BudgetModeProvider>
      <BrowserRouter>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route index Component={HomePage} />
            <Route path="/about-us" Component={AboutUs} />
            <Route path="/products" Component={Products} />
            <Route path="/products/:id" Component={ProductsDetailsPage} />
            <Route path="*" Component={NotFoundPage} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BudgetModeProvider>
  );
}
