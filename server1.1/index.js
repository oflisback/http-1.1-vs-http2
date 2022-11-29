const express = require("express");
const cors = require("cors");
const nocache = require("nocache");

const app = express();
app.use(cors());
app.use(nocache());

app.get("/ping", (_, res) => {
  res.send("pong!");
});

app.get("/delay", (_, res) => {
  setTimeout(() => res.send("42"), 5000);
});

const port = 3011;
app.listen(port, () => {
  console.log(`HTTP 1.1 server listening on port ${port}`);
});
