import { Header } from "./Components/Header";
import { PrincipalPage } from "./Components/Layouts/PrincipalPage/PrincipalPage";
import { Route, Routes } from "react-router-dom";
import { Footer } from "./Components/Footer";
import { Cart } from "./Components/Layouts/Cart/Cart";
function App() {

  return (
    <main className="bg-principal gap-12 min-h-screen justify-between flex flex-col items-center">
      <Header />
      {/* Creamos las rutas para que me muestre las paginas  */}
      <Routes>
        <Route path="/" Component={PrincipalPage} />
        <Route path="/Cart" Component={Cart} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
