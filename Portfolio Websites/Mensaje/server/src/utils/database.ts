import mongoose from "mongoose";

mongoose.set("strictQuery", true);
mongoose
	.connect("mongodb://127.0.0.1:27017/mensaje")
	.then(() => {
		console.log(`Mongodb connection success`);
	})
	.catch((error) => {
		console.error(`Mongodb connection error : ${error}`);
	});
