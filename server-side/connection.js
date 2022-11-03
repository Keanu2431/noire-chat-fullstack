const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@chat-app-proper-data.6v2i72e.mongodb.net/?retryWrites=true&w=majority`,
  () => {
    console.log("connected to DB");
  }
);
