import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const cartFromLocalStorage = JSON.parse(localStorage.getItem("cartItems"));
    if (cartFromLocalStorage) {
      setCart(cartFromLocalStorage);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cart));
  }, [cart]);

  const addToCart2 = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };
  const getQuantity = (product) => {
    console.log(product);
    const newCart = [...cart];
    let itemInCart = newCart.find((item) => item.name === product.name);
    const quantity = itemInCart.quantity;
    if (quantity) {
      return quantity;
    }
  };

  const setEmptyQuantity = (product) => {
    const newCart = [...cart];
    let itemInCart = newCart.find((item) => item.name === product.name);
    itemInCart.quantity = 0;
    setCart(newCart);
    dropWhenQuantityZero(product);
    // console.log("tes");
  };
  const dropWhenQuantityZero = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find((item) => product.name === item.name);
    if (itemInCart.quantity === 0) {
      setCart(cart.filter((product2) => product2 !== itemInCart));
    }
  };
  const quantityPlus = (product) => {
    const newCart = [...cart];
    newCart.find((item) => item.name === product.name).quantity += 1;
    setCart(newCart);
  };
  const quantityMinus = (product) => {
    const newCart = [...cart];
    let itemInCart = newCart.find((item) => item.name === product.name);
    itemInCart.quantity -= 1;
    setCart(newCart);
    dropWhenQuantityZero(product);
  };
  const removeFromCart2 = (productToRemove) => {
    setCart(cart.filter((product) => product !== productToRemove));
  };
  const getTotalPrice = () => {
    return cart.reduce(
      (sum, { pricePerQty, quantity }) => sum + pricePerQty * quantity,
      0
    );
  };
  const getTotalItem = ()=>{
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  }
  return (
    <Context.Provider
      value={{
        cart,
        addToCart2,
        removeFromCart2,
        quantityPlus,
        quantityMinus,
        clearCart,
        setEmptyQuantity,
        getQuantity,
        getTotalPrice,
        getTotalItem,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
