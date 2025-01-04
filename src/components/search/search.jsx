import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApiService } from '../../service/api.service';
import { Box, Container, Typography } from '@mui/material';
import {colors} from "../../constants/colors"
import { Videos } from '..';
const Search = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`);
        setVideos(data.items);
        console.log(data.items);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [id]);
  console.log(id);
  return (
    <Box
      p={2}
      sx={{
        height: '90vh',
      }}
    >
      <Container maxWidth={'90%'}>
        <Typography variant='h4' fontWeight={'bold'} mb={2}></Typography>
        Search results for <span style={{color:colors.secodary}}>{id}</span> videos
      </Container>
      <Videos videos={videos}/>
    </Box>
  );
};

export default Search;
