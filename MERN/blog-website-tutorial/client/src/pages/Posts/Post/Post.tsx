import { FC } from "react";
import { IPostProps } from "../../../interfaces";

const Post: FC<IPostProps> = ({ imageUrl }) => {
	return (
		<div className="post">
			<img src={imageUrl} alt="Programmer" />
			<div className="content">
				<h2 className="font-bold text-2xl my-3">
					Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit, hic!
				</h2>
				<p className="mb-3 text-xs flex gap-x-2">
					<a href="" className="font-semibold">
						Lodon Totlodon
					</a>
					<time>2023-7-16 16:30</time>
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis quis
					sequi, ipsum eveniet sapiente delectus quam fugit, culpa sit similique
					quo minus deleniti temporibus consequuntur nobis aut eum magni
					impedit!
				</p>
			</div>
		</div>
	);
};

export default Post;
