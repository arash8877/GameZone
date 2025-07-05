import { useState } from "react";
import "./App.css";
import ExpandableText from "./components/ExpandableText";
// import Alert from "./components/Alert";
// import Button from "./components/Button/Button";
// import Like from "./components/Like";
// import Navbar from "./components/Navbar";
// import Cart from "./components/Cart";

//---------------------- App Component ----------------------
function App() {
  // const [alertVisible, setAlertVisible] = useState(false);
  // const [cartItems, setCartItems] = useState(["Item 1", "Item 2", "Item 3"]);

  return (
    <div>
      <ExpandableText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed exercitationem qui ratione eos
        non aliquam quis quidem animi dolores mollitia, earum a cupiditate dolorum magni cum
        laborum! Temporibus, eius! Cumque illo tempore ut nam repudiandae, ipsa deleniti eius
        voluptatem inventore quis! Possimus eaque placeat praesentium assumenda distinctio. Fugit
        non dicta nobis minima asperiores, iure suscipit exercitationem repellat. Aspernatur fugit
        eum quas rem veniam, numquam labore dolore minus, nesciunt tempora doloremque, quibusdam
        repudiandae id quo hic harum ipsum assumenda accusantium quos similique inventore nulla!
        Voluptatibus reiciendis eum accusamus porro mollitia exercitationem officia debitis quis,
        sequi aspernatur, consequuntur, autem voluptatum nihil perferendis?
      </ExpandableText>
    </div>
  );
}

export default App;
