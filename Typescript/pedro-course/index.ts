const programmingLanguages: string[] = ["javascript", "python", "c++"];
programmingLanguages.push("golang");

interface IUser {
	name: string;
	email: string;
	age: number;
	isMarried: boolean;
}

const fetchData = (apiUrl: string): Promise<IUser> => {
	return fetch(apiUrl).then((response) => response.json());
};

enum Cheese {
	cheddar = "cheddar",
	gouda = "gouda",
	goat = "goat",
	blueMould = "blueMould",
}

const serveCheese = (cheeseType: Cheese, servings: number): void => {
	console.log(`You want ${servings} servings of ${cheeseType}`);
};

serveCheese(Cheese.cheddar, 2);
