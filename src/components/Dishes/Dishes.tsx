import { type DishesData } from '@/types';
import Dish from './Dish';
import { Grid } from '@mui/material';

export default function Dishes({ dishes }: { dishes: DishesData[] }) {
  return (
    <Grid
      container
      sx={{
        flexDirection: { xs: 'column', md: 'row' },
        overflow: 'auto',
        width: '100%',
        pb: 2,
        mx: 'auto',
      }}
    >
      {dishes.map((dish) => (
        <Grid
          md={3}
          sx={{ p: 1 }}
          key={dish.name + dish.type + dish.preparation_time}
          item
        >
          <Dish {...dish} />
        </Grid>
      ))}
    </Grid>
  );
}
