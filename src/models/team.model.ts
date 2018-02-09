import * as mongoose from "mongoose";

export type TeamModel = mongoose.Document & {
  slackId: string,
  name: string,
  url: string,
  createdBy: string
};

const teamSchema = new mongoose.Schema({
  slackId: { type: String, required: true },
  name: { type: String, required: true },
  url: { type: String, required: true },
  createdBy:  { type: String, required: true }
}, { timestamps: true });

const Team = mongoose.model("Team", teamSchema);

export default Team;