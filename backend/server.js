const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connection = require("./dbConfig/db");
const taskRoute = require("./routes/taskRoute");
const calculateRoute = require("./routes/calculateRoute");
const port = process.env.PORT || 8000;

connection();

app.use(express.json());
app.use(cors());

app.use("/api/todo", taskRoute);

app.use("/api/calculate", calculateRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
