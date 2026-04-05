require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;
const main = require("./src/config/db.js");

main()
    .then(() => app.listen(port, () => console.log("The app is listening on the port : ", port)))
    .catch(err => console.log(err));

