import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { ApiService } from '../../service/api.service';
import { Avatar, Box, Chip, Stack, Typography } from '@mui/material';
import ReactPlayer from 'react-player';
import { Loader, Videos } from '../';
import {
  CheckCircle,
  FavoriteOutlined,
  MarkChatRead,
  Tag,
  Visibility,
} from '@mui/icons-material';
const VideoDetail = () => {
  const { id } = useParams();
  const [videoDetail, setVideoDetail] = useState(null);
  const [relatedVideo, setRelatedVideo] = useState(null);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(
          `videos?pSart=snippet,statistics&id=${id}`
        );
        setVideoDetail(data.items[0]);
        const relatedData = await ApiService.fetching(
          `search?part=snippet&relatedToVideoId=${id}&type=video`
        );
        setRelatedVideo(relatedData.items);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;
  return (
    <Box minHeight={'90vh'} mb={10}>
      {videoDetail && (
        <Box
          display={'flex'}
          sx={{
            flexDirection: {
              xs: 'column',
              md: 'row',
            },
          }}
        >
          <Box
            width={{
              xs: '100%',
              md: '75%',
            }}
          >
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${id}`}
              className='react-player'
              controls
            />
            {videoDetail &&
              videoDetail.snippet.tags.map((item, index) => {
                return (
                  <Chip
                    label={item}
                    key={index}
                    sx={{
                      marginTop: '10px',
                      cursor: 'pointer',
                      ml: '10px',
                    }}
                    deleteIcon={<Tag />}
                    onDelete={() => {}}
                    variant='outlined'
                  ></Chip>
                );
              })}
            <Typography variant='h5' fontWeight={'bold'} p={2}>
              {videoDetail.snippet.title}
            </Typography>
            <Typography
              variant='subtitle2'
              p={2}
              sx={{
                opacity: '0.7',
              }}
            >
              {videoDetail.snippet.description}
            </Typography>

            <Stack
              direction={'row'}
              gap={'20px'}
              alignItems={'center'}
              py={1}
              px={2}
            >
              <Stack
                sx={{ opacity: 0.7 }}
                direction={'row'}
                alignItems={'center'}
                gap={'3px'}
              >
                <Visibility />
                {parseInt(
                  videoDetail.statistics.viewCount
                ).toLocaleString()}{' '}
                views
              </Stack>
              <Stack
                sx={{ opacity: 0.7 }}
                direction={'row'}
                alignItems={'center'}
                gap={'3px'}
              >
                <FavoriteOutlined />
                {parseInt(
                  videoDetail.statistics.viewCount
                ).toLocaleString()}{' '}
                likes
              </Stack>
              <Stack
                sx={{ opacity: 0.7 }}
                direction={'row'}
                alignItems={'center'}
                gap={'3px'}
              >
                <MarkChatRead />
                {parseInt(
                  videoDetail.statistics.viewCount
                ).toLocaleString()}{' '}
                comment
              </Stack>
            </Stack>
            <Stack direction={'row'} py={1} px={2}>
              <Link to={`/channel/${videoDetail?.snippet?.channelId}`}>
                <Stack
                  direction={'row'}
                  alignItems={'center'}
                  gap={'5px'}
                  marginTop={'5px'}
                >
                  <Avatar
                    alt={videoDetail.snippet.channelTitle}
                    src={
                      'https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg'
                    }
                  />
                  <Typography variant='subtitle2' color='gray'>
                    {videoDetail.snippet.channelTitle}
                    <CheckCircle
                      sx={{
                        fontSize: '12px',
                        color: 'gray',
                        ml: '5px',
                      }}
                    />
                  </Typography>
                </Stack>
              </Link>
            </Stack>
          </Box>
          <Box
            width={{
              xs: '100%',
              md: '25%',
            }}
            px={2}
            py={{
              md: 1,
              xs: 5,
            }}
            justifyContent={'center'}
            alignItems={'center'}
            overflow={'scroll'}
            maxHeight={'120vh'}
          >
            <Videos videos={relatedVideo && relatedVideo} />
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default VideoDetail;
