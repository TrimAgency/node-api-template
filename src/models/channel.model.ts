import * as mongoose from "mongoose";

export type ChannelModel = mongoose.Document & {
  slackId: string,
  name: string
};

const channelSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
}, { timestamps: true });

const Channel = mongoose.model("Channel", channelSchema);

export default Channel;