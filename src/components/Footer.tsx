import { MdEmail, MdPhoneEnabled, MdChat } from "react-icons/md";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="w-full h-screen relative flex flex-col justify-around bg-footer bg-no-repeat bg-cover bg-center bg-fixed after:content-[''] after:absolute after:w-full after:h-full after:bg-[rgba(0 0 0 0.6)]">
      <div className="max-w-[1100px] h-[200px] my-0 mx-auto py-0 px-4 z-[1] flex flex-col justify-between">
        <div>
          <h3>Entrar em Contato</h3>
          <ul>
            <li>
              <a href="#">
                <MdPhoneEnabled size={25} color="#fff" /> (88) 99635-2291
              </a>
            </li>
            <li>
              <a href="#">
                <MdEmail size={25} color="#fff" /> casademaria@rcc.com.br
              </a>
            </li>
            <li>
              <a href="#">
                <MdChat size={25} color="#fff" /> Chat
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3>Redes Sociais</h3>
          <ul>
            <li>
              <a href="https://www.instagram.com/casademariaccr/">
                <FaInstagram size={25} color="#fff" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com">
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
        <small className="text-white">
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
