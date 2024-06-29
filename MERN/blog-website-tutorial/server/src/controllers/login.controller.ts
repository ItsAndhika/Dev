import { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { User } from "../models/User";

const secretSalt: string =
	"skrc928ec8239uqwiocrh2qwieakcew29r832qcojwiekalkjaaomiCLHKFWJRE";

export const login = async (req: Request, res: Response) => {
	const { username, password } = req.body;
	const user = await User.findOne({ username });
	if (user !== null) {
		bcrypt.compare(password, user.password, (error, isMatch) => {
			if (error) throw error;
			if (isMatch) {
				jwt.sign({ id: user._id, username }, secretSalt, {}, (error, token) => {
					if (error) throw error;
					res.status(200).cookie("token", token).json("OK");
				});
			} else {
				res.status(400).json("Wrong credentials");
			}
		});
	}
};
