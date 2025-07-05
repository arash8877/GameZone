import "./App.css";

import Button from "./components/Button";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];


  return (
    <div>
      <Button onClick={()=> console.log('click')}>My btn</Button>
    </div>
  );
}

export default App;
