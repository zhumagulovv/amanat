import mongoose from "mongoose";
import dotenv from "dotenv";
import config from "./config";

dotenv.config();

export const connectDB = async () => {
  try {
    await mongoose.connect(config.dbURL);
    console.log("Connected to db");
  } catch (error) {
    console.log(error);
  }
};
