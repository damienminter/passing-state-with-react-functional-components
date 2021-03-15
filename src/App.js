import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ExampleContainer1 from "./Components/1.PropDrilling/ExampleContainer";
import ExampleContainer2 from "./Components/2.LiftingStateUp/ExampleContainer";
import ExampleContainer3 from "./Components/3.SpreadOperator/ExampleContainer";
import ExampleContainer4 from "./Components/4.SpreadRestOperator/ExampleContainer";
import ExampleContainer5 from "./Components/5.Composition/ExampleContainer";
import ExampleContainer6 from "./Components/6.Context/ExampleContainer";

function App() {
  const [menu, setMenu] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <p className="Title">Passing State</p>
          <p className="Subtitle">Using React functional components</p>
        </div>
      </header>
      <nav>
        <ul className="Navbar">
          <li onClick={() => setMenu(1)}>
            {menu === 1 ? (
              <strong className="Active">Prop Drilling</strong>
            ) : (
              <strong>Prop Drilling</strong>
            )}
          </li>
          <li onClick={() => setMenu(2)}>
            {menu === 2 ? (
              <strong className="Active">Lifting State Up</strong>
            ) : (
              <strong>Lifting State Up</strong>
            )}
          </li>
          <li onClick={() => setMenu(3)}>
            {menu === 3 ? (
              <strong className="Active">Spread Operator</strong>
            ) : (
              <strong>Spread Operator</strong>
            )}
          </li>
          <li onClick={() => setMenu(4)}>
            {menu === 4 ? (
              <strong className="Active">Rest Operator</strong>
            ) : (
              <strong>Rest Operator</strong>
            )}
          </li>
          <li onClick={() => setMenu(5)}>
            {menu === 5 ? (
              <strong className="Active">Composition</strong>
            ) : (
              <strong>Composition</strong>
            )}
          </li>
          <li onClick={() => setMenu(6)}>
            {menu === 6 ? (
              <strong className="Active">Context</strong>
            ) : (
              <strong>Context</strong>
            )}
          </li>
        </ul>
      </nav>
      <main className="App-body">
        {menu === 1 && <ExampleContainer1 />}
        {menu === 2 && <ExampleContainer2 />}
        {menu === 3 && <ExampleContainer3 />}
        {menu === 4 && <ExampleContainer4 />}
        {menu === 5 && <ExampleContainer5 />}
        {menu === 6 && <ExampleContainer6 />}
      </main>
    </div>
  );
}

export default App;
