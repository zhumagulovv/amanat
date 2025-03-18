import cors from "cors";
import express from "express";
import http from "http";
import morgan from "morgan";

import { webServerPort } from "../config/webServer.js";

import router from "../routes/router.js";
import { corsOptions } from "../middlewares/cors.middleware.js";

let httpServer;

function initialize() {
  return new Promise((resolve, reject) => {
    const app = express();

    app.use(express.json());
    app.use(cors(corsOptions));
    app.use(morgan("dev"));
    app.use(router);

    httpServer = http.createServer(app);

    app.get("/", (req, res) => {
      res.send("Hello world");
    });

    httpServer
      .listen(webServerPort.port)
      .on("listening", () => {
        console.log(`Web server listening on localhost: ${webServerPort.port}`);

        resolve();
      })
      .on("error", (err) => {
        reject(err);
      });
  });
}

export default initialize;

export function close() {
  return new Promise((resolve, reject) => {
    httpServer.close((err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve();
    });
  });
}

process.on("SIGINT", async () => {
  await close();
  process.exit(0);
});

process.on("SIGTERM", async () => {
  await close();
  process.exit(0);
});
