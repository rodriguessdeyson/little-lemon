const FormField = ({ children, label, htmlFor, hasError, errorMessage }) => {
	return (
		<div className="form-field">
			<label htmlFor={htmlFor}>{label}</label>
			{children}
			<span data-testid={`error-message${htmlFor}`}>{ hasError && errorMessage ? errorMessage : ""}</span>
		</div>
	);
};

export default FormField;
