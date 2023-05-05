import { Field, reduxForm, InjectedFormProps } from "redux-form"
import RenderTextField from "./Fields/RenderTextField"
import { DishesData } from "@/types";

const required = (value: any) => (value || typeof value === 'number' ? undefined : 'Required')

function Form({ handleSubmit, pristine, reset, submitting }: InjectedFormProps<DishesData>) {
	return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="firstName"
          component={RenderTextField}
          label="First Name"
					validate={[required]}
        />
      </div>
      <div>
        <Field name="lastName" component={RenderTextField} label="Last Name" />
      </div>
      <div>
        <Field name="email" component={RenderTextField} label="Email" />
      </div>
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
};

export default reduxForm<DishesData>({
	form: "DishesForm",
})(Form);