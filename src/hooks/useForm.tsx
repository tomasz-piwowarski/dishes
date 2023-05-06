import { SubmissionError, change } from 'redux-form';
import { useDispatch } from 'react-redux';
import { DishesData } from '@/types';

export default function useForm() {
  const dispatch = useDispatch();

  const resetWhenTypeChanges = () => {
    dispatch(change('DishesForm', 'no_of_slices', ''));
    dispatch(change('DishesForm', 'slices_of_bread', ''));
    dispatch(change('DishesForm', 'spiciness_scale', ''));
    dispatch(change('DishesForm', 'diameter', ''));
  };

  const sendDishes = async (data: DishesData) => {
    const response = await fetch(
      'https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      }
    );

    const jsonData = await response.json();

    if (response.status === 400) {
      throw new SubmissionError(jsonData);
    } else {
      return jsonData;
    }
  };

  return { resetWhenTypeChanges, sendDishes };
}
