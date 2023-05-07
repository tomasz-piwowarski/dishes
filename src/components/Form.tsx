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
import { Button } from '@mui/material';
import RenderSelectField from './Fields/RenderSelectField';
import { FORM_NAME, FIELDS } from '@/utils/formConstants';

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
      <div>
        <Field
          name={FIELDS.name.name}
          component={RenderTextField}
          label={FIELDS.name.label}
          validate={[validators.required]}
        />
      </div>
      <div>
        <Field
          name={FIELDS.preparation_time.name}
          component={RenderTextField}
          label={FIELDS.preparation_time.label}
          validate={[validators.required]}
          type={FIELDS.preparation_time.type}
          inputProps={{ step: 1 }}
        />
      </div>
      <div>
        <Field
          name={FIELDS.type.name}
          component={RenderSelectField}
          label={FIELDS.type.label}
          validate={[validators.required]}
          onChange={resetWhenTypeChanges}
        >
          <option value="" />
          {FIELDS.type.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Field>
      </div>
      {conditionalFields[type]}
      <div>
        <Button type="submit" disabled={pristine || submitting}>
          Submit
        </Button>
        <Button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </Button>
      </div>
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
