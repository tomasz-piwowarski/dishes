import { TextField } from '@mui/material';
import { FieldInterface } from '@/types';

export default function RenderTextField({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}: FieldInterface) {
  return (
    <TextField
      label={label}
      InputLabelProps={{ shrink: true }}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      sx={{ margin: 2 }}
      {...input}
      {...custom}
    />
  );
}
