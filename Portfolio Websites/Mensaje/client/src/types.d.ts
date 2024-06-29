interface Users {
	_id: string;
	profileImage: string;
	username: string;
	email: string;
	password: string;
}

interface Message {
	_id: string;
	text: string;
	users: Array;
	sender: string;
	timestamp: string;
}
