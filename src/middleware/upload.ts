const util = require("util");
const GridFsStorage = require("multer-gridfs-storage");
const multer = require("multer");
import { config } from "../environment/config";

let storage = new GridFsStorage({
  url: config.database,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-galbd-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: "photos",
      filename: `${Date.now()}-galbd-${file.originalname}`,
    };
  },
});

let uploadFile = multer({ storage: storage }).single("file");
export const uploadFilesMiddleware = util.promisify(uploadFile);
