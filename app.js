const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();

app.use("/", routes);

const db = require("./models/db");

db.sync().then(function() {
  app.listen(3001, function() {
    console.log("Server is listening on port 3001!");
  });
});
