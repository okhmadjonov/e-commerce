import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";

import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" replace={true} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
