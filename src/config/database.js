const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://surendrasaluru:surendrad27@cluster0.mactntu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
};

connectDB()
  .then(() => {
    console.log("db connection succesfull");
  })
  .catch((err) => {
    console.error("db connenction failed" + err.message);
  });

module.exports=connectDB;