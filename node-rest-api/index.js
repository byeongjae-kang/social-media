const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const usersRoute = require("./routes/users");
const authRoute = require("./routes/auth");

dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  () => {
    console.log("connected to MongoDB");
  }
);

//middleware

app.use(express.json());
app.use(helmet());
app.use(morgan("dev"));

app.use("/api/users", usersRoute);
app.use("/api/auth", authRoute);




app.get("/", (req, res) => {
  res.send("welcome to homepage");
});

app.listen(8800, () => {
  console.log(`listening to port 8800`);
});
