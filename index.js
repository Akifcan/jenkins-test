const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.json({ hello: "all" });
});

app.listen(3000);
console.log("LISTEN ON 3000");
