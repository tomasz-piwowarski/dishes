import {
  Field,
  reduxForm,
  InjectedFormProps,
  formValueSelector,
  change,
} from 'redux-form';
import { connect, useDispatch } from 'react-redux';
import RenderTextField from './Fields/RenderTextField';
import conditionalFields from './Fields/ConditionalFields';
import { DishesData, DishesFormProps } from '@/types';
import validators from '@/utils/validators';

function Form(
  props: InjectedFormProps<DishesData, DishesFormProps> & DishesFormProps
) {
  const dispatch = useDispatch();
  const { handleSubmit, pristine, reset, submitting, type } = props;

  const resetWhenTypeChanges = () => {
    dispatch(change('DishesForm', 'no_of_slices', ''));
    dispatch(change('DishesForm', 'slices_of_bread', ''));
    dispatch(change('DishesForm', 'spiciness_scale', ''));
    dispatch(change('DishesForm', 'diameter', ''));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="firstName"
          component={RenderTextField}
          label="First Name"
          validate={[validators.required]}
        />
      </div>
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
      {conditionalFields[type]};
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
