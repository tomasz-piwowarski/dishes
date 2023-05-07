import { TextField } from '@mui/material';
import {
  type WrappedFieldMetaProps,
  type WrappedFieldInputProps,
} from 'redux-form';

interface FieldInterface {
  label: string;
  input: WrappedFieldInputProps;
  meta: WrappedFieldMetaProps;
  custom: {
    [x: string]: any;
  };
}

export default function RenderTimeField({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}: FieldInterface) {
  const { onChange } = input;

  const handleChange = (event: any) => {
    const inputText = event.target.value;

    if (!inputText.length) return;

    const cleanedValue = inputText.replace(/\D/g, '');

    // Split into groups of two and join with colons
    const formattedValue = cleanedValue.match(/.{1,2}/g).join(':');

    onChange(formattedValue);
  };

  return (
    <TextField
      label={label}
      InputLabelProps={{ shrink: true }}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
      onChange={handleChange}
      inputProps={{ maxLength: 8 }}
    />
  );
}
