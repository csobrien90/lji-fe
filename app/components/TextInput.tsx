"use client"

import { useState } from "react"

const TextInput = ({ type, label, slug, required, addClasses = [] }: {
	type: "text" | "email" | "password" | "textarea",
	label: string,
	slug: string,
	required?: boolean,
	addClasses?: string[]
}) => {
	let classes = [slug, ...addClasses];
	slug = slug.toLowerCase();

	const [value, setValue] = useState("");

	const handleInput = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
		setValue(e.currentTarget.value);
	};

	return (
		<label
			htmlFor={slug}
		>
			<span className="sr-only">{label}</span>
			{
				type === "textarea" ? (
					<textarea
						id={slug}
						name={slug}
						className={classes.join(' ')}
						placeholder={`Enter your ${label.toLocaleLowerCase()}`}
						required={required}
						value={value}
						onChange={e => handleInput(e)}
					/>
				) : (
					<input
						type={type}
						id={slug}
						name={slug}
						className={classes.join(' ')}
						placeholder={label}
						required={required}
						value={value}
						onChange={e => handleInput(e)}
					/>
				)
			}
		</label>
	);
}

export default TextInput;