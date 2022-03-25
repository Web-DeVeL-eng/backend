const express = require("express");
// const req = require('express/lib/request');
// const res = require('express/lib/response');
const path = require("path");
const fs = require("fs");
// const { name } = require('pug/lib');

const main = express();
port = 80;

main.use("/static", express.static("stop"));

main.use(express.urlencoded());

main.set("view engine", "pug");

main.set("views", path.join(__dirname, "view"));

main.get("/", (req, res) => {
  // res.status(200).render('index', { title: 'Pug User', message: 'Hello there! Please Subscribe To My Channel #Perfect1.O' })
  const tec = "I Love Someone Who Actually Loves Me";
  const promt = { title: "Our Gym", content: tec };
  res.status(200).render("index.pug", promt);
});

main.post("/", (req, res) => {
  // console.log(req.body);
  name = req.body.name;
  age = req.body.age;
  gender = req.body.gender;
  address = req.body.address;
  more = req.body.more;

  let dataToWrite = `The Name Of The Customer is ${name}, ${age} years old, ${gender}, living at ${address}. More About Him/Her ${more}`;
  fs.writeFileSync("data.txt", dataToWrite);
  const promt = { message: "Your form is submitted successfully" };
  res.status(200).render("index.pug", promt);
});

main.listen(port, () => {
  console.log(`Hafeez is Listening Your Requests on port ${port}`);
});
