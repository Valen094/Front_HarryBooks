//Importo el icono svg
import ShopCart from "/public/ShopCart.svg"
import {Link} from "react-router-dom"
import { useContext } from "react";
import  CartContext  from "../Hooks/CartContext";
export const Header = () => {
    const { cart }  = useContext(CartContext)
  return (

    <header className="bg-transparent relative h-24 flex items-center justify-center w-5/6 border-b border-secundario p-3">
     <Link to="/" className="h-full w-auto"> <img src="/logo.png" alt="" className="h-full w-auto" /></Link>
      {/* uso el icono importado como fuente de la imagen, dentro de un link para que al presionarlo me lleve a la otra ruta */}
      <Link to="/Cart"><img src={ShopCart} alt="" className="absolute right-7 top-7 h-3/6" /></Link>
      <span className="absolute right-7 top-3 text-xl font-bold text-white z-50">{cart.length}</span>
    </header>
  );
};
