import "./App.css";
import { v4 } from "uuid";

import links from "../public/links.json";

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
        <div className="links content-center p-3">
          {links.map((el) => (
            <a href={el.link}>
              <img width={50} src={el.icon} alt={el.name} />
            </a>
          ))}
        </div>
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
