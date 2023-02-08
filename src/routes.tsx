import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/Cart";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}
