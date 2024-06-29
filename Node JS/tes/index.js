const http = require("http");

const server = http.createServer((req, res) => {
	res.write("Test");
	res.end();
});

server.listen(3000, () => {
	console.log(`Running on http://localhost:3000`);
});
