import { connect } from "mongoose";

export const startConnection = async ({ uri, database }) => {
  try {
    const db = await connect(uri, {
      dbName: database,
    });
    console.log(`DB is connected to ${db.connection.name}`);
  } catch (error) {
    console.log(error);
  }
};
