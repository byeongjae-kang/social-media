const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const authRoute = require("./routes/auth");
const usersRoute = require("./routes/users");
const postsRoute = require("./routes/posts");

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

app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/posts", postsRoute);




app.get("/", (req, res) => {
  res.send("welcome to homepage");
});

app.listen(8800, () => {
  console.log(`listening to port 8800`);
});
