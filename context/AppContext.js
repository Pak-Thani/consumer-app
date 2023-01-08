import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {
  const route = useRouter();

  const [search, setSearch] = useState("");
  const [cart, setCart] = useState([]);
  const [payment, setPayment] = useState({
    payment_1: "",
    payment_2: "",
    payment: "",
  });
  const [data, setData] = useState({
    name: "",
    kabupuaten: "",
    kecamatan: "",
    alamat: "",
    detailAlamat: "",
    nomorWa: "",
    shipping: "",
    shipping_1: "",
    shipping_2: "",
    shipping_3: "",
    shipping_4: "",
  });
  const handleSubmitSearch = (e) => {
    e.preventDefault();
    route.push({
      pathname: "/search",
      query: { productSlug: search },
    });
    setSearch(search);
  };
  const handleSearch = (e) => {
    let value = e.target.value;
    setSearch(value);
    e.preventDefault();
    route.push({
      pathname: "/search",
      query: { productSlug: value },
    });
    setSearch(value);
    // handleSubmitSearch(e);
    // console.log(search);
  };

  const handlePayment = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === "payment_1") {
      setPayment({
        ...payment,
        payment_1: value,
        payment_2: "",
        payment: value,
      });
    } else if (name === "payment_2") {
      setPayment({
        ...payment,
        payment_1: "",
        payment_2: value,
        payment: value,
      });
    } else {
      setPayment({ ...payment, [name]: value });
    }
    console.log(payment);
  };

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    if (name === "time_1") {
      setData({
        ...data,
        shipping_1: value,
        shipping_2: "",
        shipping_3: "",
        shipping_4: "",
        shipping: value,
      });
    } else if (name === "time_2") {
      setData({
        ...data,
        shipping_1: "",
        shipping_2: value,
        shipping_3: "",
        shipping_4: "",
        shipping: value,
      });
    } else if (name === "time_3") {
      setData({
        ...data,
        shipping_1: "",
        shipping_2: "",
        shipping_3: value,
        shipping_4: "",
        shipping: value,
      });
    } else if (name === "time_4") {
      setData({
        ...data,
        shipping_1: "",
        shipping_2: "",
        shipping_3: "",
        shipping_4: value,
        shipping: value,
      });
    } else {
      setData({ ...data, [name]: value });
    }
  };
  const handlerShipping = (shipping) => {
    if (shipping === "time_1") {
      return "10.30 - 11.30";
    } else if (shipping === "time_2") {
      return "12.00 - 13.00";
    }
    if (shipping === "time_3") {
      return "15.30 - 16.30";
    }
    // if (shipping === "time_4") {
    //   return "15.00 - 17.00";
    // }
  };
  const handlerPaymenttoStr = (payment) => {
    if (payment === "payment_1") {
      return "BSI";
    } else if (payment === "payment_2") {
      return "CASH";
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

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
  const getTotalItem = () => {
    return cart.reduce((sum, { quantity }) => sum + quantity, 0);
  };
  return (
    <Context.Provider
      value={{
        search,
        setSearch,
        cart,
        data,
        payment,
        setData,
        handleChange,
        handleSubmit,
        addToCart2,
        removeFromCart2,
        quantityPlus,
        quantityMinus,
        clearCart,
        setEmptyQuantity,
        getQuantity,
        getTotalPrice,
        getTotalItem,
        handlerShipping,
        handlePayment,
        handlerPaymenttoStr,
        handleSearch,
        // handleSubmitSearch,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
