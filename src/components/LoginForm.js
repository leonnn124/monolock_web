import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, styled } from '@mui/material';

const LoginForm = () => {
  const CssTextField = styled(TextField)({
    '& .MuiFormHelperText-root': {
      '&.Mui-focused': {
        //提示文字
        color: '#02A2EE',
      },
    },
    '& label.Mui-focused': {
      //上排文字
      color: '#02A2EE',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'black',
      },
      '&:hover fieldset': {
        borderColor: 'black',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#363F4E', //FIELD 框
      },
    },
  });

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className="bg-white p-10 rounded-xl shadow-lg h-full">
      <form>
        <div className="flex flex-col gap-4">
          <div className="relative">
            <h1 className="text-3xl">Sign in</h1>
            <span className="text-black/20 text-xs absolute right-0 top-0">
              demo用途可輸入任意帳號密碼
            </span>
          </div>
          <div>
            <h2 className="my-4">帳號 Email</h2>
            <CssTextField
              required
              type="email"
              id="input-email"
              placeholder="請輸入帳號"
              sx={{ width: '100%' }}
              inputProps={{
                style: {
                  height: '14px',
                },
              }}
            />
          </div>
          <div>
            <h2 className="my-4">密碼 Password</h2>
            <CssTextField
              required
              type="password"
              id="input-password"
              placeholder="請輸入密碼"
              sx={{ width: '100%', borderColor: '#000' }}
              inputProps={{
                style: {
                  height: '14px',
                },
              }}
            />
          </div>
          <div className="py-12">
            <Button
              onClick={handleClick}
              type="submit"
              variant="contained"
              style={{
                width: '100%',
                height: 47,
                background: '#363F4E',
                boxShadow: 'none',
                fontSize: 24,
              }}
            >
              立即登入
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
