import { config } from "../environment/config";
import { gfs } from "..";
import { v4 as uuid } from "uuid";

const express = require("express");
const router = express.Router();

const GridFsStorage = require("multer-gridfs-storage");
const multer = require("multer");

const storage = new GridFsStorage({
  url: config.database,
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];
    let imageID: string = uuid();

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `galbd-${imageID}.png`;
      return filename;
    }

    return {
      bucketName: "images",
      filename: `galbd-${imageID}.png`,
    };
  },
});

const upload = multer({ storage });

router.post("/upload", upload.single("file"), (req, res) => {
  if (req.file == undefined) {
    return res.send({ success: false, massage: "You must select an image" });
  }

  return res.send({
    success: true,
    imageUri: `/api/images/${req.file.filename}`,
  });
});

router.get("/:filename", (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    // Check if file
    if (!file || file.length === 0) {
      return res.status(404).json({
        err: "No file exists",
      });
    }
    // If File exists this will get executed
    const readstream = gfs.createReadStream(file.filename);
    return readstream.pipe(res);
  });
});

module.exports = router;
