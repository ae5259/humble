import { useState } from "react";

interface FetchState {
  popUpMessage: string;
  popUp: boolean;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  message: string;
}

interface ErrorBody {
  message: string;
}

export const useFetch = (): [
  (message: string) => Promise<void>,
  FetchState,
] => {
  const [popUpMessage, setPopUpMessage] = useState<string>("");
  const [popUp, setPopUp] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  async function sendMessage(message: string): Promise<void> {
    if (!message) {
      onError({ message: "Message cannot be empty" });
      return;
    }

    const data = new FormData();
    data.append("message", message);

    try {
      const request = await fetch(
        "https://akumarujon-sendmessage-32.deno.dev/send",
        {
          method: "POST",
          body: data,
          headers: {
            token: localStorage.getItem("token") as string,
          },
        },
      );

      const body = await request.json();

      if (!request.ok) {
        onError(body);
        return;
      }

      onSuccess();
    } catch (error) {
      onError({ message: "Network error" });
    }
  }

  function onError(body: ErrorBody): void {
    setPopUpMessage(`error: ${body.message}`);
    setPopUp(true);
    setMessage("");
    setTimeout(() => {
      setPopUp(false);
    }, 3000);
  }

  function onSuccess(): void {
    setPopUpMessage("Message sent");
    setPopUp(true);
    setMessage("");
    setTimeout(() => {
      setPopUp(false);
    }, 3000);
  }

  return [sendMessage, { popUpMessage, popUp, setMessage, message }];
};
