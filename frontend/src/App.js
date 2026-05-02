import React, { useState } from "react";
import "./App.css";

function App() {
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState([]);

  const send = async () => {
    if (!msg) return;

    const res = await fetch("https://healtho-backend-bfvt.onrender.com/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: msg })
    });

    const data = await res.json();

    setChat([...chat, { user: msg, bot: data.reply }]);
    setMsg("");
  };

  return (
    <div className="app">
      <h1 className="title">🩺 Healtho AI Doctor</h1>

      <div className="chat-box">
        {chat.map((c, i) => (
          <div key={i}>
            <div className="user-msg">{c.user}</div>
            <div className="bot-msg">{c.bot}</div>
          </div>
        ))}
      </div>

      <div className="input-box">
        <input
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Describe your symptoms..."
        />
        <button onClick={send}>Send</button>
      </div>
    </div>
  );
}

export default App;
