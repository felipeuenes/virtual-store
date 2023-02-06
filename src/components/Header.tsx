import { NavBar } from "./NavBar";

export function Header() {
  return (
    <header className="w-full h-screen relative flex flex-col bg-header bg-no-repeat bg-cover bg-center bg-fixed after:content-[''] after:absolute after:w-full after:h-full after:bg-gradient-to-b .from-transparent from-black">
      <NavBar />
    </header>
  );
}
