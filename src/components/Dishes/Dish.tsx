import { type DishesData } from '@/types';
import { Box, Typography, Divider } from '@mui/material';

interface PizzaDishProps {
  no_of_slices: number;
  diameter: number;
}

export function PizzaDish({ no_of_slices, diameter }: PizzaDishProps) {
  return (
    <>
      <Typography>Number of slices: {no_of_slices}</Typography>
      <Typography>Diameter: {diameter}</Typography>
    </>
  );
}

interface SandwichDishesProps {
  slices_of_bread: number;
}

export function SandwichDish({ slices_of_bread }: SandwichDishesProps) {
  return (
    <>
      <Typography>Slices of bread: {slices_of_bread}</Typography>
    </>
  );
}

interface SoupDishesProps {
  spiciness_scale: number;
}

export function SoupDish({ spiciness_scale }: SoupDishesProps) {
  return (
    <>
      <Typography>Spiciness scale: {spiciness_scale}</Typography>
    </>
  );
}

export default function Dish(props: DishesData) {
  const dishes = {
    pizza: 'no_of_slices' in props && 'diameter' in props && (
      <PizzaDish no_of_slices={props.no_of_slices} diameter={props.diameter} />
    ),
    sandwich: 'slices_of_bread' in props && (
      <SandwichDish slices_of_bread={props.slices_of_bread} />
    ),
    soup: 'spiciness_scale' in props && (
      <SoupDish spiciness_scale={props.spiciness_scale} />
    ),
  };

  return (
    <Box
      sx={{
        borderRadius: '5%',
        backgroundColor: 'white',
        p: 2,
        boxShadow: 2,
        height: '100%',
      }}
    >
      <Typography sx={{ wordWrap: 'break-word' }} variant="h5">
        {props.name}
      </Typography>
      <Divider sx={{ mb: 1 }} />
      <Typography sx={{ textTransform: 'capitalize' }} variant="h6">
        Type: {props.type}
      </Typography>
      <Typography>Preparation time: {props.preparation_time}</Typography>
      {dishes[props.type]}
    </Box>
  );
}
