import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from '@mui/material';
import React from 'react';
import { colors } from '../../constants/colors';
import moment from 'moment/moment';
import { CheckCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const VideoCard = ({ video }) => {
  console.log(video);

  return (
    <Card
      sx={{
        width: {
          xs: '90vw',
          sm: '360px',
          md: '320px',

          background: colors.primary,
          paddingBottom:'1rem',
        },
        boxShadow: 'none',
        borderRadius: 0,
      }}
    >
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia
          image={video?.snippet?.thumbnails?.high?.url}
          alt={video?.snippet?.title}
          sx={{
            width: {
              xs: '100%',
              sm: '360px',
            },
            height: '180px',
          }}
        />
      </Link>
      <CardContent
        sx={{
  
          height: '200px',
          position: 'relative',

        }}
      >
        <Link to={`/video/${video.id.videoId}`}>
          <Typography
            my={'5px'}
            sx={{
              opacity: '.4',
            }}
          >
            {moment(video?.snippet.publishedAt).fromNow()}
          </Typography>
          <Typography variant='subtitle1' fontWeight={'bold'}>
            {video?.snippet?.title.slice(0, 30)}
          </Typography>
          <Typography
            variant='subtitle2'
            sx={{
              opacity: '.6',
            }}
          >
            {video?.snippet?.description.slice(0, 50)}
          </Typography>
        </Link>
        <Link to={`/channel/${video?.snippet?.channelId}`}>
          <Stack
            direction={'row'}
            position={'absolute'}
            bottom={'5px'}
            alignItems={'center'}
            gap={'5px'}
          >
            <Avatar src={'https://img.freepik.com/free-photo/grunge-black-concrete-textured-background_53876-124541.jpg'} />
            <Typography variant='subtitle2' color='gray'>
              {video?.snippet?.channelTitle}
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
      </CardContent>
    </Card>
  );
};

export default VideoCard;
