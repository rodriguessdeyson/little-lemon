const FormField = ({ children, label, htmlFor, hasError, errorMessage }) => {
	return (
		<div className="form-field">
			<label htmlFor={htmlFor}>{label}</label>
			{children}
			<p data-testid="error-message">{ hasError && errorMessage ? errorMessage : ""}</p>
		</div>
	);
};

export default FormField;
