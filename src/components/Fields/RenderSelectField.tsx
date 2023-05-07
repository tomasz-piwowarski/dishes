import { Select, InputLabel, FormControl, FormHelperText } from '@mui/material';
import {
  type WrappedFieldMetaProps,
  type WrappedFieldInputProps,
} from 'redux-form';

interface SelectFieldInterface {
  label: string;
  input: WrappedFieldInputProps;
  meta: WrappedFieldMetaProps;
  custom: {
    [x: string]: any;
  };
  sx: {
    [x: string]: any;
  };
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
}: SelectFieldInterface) {
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
