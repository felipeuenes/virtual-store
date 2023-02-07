import { useLayoutEffect, useState } from "react";
import "./styles/global.css";
import { Header } from "./components/Header";
import { MdAddShoppingCart } from "react-icons/md";
import { formatPrice } from "./util/format";

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

export function App() {
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
      <Header />
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
    </div>
  );
}
