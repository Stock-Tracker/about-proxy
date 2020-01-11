const express = require("express");
const app = express();
const path = require("path");
const fetch = require("node-fetch");

const port = 3334;

app.use(express.static(__dirname + "/client"));

app.get("/price/:ticker", (req, res) => {
  fetch(
    `src="http://ec2-54-88-251-88.compute-1.amazonaws.com:4444/price/${req.params.ticker}`
  )
    .then(result => {
      return result.json();
    })
    .then(result => {
      res.send(result);
    });
});

app.get("/about/:ticker", (req, res) => {
  fetch(
    `http://ec2-54-215-175-243.us-west-1.compute.amazonaws.com:3333/about/${req.params.ticker}`
  )
    .then(result => {
      return result.json();
    })
    .then(result => {
      res.send(result);
    });
});

app.get("/people-also-bought/:ticker", (req, res) => {
  fetch(
    `http://ec2-54-88-251-88.compute-1.amazonaws.com:4550/people-also-bought/${req.params.ticker}`
  )
    .then(result => {
      console.log("result from fetch", result);
      return result.json();
    })
    .then(result => {
      console.log("second result", result);
      res.send(result);
    });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
