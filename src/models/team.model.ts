import * as mongoose from "mongoose";

export type TeamModel = mongoose.Document & {
  id: string,
  name: string,
  url: string
};

const teamSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  url: { type: String, required: true },
}, { timestamps: true });

const Team = mongoose.model("Team", teamSchema);

export default Team;