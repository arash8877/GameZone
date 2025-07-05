import { useState } from "react";
import "./App.css";
// import Alert from "./components/Alert";
// import Button from "./components/Button/Button";
// import Like from "./components/Like";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";

//---------------------- App Component ----------------------
function App() {
  // const [alertVisible, setAlertVisible] = useState(false);
  const [cartItems, setCartItems] = useState(["Item 1", "Item 2", "Item 3"]);

  return (
    <div>
      <Navbar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
    </div>
  );
}

export default App;
