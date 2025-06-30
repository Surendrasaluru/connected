const express = require("express");
const app = express();
const connectDB = require("./config/database");

app.get("/health", (req, res) => {
  res.send("get api health is good");
});
app.use("/user", (req, res, next) => {
  res.send("response from user route");
  next();
});
connectDB()
  .then(() => {
    console.log("db connection succesfull");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch((err) => {
    console.error("db connenction failed" + err.message);
  });
