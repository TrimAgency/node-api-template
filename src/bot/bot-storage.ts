import { default as User, UserModel } from "../models/user.model";
import { default as Team, TeamModel } from "../models/team.model";
import { default as Channel, ChannelModel } from "../models/channel.model";
import * as mongoose from "mongoose";

export const botStorage = () => {
    // if (config) {
    //   console.log(config);
    // }

  const teamsDb = Team;
  const usersDb = User;
  const channelsDb = Channel;

  function findRecord(recordId: string, model: mongoose.Model<mongoose.Document>) {
    new Promise<mongoose.Document>((res, rej) => {
      model.findById(recordId, (err: any, doc: mongoose.Document) => {
        res(doc);
      });
    });
  }

  // TODO: Create other dynamic methods for the other required functions
  // function findRecord(recordId: string, model: mongoose.Model<mongoose.Document>) {
  //   new Promise<mongoose.Document>((res, rej) => {
  //     model.findById(recordId, (err: any, doc: mongoose.Document) => {
  //       res(doc);
  //     });
  //   });
  // }

  const storage = {
    teams: {
      get: async (teamId: string) => {
          const team = await findRecord(teamId, teamsDb);
          return team;
      },
      save: function(team: TeamModel) {
        // users_db.save(user.id, user, cb);
      },
    },
    users: {
      get: async (userId: string) => {
        const user = await findRecord(userId, usersDb);
        return user;
      }
    },
    channels: {
      get: async (channelId: string) => {
        const channel = await findRecord(channelId, channelsDb);
        return channel;
      }
    }
  };

  return storage;
};