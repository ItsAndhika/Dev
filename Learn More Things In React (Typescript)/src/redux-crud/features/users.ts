import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UsersData } from "../dummy/data.ts";

interface UserStateData {
	id: number;
	name: string;
	username: string;
}

interface UserState {
	value: Array<UserStateData>;
}

const initialState: UserState = { value: UsersData };
export const userSlice = createSlice({
	name: "users",
	initialState,
	reducers: {
		addUser: (state: UserState, action: PayloadAction<UserStateData>) => {
			state.value.push(action.payload);
		},
		updateUsername: (
			state: UserState,
			action: PayloadAction<UserStateData>
		) => {
			state.value.map((user) => {
				if (user.id === action.payload.id) {
					user.username = action.payload.username;
				}
			});
		},
		deleteUser: (state: UserState, action: PayloadAction<UserStateData>) => {
			state.value = state.value.filter((user) => user.id !== action.payload.id);
		},
	},
});

export const { addUser, updateUsername, deleteUser } = userSlice.actions;
export default userSlice.reducer;
