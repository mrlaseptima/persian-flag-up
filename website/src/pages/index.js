import React, { useEffect, useState } from "react";
import {
  Navbar, Introduction, Header, Installation, PopularExamples, PropsTable, Footer
} from "./../components";


function App() {
  const [state, setState] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", e => {
      if (!state) {
        const ax = document.getElementById("intro");
        const { y } = ax.getBoundingClientRect();
        if (y <= 100) {
          setState(true);
        }
      }
    });
  });
  // TODO: in gatsby i remove array in useEffect last argument

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
