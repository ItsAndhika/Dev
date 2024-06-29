import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postsRouter from "./routes/posts.router.js";
const app = express();
const PORT = 5000;

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postsRouter);

app.listen(PORT, () => {
	console.log(`Running on http://localhost:${PORT}`);
});
