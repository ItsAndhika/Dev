import express from "express";
import path from "path";
import { fileURLToPath } from "url";
const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/views/signup.html`);
});
app.post("/", (req, res) => {
    const { firstName, lastName, email } = req.body;
    console.log(firstName, lastName, email);
});
app.use("/", (req, res, next) => {
    res.send(`<h1>Are you lost?</h1>
    <h2>404 Not Found!</h2>
    <a href="/">Back to home page</a>`);
    next();
});
app.listen(PORT, () => {
    console.log(`Running on http://localhost:${3000}`);
});
//# sourceMappingURL=app.js.map