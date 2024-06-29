import express, { Application } from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import registerRouter from "./router/register.router";
import loginRouter from "./router/login.router";
import profileRouter from "./router/profile.router";
import "./database/index";

const app: Application = express();
const PORT: number = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use("/register", registerRouter);
app.use("/login", loginRouter);
app.use("/profile", profileRouter);

app.listen(PORT, () => {
	console.log(`Running on http://localhost:${PORT}`);
});
