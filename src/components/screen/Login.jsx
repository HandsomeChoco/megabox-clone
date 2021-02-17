import React, {  } from 'react';
import { IoMdClose } from 'react-icons/io';
import {
  useAppDispatchContext,
  useAppStateContext,
} from '../../context/AppContext';

function Login() {
  console.log('login');
  const state = useAppStateContext();
  const dispatch = useAppDispatchContext();
  const { isLoginWindowHidden } = state;

  const toggleLoginWindow = () => {
    dispatch({
      type: 'TOGGLE_LOGIN_WINDOW',
    });
  };

  return (
    <div className={isLoginWindowHidden ? 'login loginHidden' : 'login'}>
      <div className="login-top">
        <div className="login-top-title">
          <h3>로그인</h3>
        </div>
        <div className="login-top-icon">
          <IoMdClose style={{ fontSize: 25 }} onClick={toggleLoginWindow} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Login);
