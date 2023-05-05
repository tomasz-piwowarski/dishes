import { Field } from 'redux-form';
import RenderTextField from './RenderTextField';
import validators from '@/utils/validators';

function PizzaConditionalFields() {
  return (
    <div>
      <Field
        name="no_of_slices"
        component={RenderTextField}
        label="Number of slices"
        validate={[validators.pizzaRequired]}
      />
      <Field
        name="diameter"
        component={RenderTextField}
        label="Diameter"
        validate={[validators.pizzaRequired]}
      />
    </div>
  );
}

function SoupConditionalFields() {
  return (
    <div>
      <Field
        name="spiciness_scale"
        component={RenderTextField}
        label="Spiciness Scale"
        validate={[validators.soupRequired]}
      />
    </div>
  );
}

function SandwichConditionalFields() {
  return (
    <div>
      <Field
        name="slices_of_bread"
        component={RenderTextField}
        label="Slices of bread"
        validate={[validators.sandwichRequired]}
      />
    </div>
  );
}

const conditionalFields = {
  pizza: <PizzaConditionalFields />,
  soup: <SoupConditionalFields />,
  sandwich: <SandwichConditionalFields />,
};

export default conditionalFields;
