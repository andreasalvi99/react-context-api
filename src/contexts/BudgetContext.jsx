import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const BudgetContext = createContext();

function BudgetModeProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);

  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  };

  useEffect(fetchProducts, []);

  const cheapItems = products.filter((product) => {
    return product.price <= 30;
  });

  const visibileProducts = budgetMode ? cheapItems : products;

  return (
    <BudgetContext.Provider
      value={{
        budgetMode,
        setBudgetMode,
        products,
        fetchProducts,
        cheapItems,
        visibileProducts,
      }}
    >
      {children}
    </BudgetContext.Provider>
  );
}

function useBudgetMode() {
  return useContext(BudgetContext);
}

export { useBudgetMode, BudgetModeProvider };
