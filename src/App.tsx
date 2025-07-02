import "./App.css";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";

function App() {
  const items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Alert>Hellow <span>Word</span></Alert>
    </div>
  );
}

export default App;
