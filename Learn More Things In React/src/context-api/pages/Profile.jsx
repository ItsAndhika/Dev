import React, { useContext } from "react";
import { AppContext } from "../App";
import ChangeProfile from "./ChangeProfile";

const Profile = () => {
	const { username } = useContext(AppContext);

	return (
		<div>
			<h1>Profile, user is : {username}</h1>
			<ChangeProfile />
		</div>
	);
};

export default Profile;
