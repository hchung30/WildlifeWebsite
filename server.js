const express = require("express");
const app = express();
const path = require("path");
//components

const HTTP_PORT = process.env.PORT || 8080;

const onHttpStart = () => {
  console.log("Express http server listening on: " + HTTP_PORT);
};

app.use(express.static(path.join(__dirname, "/src")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/src/home.html"));
});

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(HTTP_PORT, onHttpStart);
