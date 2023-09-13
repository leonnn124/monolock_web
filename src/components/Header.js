import React from 'react';
import { Outlet, useNavigate, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/login');
  };

  return (
    <div className="sticky">
      <AppBar position="static" elevation={0} style={{ background: '#363F4E' }}>
        <Toolbar>
          <div className="flex justify-between w-full px-4">
            <Link to="/" className="flex items-center gap-x-4">
              <img src="./mono.png" alt="" />
              <p className="appbarTitle">會員置物櫃管理系統</p>
            </Link>
            <Box sx={{ flexGrow: 1 }} />
            <div className="flex items-center gap-x-8">
              <Link to="/" className="flex items-center gap-x-2">
                <PersonIcon />
                <p>LEON</p>
              </Link>
              <div>
                <Button
                  variant="Logout"
                  style={{
                    border: '1px solid',
                    borderColor: '#fff',
                    borderSize: 'border-box',
                    borderRadius: '4px',
                    height: 36,
                    width: 116,
                    textTransform: 'none',
                  }}
                  onClick={handleClick}
                >
                  <LogoutIcon />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
      <Outlet />
    </div>
  );
};

export default Header;
