import { MdEmail, MdPhoneEnabled, MdChat } from "react-icons/md";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full h-96 relative flex flex-col justify-around bg-footer bg-no-repeat bg-cover bg-center bg-fixed after:content-[''] after:absolute after:w-full after:h-full after:bg-[rgba(0 0 0 0.6)]">
      <div className="w-2/4 h-[200px] my-0 mx-auto py-0 px-4 z-[1] flex flex-col gap-4">
        <div className="flex flex-col items-center">
          <h3 className="mb-4 font-bold text-base tracking-wide uppercase text-white">
            Entrar em Contato
          </h3>
          <ul className="flex gap-3">
            <li className="mx-0 mt-5 mb-3 inline-block">
              <a href="#" className="flex text-white text-base relative gap-2">
                <MdPhoneEnabled size={25} color="#fff" />
                (88) 99635-2291
              </a>
            </li>
            <li className="mx-0 mt-5 mb-3 inline-block">
              <a href="#" className="flex text-white text-base relative gap-2">
                <MdEmail size={25} color="#fff" /> casademaria@rcc.com.br
              </a>
            </li>
            <li className="mx-0 mt-5 mb-3 inline-block">
              <a href="#" className="flex text-white text-base relative gap-2">
                <MdChat size={25} color="#fff" /> Chat
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col items-center">
          <h3 className="mb-4 font-bold text-base tracking-wide uppercase text-white">
            Redes Sociais
          </h3>
          <ul className="flex gap-3">
            <li className="mx-0 mt-5 mb-3 inline-block">
              <a
                href="https://www.instagram.com/casademariaccr/"
                className="flex text-white text-base relative"
              >
                <FaInstagram size={25} color="#fff" />
              </a>
            </li>
            <li className="mx-0 mt-5 mb-3 inline-block">
              <a
                href="https://www.facebook.com"
                className="flex text-white text-base relative"
              >
                <FaFacebookSquare size={25} color="#fff" />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <div className="flex flex-col items-center z-[1]">
        <small className="text-white">
          &copy; 2022. Todos os Direitos Reservados.
        </small>
        <small className="text-white flex gap-1">
          Desenvolvido por
          <a
            href="https://github.com/devjoedson91?tab=repositories"
            target="_blank"
          >
            Joedson Ferreira Developer
          </a>
        </small>
      </div>
    </footer>
  );
}
