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
  bot: {
    name: { type: String },
    app_token: { type: String },
    createdBy: { type: String },
    user_id: { type: String },
    token: { type: String }
  },
}, { timestamps: true });

const Team = mongoose.model("Team", teamSchema);

export default Team;