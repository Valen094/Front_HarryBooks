import { useState } from "react";
import { createContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  //metodo para agregar un elemento al carrito
  const addToCart = (product) => {
    const Actual = cart.find((el) => el.id === product.id);
    if (Actual) {
      addOrRemoveQuantity(product, Actual.quantity + 1);
    } else {
      setCart([...cart, product]);
    }
  };

  //metodo para eliminar un elemento del carrito
  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  //metodo para agregar o remover la cantidad de un producto
  const addOrRemoveQuantity = (product, quantity) => {
    if (quantity < 1) {
      removeFromCart(product);
      return;
    }
    if (quantity <= product.stock) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: quantity,
              }
            : item
        )
      );
    } else return;
  };

  return (
    <CartContext.Provider
      value={{ cart, setCart, addToCart, removeFromCart, addOrRemoveQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
