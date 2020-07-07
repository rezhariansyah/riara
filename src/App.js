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
          content="Hello, as a Bira based Architects, Boat Consultant, and Content Creator. Sitto and team has completed several boat design and construction project - Producing Eco Friendly Boat, Out of Box design, and Boat according to cruise safety standards. We're also your travelmate,
      let's go on an adventure"
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
