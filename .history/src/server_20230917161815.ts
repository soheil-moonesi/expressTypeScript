import express, { Request, Response, NextFunction } from "express";
let app: express.Application;
function initServer() {
  app = express();
app.use{morgan}
}

function connectDb() {}
function initRoute() {}
