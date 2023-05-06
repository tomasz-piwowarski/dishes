import { change } from 'redux-form';
import { useDispatch } from 'react-redux';

export default function useForm() {
  const dispatch = useDispatch();

  const resetWhenTypeChanges = () => {
    dispatch(change('DishesForm', 'no_of_slices', ''));
    dispatch(change('DishesForm', 'slices_of_bread', ''));
    dispatch(change('DishesForm', 'spiciness_scale', ''));
    dispatch(change('DishesForm', 'diameter', ''));
  };

  return { resetWhenTypeChanges };
}
