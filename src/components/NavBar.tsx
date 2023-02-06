import { MdShoppingBasket, MdMenu, MdClose } from "react-icons/md";

export function NavBar() {
  return (
    <nav className="w-full h-24 flex items-center justify-between bg-transparent border-b border-zinc-600 z-[1] px-5 py-0">
      <ul className="flex ">
        <li>
          <a
            href="/"
            className="text-base uppercase text-white text-center my-0 mx-[50px] py-[5px] px-[10px] hover:opacity-70 font-montserrat"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/about"
            className="text-base uppercase text-white text-center my-0 mx-[50px] py-[5px] px-[10px] hover:opacity-70 font-montserrat"
          >
            Sobre
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="text-base uppercase text-white text-center my-0 mx-[50px] py-[5px] px-[10px] hover:opacity-70 font-montserrat"
          >
            Contato
          </a>
        </li>
      </ul>
      <a href="/cart">
        <div className="flex items-center">
          <div className="text-right mr-3">
            <strong className="text-white block">Meu carrinho</strong>
            <span className="text-white text-xs">2 items</span>
          </div>
          <MdShoppingBasket size={36} color="#13ce22" />
        </div>
      </a>
    </nav>
  );
}
