import * as mongoose from "mongoose";
import { Schema } from "mongoose";

const missionSchema = new Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  type: { type: String, required: true },
  explanation: { type: String, required: true },
  isSolved: { type: Boolean },
  data: { type: Object, required: true },
  digitPrizeValue: { type: String, required: true },
  digitPrizeLocation: { type: Number, required: true },
  doesMissionNeedsApproval: { type: Boolean, required: false },
  isApproved: { type: Boolean, required: false },
});

export const missionModel = mongoose.model("Mission", missionSchema);

export function getAllMisions(): Promise<any> {
  return missionModel.find().exec();
}

export function editMission(mission): Promise<any> {
  return missionModel
    .findOneAndUpdate({ id: mission.id }, mission, {
      upsert: true,
      new: true,
      runValidators: true,
    })
    .exec();
}

export function getMissionById(id: string): Promise<any> {
  let query = { id: id };
  return missionModel.findOne(query).exec();
}
