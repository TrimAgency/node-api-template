import { default as user, UserModel } from "../models/user.model";
import { default as team, TeamModel } from "../models/team.model";
import { default as channel, ChannelModel } from "../models/channel.model";
import { Storage, User, Team, Channel } from "botkit";
import * as mongoose from "mongoose";

// Custom bot storage set-up
export const botStorage = (config = {}) => {
  if (config) {
    console.log("**THIS IS THE CONFIG**", config);
  }

  const teamModel = team;
  const userModel = user;
  const channelModel = channel;

  function findRecord(recordId: string, model: mongoose.Model<mongoose.Document>, cb: any) {
      model.findOne({ slackId: recordId }, cb);
  }

  function saveRecord(modelData: mongoose.Document,
                      model: mongoose.Model<mongoose.Document>,
                      cb: any
                     ) {
      model.create(modelData, cb);
  }

  function deleteRecord(recordId: string, model: mongoose.Model<mongoose.Document>, cb: any) {
      model.remove({ slackId: recordId }, cb);
  }

  function allRecords(model: mongoose.Model<mongoose.Document>, cb: any) {
      model.find({}, cb);
  }

  const storage = {
    teams: <Storage<Team>> {
      get:  (teamId: string, cb: any) => {
        return findRecord(teamId, teamModel, cb);
      },
      save: (teamData: TeamModel, cb: any) => {
        return saveRecord(teamData, teamModel, cb);
      },
      delete: (teamId: string, cb: any) => {
        return deleteRecord(teamId, teamModel, cb);
      },
      all: (cb: any) => {
        return allRecords(teamModel, cb);
      }
    },
    users: <Storage<User>> {
      get:  (teamId: string, cb: any) => {
        return findRecord(teamId, userModel, cb);
      },
      save: (userData: UserModel, cb: any) => {
        return saveRecord(userData, userModel, cb);
      },
      delete: (userId: string, cb: any) => {
        return deleteRecord(userId, userModel, cb);
      },
      all: (cb: any) => {
        return allRecords(userModel, cb);
      }
    },
    channels: <Storage<Channel>> {
      get:  (channelId: string, cb: any) => {
        return findRecord(channelId, channelModel, cb);
      },
      save: (channelData: ChannelModel, cb: any) => {
        return saveRecord(channelData, channelModel, cb);
      },
      delete: (channelId: string, cb: any) => {
        return deleteRecord(channelId, channelModel, cb);
      },
      all: (cb: any) => {
        return allRecords(channelModel, cb);
      }
    }
  };

  return storage;
};