import { useContext } from "react";
import CartContext from "../../../../Hooks/CartContext";

export const Book = ({ image, title, price, id, stock }) => {
    //importamos el contexto y lo declaramos
  const { addToCart } = useContext(CartContext);
// Cuando hacemos click se agrega al carrito por medio del contexto que se creo
  const handleClick = () => {
    addToCart({ id, title, price, image, stock, quantity: 1 });
  };

  return (
    <article className="max-h-screen my-2 h-[30rem] w-72 min-w-[9rem] p-2 text-white items-center justify-between border-secundario border flex flex-col rounded-b-3xl">
      <img
        src={image}
        alt=""
        className="object-cover h-2/3 w-full rounded-t-3xl"
      />
      <strong className="self-start">{title}</strong>
      <span>Disponibles {stock}</span>
      <span >{price}$</span>
      <button
        onClick={handleClick}
        className="bg-secundario py-2 px-3 rounded-xl"
      >
        Agregar
      </button>
    </article>
  );
};
