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
          value="00:00:00"
          inputProps={{ step: 1 }}
        />
      </div>
      <div>
        <Field
          name="type"
          component={RenderTextField}
          label="Type"
          validate={[validators.required]}
          onChange={resetWhenTypeChanges}
        />
      </div>
      {conditionalFields[type]}
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
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
