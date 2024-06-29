import mongoose, { mongo } from "mongoose";

const CONNECTION_URL = `mongodb://127.0.0.1:27017/memories`;
mongoose.set("strictQuery", true);
await mongoose.connect(CONNECTION_URL);
