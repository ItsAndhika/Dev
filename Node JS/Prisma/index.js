import express from "express";
import cors from "cors";
import { PrismaClient } from "@prisma/client";
const app = express();
const PORT = 3000;

const prisma = new PrismaClient();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/", async (req, res) => {
	const users = await prisma.user.findMany();
	res.json(users);
});

app.post("/addUser", async (req, res) => {
	const newUser = await prisma.user.create({ data: req.body });
	res.json(newUser);
});

app.put("/editUser/:id", async (req, res) => {
	const id = req.params.id;
	const newAge = req.body.age;
	const updatedUser = await prisma.user.update({
		where: {
			id: parseInt(id),
		},
		data: { age: newAge },
	});
	res.json(updatedUser);
});

app.delete("/deleteUser/:id", async (req, res) => {
	const id = req.params.id;
	const deletedUser = await prisma.user.delete({
		where: {
			id: parseInt(id),
		},
	});
	res.json(deletedUser);
});

app.listen(PORT, () => {
	console.log(`Running on http://localhost:${PORT}`);
});
