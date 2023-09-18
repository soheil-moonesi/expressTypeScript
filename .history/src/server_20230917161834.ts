import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
let app: express.Application;
function initServer() {
  app = express();
app.use{morgan}
}

function connectDb() {}
function initRoute() {}
