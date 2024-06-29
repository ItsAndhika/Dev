import { Request, Response } from "express";
import { User } from "../models/user.model";

export const getUsers = async (req: Request, res: Response) => {
	try {
		const users = await User.find();
		res.json(users);
	} catch (error) {
		console.error(error);
	}
};
