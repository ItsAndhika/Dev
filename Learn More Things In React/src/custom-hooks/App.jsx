import React from "react";
import { useToggle } from "./useToggle";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Cat from "./Cat";

const App = () => {
	const [isVisible, toggle] = useToggle(false);
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	});

	return (
		<QueryClientProvider client={queryClient}>
			{/* <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
			{isVisible && <h1>Hidden Text</h1>} */}
			<Cat />
		</QueryClientProvider>
	);
};

export default App;
