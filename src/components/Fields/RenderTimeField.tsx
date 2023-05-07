import { TextField } from '@mui/material';
import { ChangeEvent } from 'react';
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
