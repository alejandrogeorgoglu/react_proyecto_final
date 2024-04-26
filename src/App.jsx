import "bootstrap/dist/css/bootstrap.min.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { Header } from "./components/Header";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { Cart } from "./components/Cart";
import { LoginForm } from "./components/Login";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/src/components/Contacto.jsx" element={<Contacto />} />
          <Route path="/src/components/Login.jsx" element={<LoginForm />} />
          <Route path="/src/components/Footer.jsx" element={<Footer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />

          <Route path="*" element={404} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
