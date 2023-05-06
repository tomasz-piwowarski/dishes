import { Select, InputLabel, FormControl, FormHelperText } from '@mui/material';
import { SelectFieldInterface } from '@/types';

const renderFromHelper = ({
  touched,
  error,
}: {
  touched: boolean;
  error: string;
}) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

export default function RenderSelectField({
  label,
  input,
  meta: { touched, invalid, error },
  children,
  name,
  ...custom
}: SelectFieldInterface) {
  return (
    <FormControl error={touched && invalid} sx={{ margin: 2 }}>
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
      {renderFromHelper({ touched, error })}
    </FormControl>
  );
}
