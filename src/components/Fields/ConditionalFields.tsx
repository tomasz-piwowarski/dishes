import { Field } from 'redux-form';
import RenderTextField from './RenderTextField';
import validators from '@/utils/validators';

function PizzaConditionalFields() {
  return (
    <>
      <div>
        <Field
          name="no_of_slices"
          component={RenderTextField}
          label="Number of slices"
          // validate={[validators.pizzaRequired, validators.int]}
          validate={[validators.pizzaRequired]}
        />
      </div>
      <div>
        <Field
          name="diameter"
          component={RenderTextField}
          label="Diameter"
          // validate={[validators.pizzaRequired, validators.number]}
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
        name="spiciness_scale"
        component={RenderTextField}
        label="Spiciness Scale"
        // validate={[
        //   validators.soupRequired,
        //   validators.number,
        //   validators.int,
        //   validators.minValue1,
        //   validators.maxValue10,
        // ]}
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
        // validate={[
        //   validators.sandwichRequired,
        //   validators.number,
        //   validators.int,
        // ]}
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
