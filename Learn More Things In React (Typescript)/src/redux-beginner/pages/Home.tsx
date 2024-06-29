import { useSelector } from "react-redux";

interface UserStateValue {
	username: string;
}

interface UserState {
	value: UserStateValue;
}

interface User {
	user: UserState;
}

const Home = () => {
	const username = useSelector((state: User) => state.user.value.username);

	return (
		<div>
			<h1>This is the home page {username}</h1>
		</div>
	);
};

export default Home;
