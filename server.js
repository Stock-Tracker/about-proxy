const express = require("express");
const app = express();
const path = require("path");
const fetch = require("node-fetch");

const port = 3334;

app.use(express.static(__dirname + "/client"));

app.get("/price/:ticker", (req, res) => {
  //console.log("req", req.params.ticker);
  fetch(
    `src="http://ec2-34-238-120-158.compute-1.amazonaws.com:4444/price/${req.params.ticker}`
  )
    .then(result => {
      //console.lo'result from fetch'h", result);
      return result.json();
    })
    .then(result => {
      //console.'second result'ult", result);
      res.send(result);
    });
});

app.get("/about/:ticker", (req, res) => {
  //console.log("req", req.params.ticker);
  fetch(
    `http://ec2-52-53-207-250.us-west-1.compute.amazonaws.com:3333/about/${req.params.ticker}`
  )
    .then(result => {
      //console.log("result from fetch", result);
      return result.json();
    })
    .then(result => {
      //console.log("second result", result);
      res.send(result);
    });
});

app.get("/people-also-bought/:ticker", (req, res) => {
  //console.log("req", req.params.ticker);
  fetch(
    `http://ec2-34-238-120-158.compute-1.amazonaws.com:4550/people-also-bought/${req.params.ticker}`
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
