import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

console.log("-----", process.env.MONGODB_URI);

const connectDb = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MOongoDb connected !! Db Host : ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONGO DB coonection error", error);
    process.exit(1);
  }
};

export default connectDb;
