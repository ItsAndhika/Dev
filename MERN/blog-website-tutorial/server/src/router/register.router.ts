import express, { IRouter } from "express";
import { register } from "../controllers/register.controller";
const registerRouter: IRouter = express.Router();

registerRouter.post("/", register);

export default registerRouter;
