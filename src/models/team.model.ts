import * as mongoose from "mongoose";

export type TeamModel = mongoose.Document & {
  slackId: string,
  name: string,
  url: string,
  createdBy: string,
  bot: object
};

const teamSchema = new mongoose.Schema({
  slackId: { type: String, required: true },
  name: { type: String, required: true },
  url: { type: String, required: true },
  createdBy:  { type: String, required: true },
  bot: { type: Object, required: true, select: false },
}, { timestamps: true });

const Team = mongoose.model("Team", teamSchema);

export default Team;