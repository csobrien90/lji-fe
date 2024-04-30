const TextInput = ({ type, label, slug, required, addClasses = [] }: {
	type: "text" | "email" | "password" | "textarea",
	label: string,
	slug: string,
	required?: boolean,
	addClasses?: string[]
}) => {
	let classes = [slug, ...addClasses];
	
	let inputElement = null;
	switch (type) {
		case "textarea":
			inputElement = (
				<textarea
					id={slug}
					className={classes.join(' ')}
					placeholder={`Enter your ${label.toLocaleLowerCase()}`}
					required={required}
				/>
			);
			break;
		default:
			inputElement = (
				<input
					type={type}
					id={slug}
					className={classes.join(' ')}
					placeholder={label}
					required={required}
				/>
			);
	}

	return (
		<label>
			<span className="sr-only">{label}</span>
			{inputElement}
		</label>
	);
}

export default TextInput;