import React from 'react';
import LoginForm from '../../components/LoginForm';

const Login = () => {
  return (
    <div className="flex w-full h-screen items-center bg-[#f5f5f5]">
      <div className="w-[40%] flex flex-col justify-center items-center bg-[#363f4e] h-full">
        <p className="text-white text-xl mb-4">會員置物櫃管理系統</p>
        <img src="./mono-l.png" alt="" className="loginBoardLogo" />
      </div>
      <div className="w-[60%] px-48 py-28 h-full">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
