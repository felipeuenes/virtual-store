import "./styles/global.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Header } from "./components/Header/Header";

export function App() {
  return (
    <BrowserRouter>
    <Header />
      <AppRoutes />
    </BrowserRouter>
  );
}
