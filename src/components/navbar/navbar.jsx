import React from 'react';
import { Stack } from '@mui/material';
import { logo } from '../../constants';
import { Box } from '@mui/material';
import { colors } from '../../constants/colors';
import { Link } from 'react-router-dom';
import { SearchBar } from '../';
const Navbar = () => {
  return (
    <Stack
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      px={2}
      py={1}
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 999,
        backgroundColor: colors.primary,
      }}
    >
      <Link to={'/'}>
        <img src={logo} alt='logo' className='logo' />
      </Link>
      <SearchBar />
      <Box />
    </Stack>
  );
};

export default Navbar;
