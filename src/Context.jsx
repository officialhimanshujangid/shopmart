/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import { createContext, useContext, useState } from "react";

const contextData = createContext();

function ContextDataProvider({ children }) {
  const [currentId, setCurrentId] = useState(10);
  function updateCartId(id) {
    setCurrentId(id);
  }
  return (
    <contextData.Provider value={{ currentId, updateCartId }}>
      {children}
    </contextData.Provider>
  );
}

function useCartId() {
  const context = useContext(contextData);
  if (context === undefined) throw new Error("aborted");
  return context;
}
export { ContextDataProvider, useCartId };
