import { useState } from "react";
import "./App.css";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />

      <Footer />
    </>
  );
}

export default App;
