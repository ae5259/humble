import "./App.css";
import { v4 } from "uuid";

import Info from "./components/Info";
import Contact from "./components/Contact";
import Friends from "./components/Friends";

function App() {
  if (!localStorage.getItem("token")) {
    localStorage.setItem("token", v4());
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>akumarujon's land</h1>
          <p>
            this is place where i can share information about me and my projects
          </p>
        </header>

        <main>
          <Info />
          <Contact />
          <Friends />
        </main>
      </div>
    </>
  );
}

export default App;
