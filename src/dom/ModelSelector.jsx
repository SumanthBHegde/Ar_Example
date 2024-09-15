import React from "react";
import { useModelContext } from "../contexts/ModelContext";

const ModelSelector = () => {
  const { setSelectedModel, models } = useModelContext();

  const handleDropdownChange = (e) => {
    const selectedModel = models.find((model) => model.name === e.target.value);
    setSelectedModel(selectedModel);
  };

  return (
    <>
      {/* Dropdown for large devices */}
      <div className="model-dropdown">
        <select onChange={handleDropdownChange}>
          {models.map((model) => (
            <option key={model.name} value={model.name}>
              {model.name}
            </option>
          ))}
        </select>
      </div>

      {/* Horizontal scroll for small devices */}
      <div className="scroll-container">
        {models.map((model) => (
          <button
            key={model.name}
            onClick={() => setSelectedModel(model)}
            className="model-button"
          >
            {model.name}
          </button>
        ))}
      </div>
    </>
  );
};

export default ModelSelector;
