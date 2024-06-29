import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const Form = () => {
	const { register, handleSubmit } = useForm();

	const schema = yup.object().shape({
		fullName: yup.string().required(),
		email: yup.string().email().required(),
		age: yup.number().positive().integer().min(12).required(),
		password: yup.string().min(4).max(20).required(),
		confirmPassword: yup
			.string()
			.oneOf([yup.ref("password"), null])
			.required(),
	});

	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<form action="" onSubmit={handleSubmit(onSubmit)}>
			<input type="text" placeholder="Full name..." {...register("fullName")} />
			<input type="email" placeholder="Email..." {...register("email")} />
			<input
				type="number"
				placeholder="Age..."
				min={12}
				minLength={1}
				maxLength={2}
				{...register("age")}
			/>
			<input
				type="password"
				placeholder="Password..."
				{...register("password")}
			/>
			<input
				type="password"
				placeholder="Confirm Password..."
				{...register("confirmPassword")}
			/>
			<button type="submit">Submit</button>
		</form>
	);
};

export default Form;
