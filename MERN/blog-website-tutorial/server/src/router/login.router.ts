import express, { IRouter } from "express";
import { login } from "../controllers/login.controller";
const loginRouter: IRouter = express.Router();

loginRouter.post("/", login);

export default loginRouter;
