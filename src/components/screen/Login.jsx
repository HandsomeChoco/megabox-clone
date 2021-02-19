import React, { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import {
  useAppDispatchContext,
  useAppStateContext,
} from '../../context/AppContext';

function Login({ history }) {
  console.log('login');
  const state = useAppStateContext();
  const dispatch = useAppDispatchContext();
  const { isLoginWindowHidden } = state;

  const toggleLoginWindow = () => {
    dispatch({
      type: 'TOGGLE_LOGIN_WINDOW',
    });
  };

  const goBack = () => {
    toggleLoginWindow();
    // history.goBack();
  };

  console.log(document.URL, history);
  useEffect(() => {});

  return (
    <div className={isLoginWindowHidden ? 'login loginHidden' : 'login'}>
      <div className="login-top">
        <div className="login-top-title">
          <h3>로그인</h3>
        </div>
        <div className="login-top-icon">
          <IoMdClose style={{ fontSize: 25 }} onClick={goBack} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Login);
