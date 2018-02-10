// import { default as User, UserModel } from "../models/user.model";
// import { default as Team, TeamModel } from "../models/team.model";
// import { default as Channel, ChannelModel } from "../models/channel.model";
// import * as mongoose from "mongoose";

// // Custom bot storage set-up
// // TODO: ISSUE: Compiling Error for results of bot-storage with what is needed in the botOptions of the bot file
// export const botStorage = (config = {}) => {
//   // TODO: Confirm if needed. Console logs an empty object
//   // In the argument, config = {}
//   if (config) {
//     console.log("**THIS IS THE CONFIG**", config);
//     // config = {
//     //   path: "./",
//     // };
//   }

//   const teamsDb = Team;
//   const usersDb = User;
//   const channelsDb = Channel;

//   function findRecord(recordId: string, model: mongoose.Model<mongoose.Document>) {
//     console.log("***RECORD ID IN FINDRECORD IS***:", recordId);
//     return new Promise<mongoose.Document>((res, rej) => {
//       model.findOne({ slackId: recordId }, (err: any, doc: mongoose.Document) => {
//         console.log("***SEARCHING FOR THE TEAM IN FINDRECORD METHOD ***", doc);
//         if (err) {
//           console.log("***THERE WAS AN ERROR FINDING THE TEAM IN THE FINDRECORD METHOD***", err);
//           rej(err);
//         } else if (!doc) {
//           rej(new Error("Unable to find team record in findrecord method"));
//         } else {
//           res(doc);
//           console.log("***WE FOUND A TEAM IN THE DB!***", doc);
//         }
//       });
//     });
//   }

//   function saveRecord(modelData: mongoose.Document,
//                       model: mongoose.Model<mongoose.Document>) {
//     return new Promise<mongoose.Document>((res, rej) => {
//       model.create(modelData, (err: any, doc: mongoose.Document) => {
//         if (err) { rej(err); }
//         res(doc);
//       });
//     });
//   }

//   function deleteRecord(recordId: string, model: mongoose.Model<mongoose.Document>) {
//     return new Promise((res, rej) => {
//       model.remove({ slackId: recordId }, (err: any) => {
//         if (err) { rej(err); }
//         res({ message: "Deleted" });
//       });
//     });
//   }

//   function allRecords(model: mongoose.Model<mongoose.Document>) {
//     return new Promise<mongoose.Document[]>((res, rej) => {
//       model.find({}, (err: any, docs: mongoose.Document[]) => {
//         if (err) { rej(err); }
//         res(docs);
//       });
//     });
//   }

//   const storage = {
//     teams:  {
//       get: async (teamId: string) => {
//         try {
//           const team = await findRecord(teamId, teamsDb);
//           console.log("***LAST MESSAGE: THE FIND RECORD METHOD RETURNED A TEAM:***", team);
//           return team;
//         } catch (error) {
//           error;
//           // TODO: We need this error to go up to team registration. Error is caught here, and team registration does not continue
//           console.log("****LAST MESSAGE ERROR: THERE WAS AN ERROR IN THE FINDRECORD METHOD:****", error);
//         }
//       },
//       save: async (teamData: TeamModel) => {
//         console.log("**GOING TO SAVE A NEW TEAM***:", teamData);
//         try {
//           const newTeam = await saveRecord(teamData, teamsDb);
//           console.log("**NEW TEAM SAVED!**:", newTeam);
//           return newTeam;
//         } catch (error) {
//           error;
//           console.log("**COULD NOT SAVE NEW TEAM**:", error);
//         }
//       },
//       delete: async (teamId: string) => {
//         try {
//           const deletedTeam = await deleteRecord(teamId, teamsDb);
//           return deletedTeam;
//         } catch (error) {
//           error;
//         }
//       },
//       all: async () => {
//         try {
//           const allTeams = await allRecords(teamsDb);
//           return allTeams;
//         } catch (error) {
//           error;
//         }
//       }
//     },
//     users: {
//       get: async (userId: string) => {
//         try {
//           const user = await findRecord(userId, usersDb);
//           return user;
//         } catch (error) {
//           error;
//         }
//       },
//       save: async (userData: UserModel) => {
//         try {
//           const newUser = await saveRecord(userData, usersDb);
//           return newUser;
//         } catch (error) {
//           error;
//         }
//       },
//       delete: async (userId: string) => {
//         try {
//           const deletedUser = await deleteRecord(userId, usersDb);
//           return deletedUser;
//         } catch (error) {
//           error;
//         }
//       },
//       all: async () => {
//         try {
//           const allUsers = await allRecords(usersDb);
//           return allUsers;
//         } catch (error) {
//           error;
//         }
//       }
//     },
//     channels: {
//       get: async (channelId: string) => {
//         try {
//           const channel = await findRecord(channelId, channelsDb);
//           return channel;
//         } catch (error) {
//           error;
//         }
//       },
//       save: async (channelData: ChannelModel) => {
//         try {
//           const newChannel = await saveRecord(channelData, channelsDb);
//           return newChannel;
//         } catch (error) {
//           error;
//         }
//      },
//      delete: async (channelId: string) => {
//       try {
//         const deletedChannel = await deleteRecord(channelId, channelsDb);
//         return deletedChannel;
//       } catch (error) {
//         error;
//       }
//      },
//      all: async () => {
//       try {
//         const allChannels = await allRecords(channelsDb);
//         return allChannels;
//       } catch (error) {
//         error;
//       }
//     }
//     }
//   };

//   return storage;
// };