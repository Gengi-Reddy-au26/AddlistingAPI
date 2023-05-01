const express = require('express');
const app = express();

const cors = require('cors');
var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }
  app.use(cors(corsOptions));

const dotenv = require('dotenv');
dotenv.config();

const { initDB } = require('./dbConfig');
initDB();

const userRouter = require('./routes/userRouter');

app.use(express.json());
app.use(express.urlencoded());

const PORT = 8000;

app.use('/users', userRouter);

app.listen(PORT, () => {
    console.log(`server connected successfully on ${PORT}`)
})


