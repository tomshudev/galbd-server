import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";
import * as morgan from "morgan";
import { config } from "./environment/config";
import { initData } from "./models/init-data";
const Grid = require("gridfs-stream");
const app = express();
const missions = require("./routes/missions");
const images = require("./routes/images");

export let gfs;

// Connect mongoose to our database
mongoose.connect(config.database, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Connected to DB!");
  gfs = Grid(db.db, mongoose.mongo);
  gfs.collection("images");
});

// Middleware for CORS
app.use(cors());

// Middleware for bodyparsing using both json and urlencoding
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

initData();

app.use("/api/images", images);
app.use("/api/missions", missions);

app.listen(config.port, () => {
  console.log(`GalBD server listening at http://localhost:${config.port}`);
});
