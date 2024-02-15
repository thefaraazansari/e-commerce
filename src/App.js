import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import ProductPage from "./pages/productpage";
import Cartpage from "./pages/cartpage";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/:id" element={<ProductPage />} />
          <Route path="/cart" element={<Cartpage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
