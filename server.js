require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const knex = require("knex")
const knexfile = require('./knexfile');

const app = express();
app.db_prod = knex(knexfile.production);

const apiRouter = require("./api/routes/apiRouter");
let port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/app", express.static(path.join(__dirname, "/public")));
app.use('/api', apiRouter);
app.listen(port);
