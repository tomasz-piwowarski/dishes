import { type DishesData } from '@/types';
import Dish from './Dish';
import { Grid } from '@mui/material';
import { useId } from 'react';

export default function Dishes({ dishes }: { dishes: DishesData[] }) {
  return (
    <Grid>
      {dishes.map((dish) => (
        <Dish key={dish.name + dish.type + dish.preparation_time} {...dish} />
      ))}
    </Grid>
  );
}
