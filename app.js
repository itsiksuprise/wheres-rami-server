const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
app.use(cors());

let status = "לא";

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/status", (req, res) => {
  res.send({
    status: getStatus(),
  });
});

app.post("/status/:new", (req, res) => {
  changeStatus(req.params.new);
  res.status(200).send();
});

const changeStatus = (newVal) => {
  console.log("new status is " + newVal);
  status = newVal;
};

const getStatus = () => {
  return status;
};

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
