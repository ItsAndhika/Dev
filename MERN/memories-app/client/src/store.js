import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./features/Posts";
// import { logger } from "redux-logger";

export const store = configureStore({
	reducer: {
		posts: postReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
});
