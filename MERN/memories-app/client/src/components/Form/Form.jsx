import React, { useState } from "react";
import FileBase from "react-file-base64";
import "./Form.css";
import { useDispatch } from "react-redux";
import { createPost } from "../../features/Posts";

const Form = () => {
	const dispatch = useDispatch();
	const [postData, setPostData] = useState({
		creator: "",
		title: "",
		message: "",
		tags: "",
		selectedFile: "",
	});
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(createPost(postData));
	};
	const clear = () => {};

	return (
		<section className="container shadow rounded-3 text-center p-3 w-75">
			<div className="row">
				<div className="col">
					<form
						action=""
						method="post"
						autoComplete="off"
						onSubmit={handleSubmit}
					>
						<h4>Creating a memory</h4>
						<input
							type="text"
							id="creator"
							name="creator"
							className="w-100 p-2"
							placeholder="Creator"
							value={postData.creator}
							onChange={(e) =>
								setPostData({ ...postData, creator: e.target.value })
							}
							style={{ outlineColor: "rgba(0, 0, 0, 0.1)" }}
						/>
						<input
							type="text"
							id="title"
							name="title"
							className="w-100 p-2"
							placeholder="Title"
							value={postData.title}
							onChange={(e) =>
								setPostData({ ...postData, title: e.target.value })
							}
							style={{ outlineColor: "rgba(0, 0, 0, 0.1)" }}
						/>
						<input
							type="text"
							id="message"
							name="message"
							className="w-100 p-2"
							placeholder="Message"
							value={postData.message}
							onChange={(e) =>
								setPostData({ ...postData, message: e.target.value })
							}
							style={{ outlineColor: "rgba(0, 0, 0, 0.1)" }}
						/>
						<input
							type="text"
							id="tags"
							name="tags"
							className="w-100 p-2"
							placeholder="Tags"
							value={postData.tags}
							onChange={(e) =>
								setPostData({ ...postData, tags: e.target.value })
							}
							style={{ outlineColor: "rgba(0, 0, 0, 0.1)" }}
						/>
						<div className="text-start">
							<FileBase
								type="file"
								multiple={false}
								onDone={(base64) => {
									console.log(base64);
									setPostData({ ...postData, selectedFile: base64 });
								}}
							/>
						</div>
						<button id="submit">Submit</button>
						<button id="clear">Clear</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Form;
