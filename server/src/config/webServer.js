import dotenv from "dotenv";
dotenv.config();

export const webServerPort = {
  port: process.env.PORT || 4200,
};
