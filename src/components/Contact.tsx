import { useState } from "react";

export default function Contact() {
  const [popUpMessage, setPopUpMessage] = useState("");
  const [popUp, setPopUp] = useState(false);
  const [message, setMessage] = useState("");

  async function sendMessage(message: string) {
    const data = new FormData();
    data.append("message", message);

    const request = await fetch(
      "https://akumarujon-sendmessage-32.deno.dev/send",
      {
        method: "POST",
        body: data,
        headers: {
          "token": localStorage.getItem("token") as string,
        },
      },
    );

    const body = await request.json();
    console.log(request.status);
    console.log(body.message);

    if (!request.ok) {
      console.log("Works here");
      setPopUp(true);
      setPopUpMessage(`error: ${body.message}`);

      console.log(popUp);
      console.log(popUpMessage);
      console.log(message);
    }

    setPopUp(true);
    setPopUpMessage("message sent");
    setMessage("");
  }

  return (
    <>
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
          <button
            className="send"
            onClick={async () => await sendMessage(message)}
          >
            »
          </button>
        </div>
        {popUp
          ? (
            <div className="popup">
              {popUpMessage}
            </div>
          )
          : null}
      </section>
    </>
  );
}
