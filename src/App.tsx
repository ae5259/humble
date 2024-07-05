import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Api } from "grammy";
import { IPAddressInfo } from "./types";

function App() {
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const [ipAddress, setIpAddress] = useState(null);

  useEffect(() => {
    axios.get("https://api64.ipify.org?format=json")
      .then((response) => {
        setIpAddress(response.data.ip);
      })
      .catch((error) => {
        console.error("Error fetching IP address:", error);
      });
  }, []);

  async function sendMessage() {
    const api = new Api(import.meta.env.VITE_TOKEN);
    const ipInfo = await (await fetch(`http://ip-api.com/json/${ipAddress}`))
      .json() as IPAddressInfo;
    const output = `
      *a new message from*: ${ipAddress}
*region*: ${ipInfo.region}
*country*: ${ipInfo.country}
*city*: ${ipInfo.city}
*isp*: ${ipInfo.isp}
*latitude*: ${ipInfo.lat}
*longitude*: ${ipInfo.lon}

*message*: ${message}
      `;
    await api.sendMessage(5560860031, output, { parse_mode: "Markdown" });
    await api.sendLocation(5560860031, ipInfo.lat, ipInfo.lon);

    setMessage("");
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>akumarujon's land</h1>
        <p>
          this is place where i can share information about me and my projects
        </p>
      </header>

      <main>
        <section className="about-me">
          <h2>about me</h2>
          <p>
            my name is akmal isakulov, i am 18 years old, i am interested in
            various things but mostly programming and i have been learning it
            for 4 years
          </p>

          <h2>technologies</h2>
          <ul className={"tech-list"}>
            <li>typescript</li>
            <li>rust</li>
            <li>go</li>
            <li>deno</li>
            <li>nodejs</li>
            <li>linux</li>
          </ul>
        </section>

        <section className="projects">
          <h2>projects</h2>
          <ul>
            <li>
              <a
                href="https://github.com/akumarujon/xifetch"
                target="_blank"
                rel="noopener noreferrer"
              >
                xifetch:
              </a>{" "}
              neofetch alternative written in rust
            </li>
            <li>
              <a
                href="https://github.com/akumarujon/website"
                target="_blank"
                rel="noopener noreferrer"
              >
                website:
              </a>{" "}
              personal website rewritten in nuxt3
            </li>
            <li>
              <a
                href="https://github.com/akumarujon/ObHavo"
                target="_blank"
                rel="noopener noreferrer"
              >
                obhavo:
              </a>{" "}
              weather sdk that parses information from obhavo.uz
            </li>
            <li>
              <a
                href="https://github.com/akumarujon/webciiy"
                target="_blank"
                rel="noopener noreferrer"
              >
                webciiy:
              </a>{" "}
              web version of tapciify written in rust
            </li>
            <li>
              <a
                href="https://github.com/akumarujon/botland"
                target="_blank"
                rel="noopener noreferrer"
              >
                botland:
              </a>{" "}
              telegram bot template designed for deno runtime
            </li>
            <li>
              <a
                href="https://github.com/akumarujon/runner"
                target="_blank"
                rel="noopener noreferrer"
              >
                runner:
              </a>{" "}
              telegram bot to run your code using grammy and piston api
            </li>
            <li>
              <a
                href="https://github.com/akumarujon/kawaragi.ts"
                target="_blank"
                rel="noopener noreferrer"
              >
                kawaragi.ts:
              </a>{" "}
              rewritten version of kawaragi, a blog site for rendering markdown
              files as html
            </li>
            <li>
              <a
                href="https://github.com/akumarujon/kawaragi"
                target="_blank"
                rel="noopener noreferrer"
              >
                kawaragi:
              </a>{" "}
              blog site written in python with flask
            </li>
            <li>
              <a
                href="https://github.com/akumarujon/commits"
                target="_blank"
                rel="noopener noreferrer"
              >
                commits:
              </a>{" "}
              script to increase github commits (python/rust)
            </li>
            <li>
              <a
                href="https://github.com/akumarujon/xodus"
                target="_blank"
                rel="noopener noreferrer"
              >
                xodus:
              </a>{" "}
              terminal todo app using .txt files for storage
            </li>
            <li>
              <a
                href="https://github.com/akumarujon/dotland"
                target="_blank"
                rel="noopener noreferrer"
              >
                dotland:
              </a>{" "}
              website for denoland uzbek community (wip)
            </li>
            <li>
              <a
                href="https://github.com/akumarujon/bugalter"
                target="_blank"
                rel="noopener noreferrer"
              >
                bugalter:
              </a>{" "}
              cli tool for currency exchange designed for deno
            </li>
            <li>
              <a
                href="https://github.com/akumarujon/guard-bot"
                target="_blank"
                rel="noopener noreferrer"
              >
                guard-bot:
              </a>{" "}
              telegram bot moderator using pytelegrambotapi
            </li>
          </ul>
        </section>

        <section>
          <h2>message me</h2>

          <div className="textme">
            <textarea
              name="message"
              id="message"
              cols={10}
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            >
            </textarea>
            <button className="send" onClick={sendMessage}>»</button>
          </div>
          {showPopup && (
            <div className="popup">
              Message sent!
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
