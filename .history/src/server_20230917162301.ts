import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
let app: express.Application;
function initServer() {
  app = express();
app.use{morgan("dev")}
initRoute()
}

function connectDb() {}
function initRoute() {
    app.get("/",(req:Request,res:Response,next)=>{})
}
