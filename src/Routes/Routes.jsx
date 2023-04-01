import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage";
import Products from "../pages/products";
export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}
