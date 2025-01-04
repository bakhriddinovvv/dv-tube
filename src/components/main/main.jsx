import { useState, useEffect } from 'react';
import { Button, Container, Stack, Typography } from '@mui/material';
import { Box } from '@mui/material';
import { colors } from '../../constants/colors';
import { Category, Videos } from '../';
import { ApiService } from '../../service/api.service';
const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState('New');
  const [videos, setVideos] = useState([]);
  const selectedCategoryHandler = (category) => setSelectedCategory(category);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${selectedCategory}`);
        setVideos(data.items);
      } catch (error) {
        console.log(error);
      }
    };
    // ApiService.fetching('search').then((data) => setVideos(data.items));
    getData();
  }, [selectedCategory]);
  return (
    <Stack>
      <Category
        selectedCategoryHandler={selectedCategoryHandler}
        selectedCategory={selectedCategory}
      />
      <Box
        p={2}
        sx={{
          height: '90vh',
        }}
      >
        <Container maxWidth={'90%'}>
          <Typography variant={'h4'} fontWeight={'bold'} mb={2}>
            {selectedCategory}{' '}
            <span
              style={{
                color: colors.secodary,
              }}
            ></span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  );
};

export default Main;
