import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Locklist } from '../Locklist';

const AddUser = () => {
  return (
    <>
      <div className="flex items-center gap-2">
        <AccountCircleIcon style={{ fontSize: '30', margin: '8px 0' }} />
        <TextField
          size="small"
          value={Locklist.userId}
          sx={{
            width: '100%',
            borderColor: '#000',
            margin: '6px',
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: 'gray',
              },
            },
          }}
          label="姓名"
          autoComplete="current-password"
          inputProps={{
            size: 'small',
            style: {},
          }}
        ></TextField>
      </div>
      <div className="flex items-center gap-2">
        <CreditCardIcon style={{ fontSize: '30', margin: '8px 0' }} />
        <TextField
          size="small"
          value={Locklist.card}
          sx={{
            width: '100%',
            borderColor: '#000',
            margin: '6px',
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: 'gray',
              },
            },
          }}
          label="卡號"
          autoComplete="current-password"
          inputProps={{
            style: {},
          }}
        ></TextField>
      </div>
      <div className="flex items-center gap-2">
        <PhoneAndroidIcon style={{ fontSize: '30', margin: '8px 0' }} />
        <TextField
          size="small"
          value={Locklist.phone}
          sx={{
            width: '100%',
            borderColor: '#000',
            margin: '6px',
            '& .MuiInputLabel-root': {},
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: 'gray',
              },
            },
          }}
          label="電話"
          autoComplete="current-password"
          inputProps={{
            style: {},
          }}
        ></TextField>
      </div>
      <div className="flex items-center gap-2">
        <MailOutlineIcon style={{ fontSize: '30', margin: '8px 0' }} />
        <TextField
          size="small"
          value={Locklist.email}
          sx={{
            width: '100%',
            borderColor: '#000',
            margin: '6px',
            '& .MuiOutlinedInput-root': {
              '&.Mui-focused fieldset': {
                borderColor: 'gray',
              },
            },
          }}
          label="電子信箱"
          autoComplete="current-password"
          inputProps={{
            style: {},
          }}
        ></TextField>
      </div>
      <div className="py-6">
        <Button
          variant="contained"
          style={{
            width: '41%',
            height: 39,
            background: '#363F4E',
            boxShadow: 'none',
            fontSize: 18,
            margin: 5,
          }}
        >
          儲存
        </Button>

        <Button
          variant="contained"
          style={{
            width: '41%',
            height: 39,
            background: '#363F4E',
            boxShadow: 'none',
            fontSize: 18,
            margin: 5,
          }}
        >
          取消
        </Button>
      </div>
    </>
  );
};

export default AddUser;
