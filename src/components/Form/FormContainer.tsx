import { Box } from '@mui/material';

interface Props {
  children: JSX.Element;
}

export default function FormContainer({ children }: Props) {
  return (
    <Box
      sx={{
        width: { md: '25%' },
        px: 2,
        py: 4,
        boxShadow: 2,
        backgroundColor: 'white',
        borderBottomLeftRadius: '3%',
        borderBottomRightRadius: '3%',
      }}
    >
      {children}
    </Box>
  );
}
