import { MdShoppingBasket, MdMenu, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { Input } from "antd";



export function NavBar() {
  return (
    <nav className="w-full h-24 flex items-center justify-between bg-transparent border-b border-zinc-600 z-[1] px-5 py-0">
      <ul className="flex ">
        <li>
          <Link
            to="/"
            className="text-base uppercase text-white text-center my-0 mx-[50px] py-[5px] px-[10px] hover:opacity-70 font-montserrat"
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="/aboud"
            className="text-base uppercase text-white text-center my-0 mx-[50px] py-[5px] px-[10px] hover:opacity-70 font-montserrat"
          >
            Sobre
          </a>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-base uppercase text-white text-center my-0 mx-[50px] py-[5px] px-[10px] hover:opacity-70 font-montserrat"
          >
            Contato
          </Link>
        </li>
        <li>
            <Input type="text" placeholder="O que procura?" style={{width: 350}}/>
            <button>Pesquisar</button>
        </li>
      </ul>
      <Link to="/cart">
        <div className="flex items-center">
          <div className="text-right mr-3">
            <strong className="text-white block">Meu carrinho</strong>
            <span className="text-white text-xs">2 items</span>
          </div>
          <MdShoppingBasket size={36} color="#13ce22" />
        </div>
      </Link>
    </nav>
  );
}
