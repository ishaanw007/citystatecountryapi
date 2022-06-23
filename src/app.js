const express = require("express");
require("./db/conn");
const app = express();
const port = process.env.PORT || 8000;
const model = require("./db/model/schema");
var url = require("url");
const { query } = require("express");

app.use(express.json());

//country
app.get("/", async (req, res) => {
  try {
    let query = req.query;
    const data = await model.find(query, "name");
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

// get all the states in the country
app.get("/states/", async (req, res) => {
  try {
    let query = req.query;
    const data = await model.find(query, "states.name");

    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

//get all the cities of a state
app.get("/cities/", async (req, res) => {
  try {
    let obj = req.query;
    let key = Object.keys(obj)[0];
    let value = Object.values(obj)[0];
    let search = "";
    search = `states.${key}`;
    const data = await model.findOne(
      { [search]: value },
      { "states.cities.name.$": 1 }
    );

    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
app.listen(port, () => {
  console.log("connection sucessfull");
});
