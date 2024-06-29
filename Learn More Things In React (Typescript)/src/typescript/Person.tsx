interface PersonProps {
	name: string;
	email: string;
	age: number;
	isMarried: boolean;
	friends: Array<string>;
	country: Country;
}

export enum Country {
	Canada = "Canada",
	USA = "USA",
	Mexico = "Mexico",
}

export const Person = ({
	name,
	email,
	age,
	isMarried,
	friends,
	country,
}: PersonProps) => {
	// const [nam, setName] = useState<string>("");

	return (
		<div>
			<h1>Name : {name}</h1>
			<h1>Email : {email}</h1>
			<h1>Age : {age}</h1>
			<h1>This person is {isMarried ? "married" : "not married"}</h1>
			<h1>
				Friends :{" "}
				{friends.map((friend: string) => (
					<h5>{friend}</h5>
				))}
			</h1>
			<h1>Country : {country}</h1>
		</div>
	);
};
