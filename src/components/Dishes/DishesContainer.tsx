import { Box } from '@mui/material';

interface Props {
  children: JSX.Element;
}

export default function DishesContainer({ children }: Props) {
  return (
    <Box
      sx={{
        p: 4,
        width: { md: '75%' },
      }}
    >
      {children}
    </Box>
  );
}
