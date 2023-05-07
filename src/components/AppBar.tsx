import { AppBar as Bar, Toolbar, Typography } from '@mui/material';

export default function AppBar() {
  return (
    <Bar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dishes
        </Typography>
      </Toolbar>
    </Bar>
  );
}
