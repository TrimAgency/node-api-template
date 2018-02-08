import { default as User, UserModel } from "../models/user.model";
import { default as Team, TeamModel } from "../models/team.model";
import { default as Channel, ChannelModel } from "../models/channel.model";
import * as mongoose from "mongoose";

// Custom bot storage set-up
export const botStorage = () => {
  // Confirm if needed
  // In the argument, config = {}
  // if (config) {
  //   console.log(config);
  //   // config = {
  //   //   path: "./",
  //   // };
  // }

  const teamsDb = Team;
  const usersDb = User;
  const channelsDb = Channel;

  function findRecord(recordId: string, model: mongoose.Model<mongoose.Document>) {
    new Promise<mongoose.Document>((res, rej) => {
      model.findById(recordId, (err: any, doc: mongoose.Document) => {
        if (err) rej(err);
        res(doc);
      });
    });
  }

  function saveRecord(modelData: mongoose.Document,
                      model: mongoose.Model<mongoose.Document>) {
    new Promise<mongoose.Document>((res, rej) => {
      model.create(modelData, (err: any, doc: mongoose.Document) => {
        if (err) rej(err);
        res(doc);
      });
    });
  }

  function deleteRecord(recordId: string, model: mongoose.Model<mongoose.Document>) {
    new Promise((res, rej) => {
      model.remove(recordId, (err: any) => {
        if (err) rej(err);
        res({ message: "Deleted" });
      });
    });
  }

  function allRecords(model: mongoose.Model<mongoose.Document>) {
    new Promise<mongoose.Document[]>((res, rej) => {
      model.find({}, (err: any, docs: mongoose.Document[]) => {
        if (err) rej(err);
        res(docs);
      });
    });
  }



  const storage = {
    teams: {
      get: async (teamId: string) => {
        try {
          const team = await findRecord(teamId, teamsDb);
          return team;
        } catch (error) {
          error;
        }
      },
      save: async (teamData: TeamModel) => {
        try {
          const newTeam = await saveRecord(teamData, teamsDb);
          return newTeam;
        } catch (error) {
          error;
        }
      },
      delete: async (teamId: string) => {
        try {
          const deletedTeam = await deleteRecord(teamId, teamsDb);
          return deletedTeam;
        } catch (error) {
          error;
        }
      },
      all: async () => {
        try {
          const allTeams = await allRecords(teamsDb);
          return allTeams;
        } catch (error) {
          error;
        }
      }
    },
    users: {
      get: async (userId: string) => {
        try {
          const user = await findRecord(userId, usersDb);
          return user;
        } catch (error) {
          error;
        }
      },
      save: async (userData: UserModel) => {
        try {
          const newUser = await saveRecord(userData, usersDb);
          return newUser;
        } catch (error) {
          error;
        }
      },
      delete: async (userId: string) => {
        try {
          const deletedUser = await deleteRecord(userId, usersDb);
          return deletedUser;
        } catch (error) {
          error;
        }
      },
      all: async () => {
        try {
          const allUsers = await allRecords(usersDb);
          return allUsers;
        } catch (error) {
          error;
        }
      }
    },
    channels: {
      get: async (channelId: string) => {
        try {
          const channel = await findRecord(channelId, channelsDb);
          return channel;
        } catch (error) {
          error;
        }
      },
      save: async (channelData: ChannelModel) => {
        try {
          const newChannel = await saveRecord(channelData, channelsDb);
          return newChannel;
        } catch (error) {
          error;
        }
     },
     delete: async (channelId: string) => {
      try {
        const deletedChannel = await deleteRecord(channelId, channelsDb);
        return deletedChannel;
      } catch (error) {
        error;
      }
     },
     all: async () => {
      try {
        const allChannels = await allRecords(channelsDb);
        return allChannels;
      } catch (error) {
        error;
      }
    }
    }
  };

  return storage;
};