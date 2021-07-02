import React, { useState } from "react";
import GlobalStyle from "./styles/GlobalStyle";
import PrinsDev from "./PrinsDev";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [burgerState, setBurgerState] = useState(false);
  return (
    <>
      <GlobalStyle activeModal={isModalOpen || burgerState} />
      <PrinsDev
        burgerState={burgerState}
        setBurgerState={setBurgerState}
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
      />
    </>
  );
}

export default App;
