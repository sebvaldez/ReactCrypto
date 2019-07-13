import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Navigation } from "./Navigation";
import { CryptoSearch } from "./CryptoSearch";

export default function App() {
  return (
    <div>
      <Navigation />
      <CryptoSearch />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
