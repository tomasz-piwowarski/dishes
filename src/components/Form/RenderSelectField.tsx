import {
  Select,
  InputLabel,
  FormControl,
  FormHelperText,
  SxProps,
  TextFieldProps,
} from '@mui/material';
import {
  type WrappedFieldMetaProps,
  type WrappedFieldInputProps,
} from 'redux-form';

interface Props {
  label: string;
  input: WrappedFieldInputProps;
  meta: WrappedFieldMetaProps;
  custom: TextFieldProps;
  sx: SxProps;
  children: JSX.Element;
  name: string;
}

export default function RenderSelectField({
  label,
  input,
  meta: { touched, invalid, error },
  children,
  name,
  sx,
  ...custom
}: Props) {
  return (
    <FormControl error={touched && invalid} fullWidth sx={sx}>
      <InputLabel id={`select-${name}-id`}>Type</InputLabel>
      <Select
        labelId={`select-${name}-id`}
        label="Type"
        native
        {...input}
        {...custom}
        inputProps={{
          name,
          id: name,
        }}
      >
        {children}
      </Select>
      {touched && invalid && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
}
