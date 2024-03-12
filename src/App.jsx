import { useState } from "react";

import "./App.css";
import Header from "./Components/Header";
import MainContent from "./Components/MainContent";
import CountryForm from "./Components/CountryForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <CountryForm></CountryForm>
    </>
  );
}

export default App;
