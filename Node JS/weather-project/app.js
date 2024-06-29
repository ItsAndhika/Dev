import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import https from "https";
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
	res.sendFile(`${__dirname}/index.html`);
});

app.post("/", (req, res) => {
	const city = req.body.city;
	const APIKey = "8099fff50fdd7b3fda16dd518988434d";
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;
	https
		.get(url, (response) => {
			response.on("data", (data) => {
				const weatherData = JSON.parse(data);
				const icon = weatherData.weather[0].icon;
				const imageURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
				res.send(
					`<h1>The temperature in ${city} is ${weatherData.main.temp} degrees celcius</h1>
	                <p>The weather currently is ${weatherData.weather[0].description}</p>
					<img src=${imageURL} alt="">`
				);
			});
		})
		.on("error", (error) => {
			console.log(error);
		});
});

app.listen(3000, () => {
	console.log(`Running on http://localhost:3000`);
});
