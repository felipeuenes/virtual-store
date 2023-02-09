import { useLayoutEffect, useState } from "react";

import { MdAddShoppingCart } from "react-icons/md";
import { Cards } from "../../components/Cards";
import { formatPrice } from "../../util/format";
import './Home.css'

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

export function Home() {
  const [products, setProducts] = useState<ProductFormatted[]>([]);

  useLayoutEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    await fetch("http://localhost:3000/products", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data: Product[]) => {
        const prod = data.map((product) => ({
          ...product,
          priceFormatted: formatPrice(product.price),
        }));
        setProducts(prod);
      });
  }

  return (
    <div className="w-screen flex flex-col gap-16">
    
      <section className="w-full flex items-center justify-center py-10">
        <ul className="grid grid-cols-3 gap-5">
          {products.map((product) => {
            return (
              <li
                key={product.id}
                className="flex flex-col bg-white rounded-md p-5 max-w-sm"
              >
                <img
                  src={product.image}
                  alt=""
                  className="self-center max-w-[250px] max-h-[250px]"
                />
                <strong className="text-base text-zinc-700 mt-1">
                  {product.title}
                </strong>
                <span className="text-xl font-semibold my-1">
                  {product.priceFormatted}
                </span>
                <button className="bg-greenbtn border-none rounded-md mt-auto flex items-center px-3">
                  <div className="flex items-center p-3 bg-[rgba(0 0 0 0.1)]">
                    <MdAddShoppingCart
                      className="mr-1"
                      size={16}
                      color="#FFF"
                    />
                    <span className="text-white">0</span>
                  </div>
                  <span className="flex-1 text-center font-bold text-white">
                    ADICIONAR AO CARRINHO
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </section>

      <div className="corpo">
        <h1>Nossos produtos</h1>
          <Cards texto="Terço São Bento Preto Fosco 8mm Com Fé Brasil" image='https://m.media-amazon.com/images/I/51P5zpGWxYL._AC_SX522_.jpg'/>
          <Cards texto="Terço dos Mistérios do Rosário Imbuia" image={'https://loja.cancaonova.com/media/catalog/product/8/4/84.01051.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=140&width=140&canvas=140:140'}/>
          <Cards texto="Imagem De São Miguel Arcanjo De Borracha 33cm " image={'https://m.media-amazon.com/images/I/612gIqJJRPL._AC_SX425_.jpg'}/>
      </div>
    </div>
  );
}
