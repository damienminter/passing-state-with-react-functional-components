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
          <li onClick={() => setMenu(1)}>Prop Drilling</li>
          <li onClick={() => setMenu(2)}>Lifting State Up</li>
          <li onClick={() => setMenu(3)}>Spread Operator</li>
          <li onClick={() => setMenu(4)}>Rest Operator</li>
          <li onClick={() => setMenu(5)}>Composition</li>
          <li onClick={() => setMenu(6)}>Context</li>
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
