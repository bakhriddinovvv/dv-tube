import React, { useState } from 'react';
import { Paper, IconButton } from '@mui/material';
import { colors } from '../../constants/colors';
import { Search } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
const SearchBar = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState('');
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(value);
    if (value) {
      navigate(`search/${value}`);
      setValue('')
    }
  };
  return (
    <Paper
      component={'form'}
      onSubmit={submitHandler}
      sx={{
        border: '1px solid ' + colors.secodary,
        pl: 2,
        boxShadow: 'none',
        display: 'flex',
        height: {
          xs: '2rem',
          sm: '2.5rem',
        },
      }}
    >
      <input
        className='search-bar'
        type='text'
        placeholder='Search...'
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IconButton type='submit'>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
