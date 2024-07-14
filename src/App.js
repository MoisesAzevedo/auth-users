import "./App.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./Routes.jsx";

function App() {
  return (
    <BrowserRouter className="App">
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
