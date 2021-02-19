import React, { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Link } from 'react-router-dom'
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
  
  useEffect(() => {
    if (document.URL==='http://localhost:3000/login' && isLoginWindowHidden) {
      toggleLoginWindow();
    }
  }, []);

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

      <div className='login-middle-input'>
        <input type="text" placeholder='아이디' />
        <input type="password" placeholder='비밀번호' />
      </div>

      <div className="login-middle-checkbox">
        <input type="checkbox" name="" id="auto-login"/> 
        <label for='auto-login'>자동 로그인</label>
      </div>

      <div className='login-middle-form'>
        <form action="">
          <button className='login-button'>로그인</button>
        </form>
      </div>

      <div className='login-bottom-links'>
        <div>
          <Link><span>ID/PW 찾기</span></Link> |
          <Link><span>회원가입</span></Link> |&nbsp;
          <Link><span>비회원 예매확인</span></Link>
        </div>
        <div>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <span>4</span>
        </div>
      </div>
      
    </div>
  );
}

export default React.memo(Login);
