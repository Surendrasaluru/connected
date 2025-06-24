const express = require("express");
const app = express();

app.get("/health", (req, res) => {
  res.send("get api health is good");
});
app.use(
  "/user",
  (req, res, next) => {
    //res.send("response from user route");
    next();
  },
  (req, res) => {
    res.send("2nd response from user route");
  }
);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
