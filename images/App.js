import React, { useState, useLayoutEffect } from "react";
import { Navbar, Header, Installation, Introduction, PopularExamples } from "./components";
import PropsTable from "./components/PropsTable/PropsTable";
import { Footer } from "./components/Footer/Footer";

function App() {
  const [state, setState] = useState(false);
  useLayoutEffect(() => {
    window.addEventListener("scroll", e => {
      if (!state) {
        const ax = document.getElementById("intro");
        const { y } = ax.getBoundingClientRect();
        if (y <= 100) {
          setState(true);
        }
      }
    });
  }, []);

  return (
    <div className="App">

      <Navbar />
      <Header />
      <Installation />
      <Introduction isMenuOpen={state} />
      <PopularExamples />
      <PropsTable />
      <Footer />

    </div>
  );
}
export default App;
