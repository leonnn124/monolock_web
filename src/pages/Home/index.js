import React from 'react';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
import { Box } from '@mui/material';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import { Locklist } from '../../Locklist';
import RefreshIcon from '@mui/icons-material/Refresh';
import StatusList from '../../components/StatusList';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate('/Info?No=' + e.target.innerText, { state: e.target.innerText });
  };

  const handleClickStop = (e) => {
    e.preventDefault();
  };

  return (
    <div className="max-w-[630px] mx-auto flex flex-col items-center relative">
      <div className="absolute bottom-0 -right-[30%]">
        <StatusList />
      </div>
      <div className="flex items-center my-5">
        <div className="text-2xl">置物櫃當前使用狀態</div>
        <RefreshIcon />
      </div>
      <div>
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)' }}>
          {_.map(Locklist, (item, index) => (
            <Box
              key={index}
              onClick={
                item.lockerNo !== null
                  ? (e) => handleClick(e)
                  : () => handleClickStop
              }
              sx={{
                position: 'relative',
                cursor: 'pointer',
                width: 80,
                height: 80,
                background:
                  item.error === 1
                    ? '#FF5A5A'
                    : item.userId !== null
                    ? '#363F4E'
                    : '#FFFFFF',
                color:
                  item.error !== 1
                    ? item.userId !== null
                      ? '#FFFFFF'
                      : '#000000'
                    : '#FFFFFF',
                fontWeight: 'bold',
                borderRadius: '12%',
                border:
                  item.error !== 1
                    ? item.userId !== null
                      ? 'none'
                      : item.lockerNo === null
                      ? '1px dashed'
                      : '1px solid #000'
                    : item.userId !== null
                    ? 'none'
                    : '#363F4E',
                fontSize: '21px',
                textAlign: 'center',
                lineHeight: '80px',
                margin: '5px 5px 5px 5px',
                fontFamily: 'Mulish',
              }}
            >
              {item.lockerNo}
              {item.userId !== null && item.lockUp === 1 ? (
                <LockIcon
                  sx={{
                    position: 'absolute',
                    top: '5px',
                    right: '5px',
                    height: '16px',
                    width: '16px',
                  }}
                />
              ) : (
                ''
              )}
              {item.userId !== null && item.lockUp === 0 ? (
                <LockOpenIcon
                  sx={{
                    position: 'absolute',
                    top: '8px',
                    right: '5px',
                    height: '16px',
                    width: '16px',
                  }}
                />
              ) : (
                ''
              )}
            </Box>
          ))}
        </Box>
      </div>
    </div>
  );
};

export default Home;
