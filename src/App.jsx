import { Route, Routes } from "react-router-dom";
import "./App.css";
import CubeContainer from "./components/cube/CubeContainer.jsx";
import XrCubeContainer from "./components/xr-cube/XrCubeContainer.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CubeContainer />} />
      <Route path="/cube" element={<CubeContainer />} />
      <Route path="/xr-cube" element={<XrCubeContainer />} />
    </Routes>
  );
}

export default App;
