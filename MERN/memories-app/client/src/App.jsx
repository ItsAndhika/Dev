import { useEffect } from "react";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import memories from "./img/memories.png";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch();
	// }, [dispatch]);

	return (
		<main className="container mx-lg-auto">
			<div className="row shadow mx-auto my-5 rounded p-2">
				<div className="col d-flex justify-content-center align-items-center">
					<h1
						className="fw-normal text-center"
						style={{ color: "rgba(0, 183, 255, 1)" }}
					>
						Memories
					</h1>
					<img src={memories} alt="Memories" height={60} className="ms-2" />
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col">
						<Posts />
					</div>
					<div className="col">
						<Form />
					</div>
				</div>
			</div>
		</main>
	);
};

export default App;
