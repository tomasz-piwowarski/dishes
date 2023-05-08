import { TextField, TextFieldProps } from '@mui/material';
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

export default function RenderTextField({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}: Props) {
  return (
    <TextField
      label={label}
      InputLabelProps={{ shrink: true }}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  );
}
