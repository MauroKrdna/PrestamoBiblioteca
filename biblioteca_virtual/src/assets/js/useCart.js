// src/hooks/useCart.js
import { useState, useEffect } from "react";

export function useCart() {
  const [cartItems, setCartItems] = useState(() => {
    const saved = localStorage.getItem("cartItems");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const onStorageChange = (e) => {
      if (e.key === "cartItems") {
        setCartItems(e.newValue ? JSON.parse(e.newValue) : []);
      }
    };
    window.addEventListener("storage", onStorageChange);
    return () => window.removeEventListener("storage", onStorageChange);
  }, []);

  function addToCart(book) {
    setCartItems(prevItems => {
      const existing = prevItems.find(item => item.id === book.id);
      if (existing) {
        return prevItems.map(item =>
          item.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...book, quantity: 1 }];
      }
    });
  }
  
  
  function updateQuantity(id, delta) {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  }
   

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };


  function calculateShipping(destination) {
    switch (destination) {
      case "Bello":
        return 10000;
      case "Copacabana":
      case "Caldas":
      case "La Estrella":
        return 20000;
      case "Envigado":
      case "Itagui":
      case "Sabaneta":
        return 15000;
      default:
        return 0; // Medellín u otros
    }
  }

  function parsePrice(priceStr) {
    return Number(priceStr.replace(/[^0-9.-]+/g, '').replace('.', ''));
  }
  

  const clearCart = () => setCartItems([]);

  return {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    updateQuantity,
    calculateShipping,
    parsePrice
  };

}
