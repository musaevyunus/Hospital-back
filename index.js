const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(cors());
app.use(require("./routes/doctor.route"));
app.use(require('./routes/speciality.route'))
app.use(morgan("dev"));
app.use(express.static(__dirname + "/assets/img"));
app.use(express.json());

const { PORT, MONGO_SERVER } = process.env;

const connectAndStartServer = async () => {
  try {
    await mongoose.connect(MONGO_SERVER);
    app.listen(PORT, () => {
      console.log(`Server started: http://localhost:${PORT}/`);
    });
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

connectAndStartServer();
