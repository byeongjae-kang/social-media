const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

dotenv.config();

mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('connected to MongoDB')
})

//middleware

app.use(express.json());
app.use(helmet())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('welcome to homepage');
})
app.get('/users', (req, res) => {
  res.send('welcome to user page');
})



app.listen(8800, () => {
  console.log(`listening to port 8800`);
});
