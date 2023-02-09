import { NavBar } from "../NavBar";
import './header.css'

export function Header() {
  return (
    <header className="w-full h-screen relative flex flex-col bg-no-repeat bg-cover bg-center bg-fixed after:content-[''] after:absolute after:w-full after:h-full after:bg-gradient-to-b .from-transparent from-black" id="header">
      <NavBar />
    </header>
  );
}
