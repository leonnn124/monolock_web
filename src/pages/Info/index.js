import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import DeleteButton from '../../components/DeleteButton';
import {
  CheckCircleIconStyle,
  AccessTimeFilledIconStyle,
  CancelIconStyle,
} from '../../components/IconStyle';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import RefreshIcon from '@mui/icons-material/Refresh';
import { Locklist } from '../../Locklist';
import UserRecord from '../../components/UserRecord';
import UserInfo from '../../components/UserInfo';
import AddUser from '../../components/AddUser';

const Info = () => {
  const navigate = useNavigate();

  const location = useLocation();

  const [error, setError] = React.useState(false);

  const handleClick = () => {
    navigate('/');
  };

  const handleRefresh = () => {};

  useEffect(() => {
    if (Locklist[location.state].error === 1) {
      setError(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="w-full">
      <div>
        <button onClick={handleClick}>
          <img src="./chevron.png" alt="" />
        </button>
      </div>

      <div className="flex w-full">
        <div className="w-[40%] h-[600px] flex items-center justify-center">
          <div className="flex flex-col rounded-sm shadow-lg p-10 h-full">
            <div className="flex items-center gap-x-4 text-2xl">
              {Locklist[location.state].lockUp === 1 ? (
                <LockIcon />
              ) : (
                <LockOpenIcon />
              )}
              <h1>置物櫃 - {location.state}</h1>
              <DeleteButton />
            </div>
            <>
              {error ? (
                <CancelIconStyle />
              ) : Locklist[location.state].userId !== null ? (
                <CheckCircleIconStyle />
              ) : (
                <AccessTimeFilledIconStyle />
              )}
            </>
            <div className="my-8">
              {Locklist[location.state].userId === null ? (
                <AddUser />
              ) : (
                <UserInfo />
              )}
            </div>
          </div>
        </div>
        <div className="w-[50%] flex flex-col rounded-sm shadow-lg p-10">
          <div className="flex text-2xl items-center mb-4">
            <span>操作紀錄</span>
            <RefreshIcon
              sx={{ cursor: 'pointer', height: '20px' }}
              onClick={handleRefresh}
            />
          </div>
          <UserRecord records={Locklist[location.state]} />
        </div>
      </div>
    </div>
  );
};

export default Info;
