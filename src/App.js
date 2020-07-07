import React from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { Helmet } from "react-helmet";
import Favicon from "./assets/icons/favicon.ico"

function App() {
  return (
    <>
      <Helmet>
        <meta charSet="UTF-8" />
        <title>Riara Phinisi</title>
        <meta
          name="description"
          content="Established in 2020 in Bira, Indonesia, Riara Indonesia traces its history building quality ships. Riara provides shipbuilding solutions for Phinisi Boad & Fiberglass Boat. Our qualified and experienced in-house design and engineering team, as well as modern production, and quality check. We offer high grade products and services in new shipbuilding, remodeling, and design interior."
          data-react-helmet="true"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href={Favicon} />
      </Helmet>
      <Home />
    </>
  );
}

export default App;
