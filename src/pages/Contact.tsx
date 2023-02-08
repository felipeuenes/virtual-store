import { Header } from "../components/Header";
import {
  MdLocationOn,
  MdPhoneEnabled,
  MdOutlineMailOutline,
} from "react-icons/md";
import { Footer } from "../components/Footer";

export function Contact() {
  return (
    <>
      <Header />
      <div className="max-w-[1100px] relative my-0 mx-auto py-0 px-4">
        <div className="grid grid-cols-2 gap-10 relative px-4 min-h-[1px] mx-auto my-24">
          <div>
            <h3 className="font-lato text-2xl">Entre em Contato</h3>
            <form>
              <label className="font-lato" htmlFor="name">
                Nome
              </label>
              <input
                type="text"
                id="name"
                className="font-lato"
                placeholder="Seu nome"
                value={"name"}
              />

              <label className="font-lato" htmlFor="email">
                E-mail
              </label>
              <input
                type="text"
                id="email"
                className="font-lato"
                placeholder="Seu endereço de e-mail"
                value={"email"}
              />

              <label className="font-lato" htmlFor="message">
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                cols={30}
                rows={10}
                className="font-lato"
                placeholder="Escreve alguma coisa"
                value={""}
              ></textarea>

              <button type="submit">Enviar</button>
            </form>
          </div>
          <div className="col-md-5 col-md-push-1 animate-box">
            <div className="mb-8 float-left w-full relative">
              <h3 className="font-lato text-2xl">Informações de Contato</h3>
              <ul className="mt-4">
                <li className="flex">
                  <MdLocationOn size={30} color="#777" />
                  <p>
                    Avenida, R. José Versolato, 101 - 12ª andar - Centro, São
                    Bernardo do Campo - SP, 09750-730
                  </p>
                </li>
                <li className="phone">
                  <MdPhoneEnabled size={25} color="#777" />
                  <a href="tel://1121497360" className="bg-aColor">
                    (11) 2149-7360
                  </a>
                </li>
                <li className="email">
                  <MdOutlineMailOutline size={25} color="#777" />
                  <a href="#" className="bg-aColor">
                    casademaria@ccr.com.br
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
