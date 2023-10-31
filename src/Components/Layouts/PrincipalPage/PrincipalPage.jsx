import { useState } from "react";
//importamos los libros locales
import { Books } from "../../../Constants/Books";
//importamos el componente de libro
import { Book } from "./Items/Book";
//importamos el contexto para usar el contexto que creamos
import { useContext } from "react";
//importamos el contexto del carrito
import CartContext from "../../../Hooks/CartContext";

import BASE_URLD from "../../../Constants/BASE_URL.d";
import { useEffect } from "react";
export const PrincipalPage = () => {
  //Importamos los libros de la api
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch(BASE_URLD+"api/Libro/Listar")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data.response);
      });
  }, []);

  return (
    <main className="w-5/6 bg-transparent flex-grow">
      <section className="flex w-full flex-wrap items-center justify-center gap-[10%]">
        {/* mapeamos los libros con un componente libro cada uno */}
        {/* Pero antes esperamos que carguen de la api usando una ternaria */}
        {
          books.length > 0
            ? books.map((book, index) => (
                <Book
                  stock={book.stock}
                  key={index}
                  image={book.img}
                  title={book.nombre}
                  price={book.precio}
                  id={book.id_libro}
                />
              ))
            : null
          // Books.map((book, index) => (
          //   <Book
          //     stock={book.stock}
          //     key={index}
          //     image={book.image}
          //     title={book.name}
          //     price={book.price}
          //     id={book.id}
          //   />
          // ))}
        }
      </section>
    </main>
  );
};
