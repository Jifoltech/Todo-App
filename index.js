const { application } = require("express");
const express = require("express");
const PORT = 8000;

// initialize App
const app = express();

// view engine
app.set("view engine", "ejs");

// listening to server
app.listen(PORT, () => {
  console.log(`server is running at port ${PORT}`);
});
