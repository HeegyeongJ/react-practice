import { useState } from "react";
import Input from "./components/Input";
import Items from "./components/Items";


function App() {
  const [items, setItems] = useState([])
  const addItems = (data) => {
    setItems(data)
  }
  return (
    <>
      <Input getItems={addItems} />
      <Items items={items} />
    </>
  );
}

export default App;
