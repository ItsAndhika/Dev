import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/User";

export const register = (req: Request, res: Response) => {
	const { username, password } = req.body;
	bcrypt.hash(password, 10, (error: any, hashedPassword: string) => {
		if (error) throw error;
		User.create({ username, password: hashedPassword });
		console.log("Successfuly created a new user!");
		res.status(200).json({ message: "Successfuly created a new user!" });
	});
};
