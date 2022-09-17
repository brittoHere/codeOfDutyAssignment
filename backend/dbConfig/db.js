const mongoose = require("mongoose");
require("dotenv").config();

const db = async () => {
  try {
    const connectionParams = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
    await mongoose.connect(process.env.MONGO_DB, connectionParams);
    console.log("Connection to db success");
  } catch (error) {
    console.log("Could not connect to db ", error);
  }
};

module.exports = db;
