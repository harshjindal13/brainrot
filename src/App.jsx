import { useState } from "react";
import "./App.css";
import { Nav } from "./components/nav";
import { Footer } from "./components/footer";
import { MobNav } from "./components/mobNav";
import { Mobhero } from "./components/mobhero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MobNav />

      <Mobhero
        url={"/../../assets/user-photo.jpg"}
        name={"ANKIT SHARMA"}
        passno={"7502092530442"}
        fromDate={"19/09/2025"}
        toDate={"18/10/2025"}
        qrurl={"../../assets/qr-code.png"}
      />

      <Footer />
    </>
  );
}

export default App;
