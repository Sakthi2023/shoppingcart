import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import ProductList from "./components/ProductList";

function App() {
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart([...cart, { ...item, quantity: 1 }]);
  };

  return (
    <div>
      <h1>Shopping Cart</h1>
      <ProductList addItem={addItem} />
      <Cart />
    </div>
  );
}

export default App;
