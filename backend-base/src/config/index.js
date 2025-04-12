import mongoose from "mongoose";
import { DB_NAME } from "../constant/index.js";

const connection_DB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}${DB_NAME}`
    );
    console.log(
      `MongoDb Connected !! DB HOST:${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("🚀 ~ connectionDB ~ error:", error);
    process.exit(1);
  }
};

export default connection_DB;