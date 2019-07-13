import React, { Fragment } from "react";
import ReactDOM from "react-dom";

export default function App() {
  return (
    <div>
      <h2>Crypto Dashboard</h2>
      <ul>
        <li>dashbaord</li>
        <li>settings</li>
      </ul>
      <label>
        <span>Search for crypto</span>
        <input type="text" />
        <button>submit</button>
      </label>
      <section>charts of default currencies / favorite selected ones</section>
      <section>
        <aside>currencies loaded here ...</aside>
      </section>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
