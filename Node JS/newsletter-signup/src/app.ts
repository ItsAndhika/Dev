import express, { Express, Request, Response, NextFunction } from "express";
import path from "path";
import { fileURLToPath } from "url";
const app: Express = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT: number = 3000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.get("/", (req: Request, res: Response): void => {
	res.sendFile(`${__dirname}/views/signup.html`);
});

app.post("/", (req: Request, res: Response): void => {
	const { firstName, lastName, email } = req.body;
	console.log(firstName, lastName, email);
});

app.use("/", (req: Request, res: Response, next: NextFunction) => {
	res.send(`<h1>Are you lost?</h1>
    <h2>404 Not Found!</h2>
    <a href="/">Back to home page</a>`);
	next();
});

app.listen(PORT, () => {
	console.log(`Running on http://localhost:${3000}`);
});
