import { FC } from "react";
import Post from "./Post/Post";

const Posts: FC = () => {
	return (
		<main className="grid gap-y-12">
			<Post imageUrl={"images/programmer1.png"} />
			<Post imageUrl={"images/programmer2.png"} />
			<Post imageUrl={"images/programmer3.jpg"} />
		</main>
	);
};

export default Posts;
