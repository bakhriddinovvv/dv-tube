import { Stack } from '@mui/material';
import React from 'react';
import { category } from '../../constants';
import { colors } from '../../constants/colors';
const Category = ({ selectedCategoryHandler, selectedCategory }) => {
  return (
    <Stack
      direction={'row'}
      sx={{
        overflowX: 'scroll',
      }}
    >
      {category.map((item) => (
        <button
          onClick={() => selectedCategoryHandler(item.name)}
          key={item.name}
          className='category-btn'
          style={{
            background: item.name === selectedCategory ? colors.secodary : '',
            color: item.name === selectedCategory ? 'white' : '',
            borderRadius: '0',
          }}
        >
          <span
            style={{
              color: item.name === selectedCategory ? 'white' : colors.secodary,
              marginRight: '15px',
            }}
          >
            {React.createElement(item.icon)}
          </span>
          <span
            style={{
              opacity: 1,
            }}
          >
            {item.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Category;
