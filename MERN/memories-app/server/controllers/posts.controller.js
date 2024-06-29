import "../utils/database.js";
import Post from "../models/posts.model.js";

export const getPosts = async (req, res) => {
	try {
		const posts = await Post.find();
		console.log(posts);
		res.status(200).json(posts);
	} catch (error) {
		console.error(error);
	}
};

export const createPost = async (req, res) => {
	const post = req.body;
	try {
		await Post.insertMany(post);
	} catch (error) {
		// res.status(409).json({ message: error.message });
		console.error(error);
	}
};
