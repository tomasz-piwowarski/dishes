import { Field } from 'redux-form';
import RenderTextField from './RenderTextField';
import validators from '@/utils/validators';
import { FIELDS } from '@/utils/formConstants';
import { Box } from '@mui/material';

function PizzaConditionalFields() {
  return (
    <>
      <Box>
        <Field
          name={FIELDS.no_of_slices.name}
          component={RenderTextField}
          label={FIELDS.no_of_slices.label}
          validate={[validators.pizzaRequired]}
          fullWidth
          sx={{ mb: 2 }}
        />
      </Box>
      <Box>
        <Field
          name={FIELDS.diameter.name}
          component={RenderTextField}
          label={FIELDS.diameter.label}
          validate={[validators.pizzaRequired]}
          fullWidth
          sx={{ mb: 2 }}
        />
      </Box>
    </>
  );
}

function SoupConditionalFields() {
  return (
    <Box>
      <Field
        name={FIELDS.spiciness_scale.name}
        component={RenderTextField}
        label={FIELDS.spiciness_scale.label}
        validate={[validators.soupRequired]}
        fullWidth
        sx={{ mb: 2 }}
      />
    </Box>
  );
}

function SandwichConditionalFields() {
  return (
    <Box>
      <Field
        name={FIELDS.slices_of_bread.name}
        component={RenderTextField}
        label={FIELDS.slices_of_bread.label}
        validate={[validators.sandwichRequired]}
        fullWidth
        sx={{ mb: 2 }}
      />
    </Box>
  );
}

const conditionalFields = {
  pizza: <PizzaConditionalFields />,
  soup: <SoupConditionalFields />,
  sandwich: <SandwichConditionalFields />,
};

export default conditionalFields;
