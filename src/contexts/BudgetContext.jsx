import axios from "axios";
import { createContext, useContext, useState, useEffect } from "react";

const BudgetContext = createContext();

function BudgetModeProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);
  // const contextValue = { budgetMode, setBudgetMode, products, fetchProducts };

  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setProducts(response.data);
    });
  };

  useEffect(fetchProducts, []);

  return (
    <BudgetContext.Provider
      value={{ budgetMode, setBudgetMode, products, fetchProducts }}
    >
      {children}
    </BudgetContext.Provider>
  );
}

function useBudgetMode() {
  return useContext(BudgetContext);
}

export { useBudgetMode, BudgetModeProvider };
