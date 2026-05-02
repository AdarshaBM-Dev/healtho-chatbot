const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Healtho Backend Running ✅");
});

app.post("/chat", (req, res) => {
  const msg = (req.body.message || "").toLowerCase();

  if (msg.includes("fever")) {
    return res.json({ reply: "You may have viral infection. Drink water and rest." });
  }

  if (msg.includes("headache")) {
    return res.json({ reply: "Possible stress or dehydration. Take rest." });
  }

  if (msg.includes("chest pain")) {
    return res.json({ reply: "🚨 Emergency! Please go to hospital immediately." });
  }

  return res.json({ reply: "Please describe your symptoms clearly." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log("Server running on port " + PORT));
