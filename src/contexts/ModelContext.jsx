import React, { createContext, useState, useContext } from "react";
import { models } from "../Models/models";

const ModelContext = createContext();

export const ModelProvider = ({ children }) => {
  const [selectedModel, setSelectedModel] = useState(models[0]);

  return (
    <ModelContext.Provider value={{ selectedModel, setSelectedModel, models }}>
      {children}
    </ModelContext.Provider>
  );
};

export const useModelContext = () => useContext(ModelContext);
