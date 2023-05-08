import { SubmissionError, change } from 'redux-form';
import { useDispatch } from 'react-redux';
import { DishesData } from '@/types';
import { FORM_NAME, CONDITIONAL_FIELDS } from '@/utils/formConstants';
import { DISHES_URL } from '@/utils/config';

export default function useForm() {
  const dispatch = useDispatch();

  const resetWhenTypeChanges = () => {
    CONDITIONAL_FIELDS.forEach((field) => {
      dispatch(change(FORM_NAME, field, ''));
    });
  };

  const sendDishes = async (data: DishesData) => {
    const response = await fetch(DISHES_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const jsonData = await response.json();

    if (response.status === 400) {
      throw new SubmissionError(jsonData);
    }

    return jsonData;
  };

  return { resetWhenTypeChanges, sendDishes };
}
