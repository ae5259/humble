export default function Info() {
    return (
        <>
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
              href="https://github.com/openexis/kumiko"
              target="_blank"
              rel="noopener noreferrer"
            >
              kumiko:
            </a>{" "}
            telegram bot moderator for openexis
          </li>
        </ul>
      </section>
      </>
    )
}