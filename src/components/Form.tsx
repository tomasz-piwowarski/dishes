import {
  Field,
  reduxForm,
  type InjectedFormProps,
  formValueSelector,
} from 'redux-form';
import { connect } from 'react-redux';
import RenderTextField from './Fields/RenderTextField';
import conditionalFields from './Fields/ConditionalFields';
import { type DishesData, type DishType } from '@/types';
import validators from '@/utils/validators';
import useForm from '@/hooks/useForm';
import { Button, Box } from '@mui/material';
import RenderSelectField from './Fields/RenderSelectField';
import { FORM_NAME, FIELDS } from '@/utils/formConstants';
import RenderTimeField from './Fields/RenderTimeField';

interface DishesFormProps {
  type: DishType;
}

function Form({
  handleSubmit,
  pristine,
  reset,
  submitting,
  type,
}: InjectedFormProps<DishesData, DishesFormProps> & DishesFormProps) {
  const { resetWhenTypeChanges } = useForm();

  return (
    <form onSubmit={handleSubmit}>
      <Box>
        <Field
          name={FIELDS.name.name}
          component={RenderTextField}
          label={FIELDS.name.label}
          validate={[validators.required]}
          fullWidth
          sx={{ mb: 2 }}
        />
      </Box>
      <Box>
        <Field
          name={FIELDS.preparation_time.name}
          component={RenderTimeField}
          label={FIELDS.preparation_time.label}
          validate={[validators.required]}
          inputProps={{ pattern: '^([01]\\d|2[0-3]):([0-5]\\d):([0-5]\\d)$' }}
          fullWidth
          sx={{ mb: 2 }}
          placeholder="hh:mm:ss"
        />
      </Box>
      <Box>
        <Field
          name={FIELDS.type.name}
          component={RenderSelectField}
          label={FIELDS.type.label}
          validate={[validators.required]}
          onChange={resetWhenTypeChanges}
          fullWidth
          sx={{ mb: 2 }}
        >
          <option value="" />
          {FIELDS.type.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
      </Box>
      {conditionalFields[type]}
      <Box sx={{ display: 'flex', flexDirection: 'row' }}>
        <Button
          variant="contained"
          type="submit"
          disabled={pristine || submitting}
          fullWidth
          sx={{ mr: 1 }}
        >
          Submit
        </Button>
        <Button
          variant="outlined"
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
          fullWidth
          sx={{ ml: 1 }}
        >
          Clear Values
        </Button>
      </Box>
    </form>
  );
}

const DishesForm = reduxForm<DishesData, DishesFormProps>({
  form: FORM_NAME,
})(Form);

const selector = formValueSelector(FORM_NAME);

export default connect((state: DishesData) => {
  const type = selector(state, FIELDS.type.name);
  return {
    type,
  };
})(DishesForm);
