import express, { Request, Response, NextFunction } from "express";
import morgan from "morgan";
import { homeHandler } from "./handler/home.handler";
let app: express.Application;
function initServer() {
  app = express();
app.use{morgan("dev")}
initRoute()
const port = process.env.PORT || 3000;
app.listen(port,()=>{console.log("app start")})
}

function connectDb() {}
function initRoute() {
app.get("/",homeHandler)
    
}
