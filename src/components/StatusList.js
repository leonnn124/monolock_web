import React from 'react';
import { Box, Paper } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';

const StatusList = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          width: 128,
          height: 176,
          borderRadius: '10%',
          borderColor: '#000000',
          border: '1px solid ',
        },
      }}
    >
      <Paper elevation={0}>
        <div className="flex flex-col items-center justify-center gap-y-4 h-full">
          <div className="flex gap-x-2">
            <LockOpenIcon
              sx={{
                color: '#363F4E',
                height: '16px',
                width: '16px',
              }}
            ></LockOpenIcon>
            開啟中
          </div>
          <div className="flex gap-x-2">
            <LockIcon
              sx={{
                color: '#363F4E',
                height: '16px',
                width: '16px',
              }}
            ></LockIcon>
            關閉中
          </div>
          <div className="flex gap-x-2">
            <CircleIcon
              sx={{
                color: '#363F4E',
                height: '16px',
                width: '16px',
              }}
            ></CircleIcon>
            使用中
          </div>
          <div className="flex gap-x-2">
            <CircleIcon
              sx={{
                color: '#FFFFFF',
                borderRadius: '50%',
                height: '13.33px',
                width: '13.33px',
                margin: '1px',
                boxSizing: 'border-box',
                border: '1px solid #000',
              }}
            ></CircleIcon>
            可使用
          </div>
          <div className="flex gap-x-2">
            <CircleIcon
              sx={{
                color: '#FF5A5A',
                height: '16px',
                width: '16px',
              }}
            ></CircleIcon>
            &ensp;異常&ensp;
          </div>
        </div>
      </Paper>
    </Box>
  );
};

export default StatusList;
