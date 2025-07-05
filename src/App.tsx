import { useState } from "react";
import "./App.css";
// import Alert from "./components/Alert";
// import Button from "./components/Button/Button";
import Like from "./components/Like";


//---------------------- App Component ----------------------
function App() {
  // const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      <Like onClick={()=> console.log('clicked')}/>
    </div>
  );
}

export default App;
