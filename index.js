const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(cors());
const PORT = 5000;

// Seting up the static directory
app.use(express.static(path.join(__dirname, "public")));

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "public/index.html"))
);

app.listen(PORT, () => console.log(`Server Started on port ${PORT}`));
