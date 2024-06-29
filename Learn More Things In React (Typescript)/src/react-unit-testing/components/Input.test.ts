import { render } from "@testing-library/react";
import Input from "./Input";

describe("Input Component", () => {
	it("rendered input", () => {
		const { getByTestId } = render(<Input showDiv={false} />);
	});
});
