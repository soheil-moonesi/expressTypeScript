import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import { homeHandler } from "./handler/home.handler";
let app: express.Application;
function initServer() {
  app = express();
app.use{morgan("dev")}
initRoute()
const port
app.listen()
}

function connectDb() {}
function initRoute() {
app.get("/",homeHandler)
    
}
