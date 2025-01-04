import React from 'react';
import { Box, CircularProgress, Stack } from '@mui/material';
const loader = () => {
  return (
    <Box minHeight={'90vh'}>
      <Stack
        direction={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        height={'80vh'}
      >
        <CircularProgress />
      </Stack>
    </Box>
  );
};

export default loader;
