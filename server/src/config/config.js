import dotenv from "dotenv-flow";

dotenv.config();

const config = {
  appName: process.env.APP_NAME || "Amanat",
  development: process.env.NODE_ENV || "demvelopment",
  port: process.env.PORT || 4200,
  dbURL:
    process.env.DB_URL ||
    "mongodb+srv://zhakyp-dev:admin-dev12@cluster0.ifcri.mongodb.net/amanat-server",
};

export default config;
