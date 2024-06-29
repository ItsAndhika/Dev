import express, { Application, Request, Response } from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
const app: Application = express();
const PORT: number = 3000;

app.use(cors());

const server = http.createServer(app);
const io = new Server(server, {
	cors: {
		origin: "http://localhost:5173",
		methods: ["GET", "POST"],
	},
});

io.on("connection", (socket) => {
	console.log(`User connected : ${socket.id}`);

	socket.on("join_room", (data) => {
		socket.join(data);
		console.log(`User with id ${socket.id} joined room ${data}`);
	});

	socket.on("send_message", (data) => {
		socket.to(data.room).emit("received_message", data);
	});

	socket.on("disconnect", () => {
		console.log("User Disconnected", socket.id);
	});
});

server.listen(PORT, () => {
	console.log(`Running on http://localhost:${PORT}`);
});
