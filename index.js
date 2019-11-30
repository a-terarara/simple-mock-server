const express = require("express");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => res.json({ test: "test" }));
app.get("/user", (req, res) => res.json({ id: "testid", name: "tester" }));
app.get("/countries/:id", (req, res) => {
  const { id } = req.params;
  const countriesJSONString = fs.readFileSync("./static/countries.json", {
    encoding: "utf-8"
  });
  const countries = JSON.parse(countriesJSONString);

  return res.json(countries.find(c => c.id === id));
});

app.listen(3000);
module.exports = app;
