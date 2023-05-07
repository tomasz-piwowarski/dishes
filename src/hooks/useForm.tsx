import { SubmissionError, change } from 'redux-form';
import { useDispatch } from 'react-redux';
import { DishesData } from '@/types';
import { FORM_NAME, CONDITIONAL_FIELDS } from '@/utils/formConstants';

const DISHES_URL = process.env.NEXT_PUBLIC_DISHES_URL;

export default function useForm() {
  const dispatch = useDispatch();

  const resetWhenTypeChanges = () => {
    CONDITIONAL_FIELDS.forEach((conditional_field) => {
      dispatch(change(FORM_NAME, conditional_field, ''));
    });
  };

  const sendDishes = async (data: DishesData) => {
    const response = await fetch(DISHES_URL as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    console.log(response);
    const jsonData = await response.json();

    if (response.status === 400) {
      throw new SubmissionError(jsonData);
    } else {
      return jsonData;
    }
  };

  return { resetWhenTypeChanges, sendDishes };
}
