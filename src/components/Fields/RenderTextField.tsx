import { TextField } from "@mui/material";
import { WrappedFieldProps } from "redux-form"

interface FieldMeta {
	touched: boolean;
	invalid: boolean;
	error: string;
}

interface TextFieldInterface {
	label: string;
	input: WrappedFieldProps;
	meta: FieldMeta;
	custom: {
    [x: string]: any;
	}
}

export default function RenderTextField({label, input, meta: {touched, invalid, error}, ...custom}: TextFieldInterface) {
	return (
		<TextField 
			label={label}
			placeholder={label}
			error={touched && invalid}
			helperText={touched && error}
			{...input}
			{...custom}
		/>
	)
}