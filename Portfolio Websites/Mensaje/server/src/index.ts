import express, { Application } from "express";
import http from "http";
import "./utils/database";
import { Server } from "socket.io";
import cors from "cors";
import userRouter from "./router/user.router";
import messageRouter from "./router/message.router";
const app: Application = express();
const server = http.createServer(app);
const PORT: number = 3000;

app.use(cors());
app.use("/api/user", userRouter);
app.use("/api/message", messageRouter);

const io = new Server(server, {
	cors: {
		origin: "http://localhost:5173",
		methods: ["GET", "POST"],
	},
});

io.on("connection", (socket) => {
	console.log(`User connected in: ${socket.id}`);

	socket.on("message_send", (data) => {
		console.log(data);
	});
});

server.listen(PORT, () => {
	console.log(`Running on http://localhost:${PORT}`);
});
