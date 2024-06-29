import { Schema, model } from "mongoose";

const messageSchema = new Schema({
	text: {
		type: String,
		required: true,
	},
	users: Array,
	sender: {
		type: String,
		required: true,
	},
	timestamp: {
		type: String,
		required: true,
	},
});

export const Message = model("Message", messageSchema);
