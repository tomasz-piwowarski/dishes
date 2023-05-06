import { Field } from 'redux-form';
import RenderTextField from './RenderTextField';
import validators from '@/utils/validators';
import { FIELDS } from '@/utils/formConstants';

function PizzaConditionalFields() {
  return (
    <>
      <div>
        <Field
          name={FIELDS.no_of_slices.name}
          component={RenderTextField}
          label={FIELDS.no_of_slices.label}
          validate={[validators.pizzaRequired]}
        />
      </div>
      <div>
        <Field
          name={FIELDS.diameter.name}
          component={RenderTextField}
          label={FIELDS.diameter.label}
          validate={[validators.pizzaRequired]}
        />
      </div>
    </>
  );
}

function SoupConditionalFields() {
  return (
    <div>
      <Field
        name={FIELDS.spiciness_scale.name}
        component={RenderTextField}
        label={FIELDS.spiciness_scale.label}
        validate={[validators.soupRequired]}
      />
    </div>
  );
}

function SandwichConditionalFields() {
  return (
    <div>
      <Field
        name={FIELDS.slices_of_bread.name}
        component={RenderTextField}
        label={FIELDS.slices_of_bread.label}
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
