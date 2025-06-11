import { useFetch } from "../Hooks/useFetch";
import { PopupDialog } from "./Popup";

import "../textarea.css";

export default function Contact() {
  const [sendMessage, { popUpMessage, popUp, setMessage, message }] =
    useFetch();
  return (
    <>
      <section>
        <h2>message me</h2>

        <div className="textme">
          <div className="input-wrapper">
            <textarea
              className="textarea"
              name="message"
              id="message"
              cols={10}
              rows={5}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
            />
            <button
              className="send"
              onClick={async () => {
                if (message.trim()) {
                  await sendMessage(message);
                  setMessage("");
                }
              }}
              disabled={!message.trim()}
            >
              »
            </button>
          </div>
        </div>
        {popUp && <PopupDialog message={popUpMessage} />}
      </section>
    </>
  );
}
