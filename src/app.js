const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.send("get api health is good");
});
app.get("/fit", (req, res) => {
  res.send("get api fitnes is good");
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
