import express, { Router } from "express";
import { getAllMessage } from "../controllers/message.controller";
const messageRouter: Router = express.Router();

messageRouter.get("/", getAllMessage);

export default messageRouter;
