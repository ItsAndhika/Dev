import { Request, Response } from "express";
import { Message } from "../models/message.model";

export const getAllMessage = async (req: Request, res: Response) => {
	try {
		const message = await Message.find();
		res.json(message);
	} catch (error) {
		console.error(error);
	}
};
