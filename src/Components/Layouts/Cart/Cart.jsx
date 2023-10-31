import { useState } from "react";
import CartContext from "../../../Hooks/CartContext";
import { CartItem } from "./Items/CartItem";
import { useContext } from "react";
import { Dialog } from "../../Dialog";
export const Cart = () => {
  const { cart } = useContext(CartContext);
  const [confirm, setConfirm] = useState(false);
  const getPrice = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.price * item.quantity;
    });
    return total;
  };
  return (
    <>
      {confirm && (
        <Dialog handleClick={() => setConfirm(false)} finalPrice={getPrice()} />
      )}
      <main className=" text-white justify-between  w-5/6 flex flex-col items-center flex-grow">
        <section className=" flex flex-col w-full items-start gap-5">
          {cart.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              quantity={item.quantity}
              title={item.title}
              stock={item.stock}
              price={item.price}
            />
          ))}
            <span className="text-end w-5/6">Precio estimado: ${getPrice()}</span>
        </section>
        <section className="p-5 relative flex justify-center items-center  w-full bg-black self-center">
          <button
            onClick={() => setConfirm(true)}
            className=" py-3 px-7 bg-secundario text-2xl rounded-3xl"
          >
            Comprar
          </button>
        </section>
      </main>
    </>
  );
};
