import express, { IRouter } from "express";
import { profile } from "../controllers/profile.controller";
const profileRouter: IRouter = express.Router();

profileRouter.get("/", profile);

export default profileRouter;
