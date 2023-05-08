import { TextField, TextFieldProps } from '@mui/material';
import { ChangeEvent } from 'react';
import {
  type WrappedFieldMetaProps,
  type WrappedFieldInputProps,
} from 'redux-form';

interface Props {
  label: string;
  input: WrappedFieldInputProps;
  meta: WrappedFieldMetaProps;
  custom: TextFieldProps;
}

export default function RenderTimeField({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}: Props) {
  const { onChange } = input;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;

    if (!inputText.length) return onChange('');

    const cleanedValue = inputText.replace(/\D/g, '');

    const formattedValue = cleanedValue.match(/.{1,2}/g);

    if (!formattedValue) return;

    onChange(formattedValue.join(':'));
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
