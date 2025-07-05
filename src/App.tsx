import { useState } from "react";
import "./App.css";
import Alert from "./components/Alert";

import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisible] = useState(false);

  return (
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisible(false)}>My alert </Alert>}
      <Button onClick={() => setAlertVisible(true)}>My btn</Button>
    </div>
  );
}

export default App;
