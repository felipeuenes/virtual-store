import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home/Home";
import { Contact } from "./pages/Contact";
import { Cart } from "./pages/Cart";
import { Aboud } from "./pages/Aboud/aboud";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/aboud" element={<Aboud />} />
    </Routes>
  );
}
