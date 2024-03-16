import { Box, CircularProgress } from '@mui/material';

export function Loader() {
  return (
    <Box
      marginTop={6}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  );
}
