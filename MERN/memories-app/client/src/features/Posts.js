import { createSlice } from "@reduxjs/toolkit";
import * as api from "../api/index";

const initialState = [];
const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		getPosts: async (state, action) => {
			try {
				const data = await api.fetchPosts();
				state = data;
			} catch (error) {
				console.error(error.message);
			}
		},
		createPost: async (state, action) => {
			try {
				const { data } = await api.createPost(action.payload);
				console.log(data);
			} catch (error) {
				console.error(error);
			}
		},
	},
});

export const { getPosts, createPost } = postSlice.actions;
export default postSlice.reducer;
