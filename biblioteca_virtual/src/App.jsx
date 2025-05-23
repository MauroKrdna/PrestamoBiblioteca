import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import ContactPage from "./pages/ContactPage";
import BooksPage from "./pages/BooksPage";
import AboutPage from "./pages/AboutPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";


function App() {

  return (
    <>
      <Routes>
         <Route path ="/" element ={<HomePage/>}/>
         <Route path ="/About" element ={<AboutPage/>}/>
         <Route path ="/Books" element ={<BooksPage/>}/>
         <Route path ="/Contact" element ={<ContactPage/>}/>
         <Route path ="/Carrito" element ={<CartPage/>}/>
         <Route path ="/Checkout" element ={<CheckoutPage/>}/>
         <Route path ="/*" element ={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
