import Trash from "/public/Trash.svg";
import Plus from "/public/Plus.svg";
import Less from "/public/Less.svg";
import CartContext from "../../../../Hooks/CartContext";
import { useContext } from "react";
import { useRef } from "react";
export const CartItem = ({ title, price, id, stock, quantity }) => {
  const { removeFromCart, addOrRemoveQuantity } = useContext(CartContext);
  const inputRef = useRef(null);

  const handleTrashClick = () => {
    removeFromCart({ title, price, id, stock, quantity });
  };
  const handleIncrement = () => {
    addOrRemoveQuantity(
      { title, price, id, stock, quantity },
      parseInt(inputRef.current.value) + 1
    );
  };
  const handleDecrement = () => {
    addOrRemoveQuantity(
      { title, price, id, stock, quantity },
      parseInt(inputRef.current.value) - 1
    );
  };

  return (
    <article className="flex h-24 justify-start gap-12 items-center w-full">
      <button onClick={handleTrashClick} className="invert h-4/6">
        <img src={Trash} className="h-full" alt="" />
      </button>
      <section className="flex relative py-3 px-5 w-5/6 border-4 rounded-t-xl rounded-bl-xl border-secundario items-center justify-between">
        <strong>{title}</strong>
        <span className="text-base font-extrabold">
          precio por unidad: <span className="font-normal">${price}</span>
        </span>
        <span className="absolute -left-2 p-1 bg-black rounded-full -top-2 text-xl font-bold">
          {id}
        </span>
        <p>Disponibles: {stock}</p>
        <p>precio total: ${price * quantity}</p>
        <section className="flex gap-2 items-center w-1/6 h-full">
          <button onClick={handleDecrement} className="invert h-7">
            <img src={Less} className="h-full" alt="" />
          </button>
          <input
            ref={inputRef}
            type="number"
            readOnly
            Value={quantity}
            className="w-12 h-full text-black text-center"
          />
          <button onClick={handleIncrement} className="invert h-7">
            <img src={Plus} className="h-full" alt="" />
          </button>
        </section>
      </section>
    </article>
  );
};
