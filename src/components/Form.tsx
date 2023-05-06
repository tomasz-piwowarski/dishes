import {
  Field,
  reduxForm,
  InjectedFormProps,
  formValueSelector,
} from 'redux-form';
import { connect } from 'react-redux';
import RenderTextField from './Fields/RenderTextField';
import conditionalFields from './Fields/ConditionalFields';
import { DishesData, DishesFormProps } from '@/types';
import validators from '@/utils/validators';
import useForm from '@/hooks/useForm';
import { Button } from '@mui/material';
import RenderSelectField from './Fields/RenderSelectField';

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
          name="name"
          component={RenderTextField}
          label="Name"
          validate={[validators.required]}
        />
      </div>
      <div>
        <Field
          name="preparation_time"
          component={RenderTextField}
          label="Preparation Time"
          validate={[validators.required]}
          type="time"
          inputProps={{ step: 1 }}
        />
      </div>
      <div>
        <Field
          name="type"
          component={RenderSelectField}
          label="Type"
          validate={[validators.required]}
          onChange={resetWhenTypeChanges}
        >
          <option value="" />
          <option value={'pizza'}>Pizza</option>
          <option value={'sandwich'}>Sandwich</option>
          <option value={'soup'}>Soup</option>
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
  form: 'DishesForm',
})(Form);

const selector = formValueSelector('DishesForm');

export default connect((state: DishesData) => {
  const type = selector(state, 'type');
  return {
    type,
  };
})(DishesForm);
