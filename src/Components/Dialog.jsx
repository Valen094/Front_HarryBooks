import { useState } from "react";
import { useContext } from "react";
import CartContext from "../Hooks/CartContext";
import BASE_URLD from "../Constants/BASE_URL.d";

export const Dialog = ({ finalPrice, handleClick }) => {
  const { cart } = useContext(CartContext);
  const [finalMessage, setFinalMessage] = useState("Confirmacion de la compra");
  const buyProduct = (product) => {
    fetch(
      `${BASE_URLD}api/Libro/Comprar?id=${product.id}&quantity=${product.quantity}`
    );
  };

  const handleBuyClick = () => {
    cart.forEach((el) => {
      buyProduct(el);
    });
    setFinalMessage("Compra realizada con exito");
    setTimeout(() => {
      window.location.href = "/";
    }, 1200);
  };

  return (
    <dialog className="z-50 fixed gap-2 flex-col w-screen bg-transparent text-white h-screen flex items-center justify-center backdrop-blur-xl backdrop-brightness-50">
      <section className="w-full border-secundario border p-12 rounded-xl h-full max-h-96 max-w-[33rem] flex flex-col items-center justify-between">
        <strong className="text-xl">{finalMessage}</strong>
        <span>Precio total: {finalPrice}</span>
        <button
          onClick={handleBuyClick}
          className="py-3 px-5 bg-secundario rounded-xl"
        >
          Confirmar la compra
        </button>
      </section>
      <button onClick={handleClick} className="underline">
        Volver
      </button>
    </dialog>
  );
};
