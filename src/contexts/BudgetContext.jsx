import { createContext, useContext, useState } from "react";

const BudgetContext = createContext();

function BudgetModeProvider({ children }) {
  const [budgetMode, setBudgetMode] = useState(false);
  const contextValue = { budgetMode, setBudgetMode };

  return (
    <BudgetContext.Provider value={contextValue}>
      {children}
    </BudgetContext.Provider>
  );
}

function useBudgetMode() {
  return (useContext = BudgetContext);
}

export { useBudgetMode, BudgetModeProvider };
