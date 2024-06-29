import express from "express";
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", async (req, res) => {
	try {
		const response = await fetch("https://bored-api.appbrewery.com/random");
		const result = await response.json();
		res.render("index", {
			data: result,
		});
	} catch (error) {
		console.error(`Failed to make request : ${error.message}`);
		res.render("index", {
			error: error.message,
		});
	}
});

app.listen(PORT, () => {
	console.log(`Running on http://localhost:${PORT}`);
});
