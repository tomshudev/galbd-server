import { getAllMisions, getMissionById, editMission } from "../models/mission";
import { uploadFilesMiddleware } from "../middleware/upload";
const multer = require("multer");

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  getAllMisions().then(
    (missions) => {
      res.json({ success: true, missions });
    },
    (err) => {
      res.json({
        success: false,
        message: `Failed to load all missions. Error: ${err}`,
      });
    }
  );
});

router.get("/getMissionById/:id", (req, res) => {
  getMissionById(req.params.id).then(
    (mission) => {
      res.json({ success: true, mission: mission });
    },
    (err) => {
      res.json({
        success: false,
        message: `Failed to fetch mission. Error: ${err}`,
      });
    }
  );
});

router.get("/solved", (req, res) => {
  getAllMisions().then(
    (missions) => {
      let solved = missions.filter((mission) => mission.isSolved);

      res.json({ success: true, missions: solved });
    },
    (err) => {
      res.json({
        success: false,
        message: `Failed to fetch solved missions. Error: ${err}`,
      });
    }
  );
});

String.prototype["replaceAt"] = function (index, replacement) {
  return (
    this.substr(0, index) +
    replacement +
    this.substr(index + replacement.length)
  );
};

router.get("/currProgress", (req, res) => {
  let nz: any = "__.______,__.______";

  getAllMisions().then((missions) => {
    let solved = missions.filter((mission) => mission.isSolved);

    solved.forEach((mission) => {
      nz = nz.replaceAt(mission.digitPrizeLocation, mission.digitPrizeValue);
    });

    res.json({ success: true, currentProgress: nz });
  });
});

router.post("/missionSolved", (req, res) => {
  getMissionById(req.body.id).then((mission) => {
    let newMission = {
      ...mission._doc,
      isSolved: true,
    };

    updateMission(newMission, res);
  });
});

router.post("/sendMissionForAproval", (req, res) => {
  updateApprovalStatus(req.body.id, false, res);
});

router.post("/approve", (req, res) => {
  updateApprovalStatus(req.body.id, req.body.isApproved, res);
});

function updateApprovalStatus(id: string, isApproved: boolean, res) {
  getMissionById(id).then((mission) => {
    let newMission = {
      ...mission._doc,
      isApproved: isApproved,
      isSolved: isApproved,
    };

    updateMission(newMission, res);
  });
}

function updateMission(mission, res) {
  editMission(mission).then(
    (newMission) => {
      res.json({
        success: true,
        message: `Mission was updated successfully.`,
      });
    },
    (err) => {
      res.json({
        success: false,
        message: `Failed to update mission. Error: ${err}`,
      });
    }
  );
}

module.exports = router;
