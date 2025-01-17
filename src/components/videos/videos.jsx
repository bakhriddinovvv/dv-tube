import { Stack, Box } from '@mui/material';
import React from 'react';
import { VideoCard, ChannelCard, Loader } from '../';

const Videos = ({ videos }) => {
  // if (!videos.length) {
  //   return <Loader />;
  // }
  return (
    <Stack
      width={'100%'}
      direction={'row'}
      flexWrap={'wrap'}
      justifyContent={'center'}
      alignItems={'center'}
      gap={2}
    >
      {videos && videos.map((item) => (
        <Box key={item.id.videoId} margin={'0 auto'}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
