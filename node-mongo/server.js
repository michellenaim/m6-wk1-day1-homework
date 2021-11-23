const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
require("./app/models/inventory.model.js");

require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection
  .on("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.log(`Conntection error: ${err.message}`);
  });

require("./app/routes/inventory.router.js");

const server = app.listen(8080, function () {
  const host = server.address().address;
  const port = server.address().port;

  console.log("App is listening at http://%s:%s", host, port);
});
