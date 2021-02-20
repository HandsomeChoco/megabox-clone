import React, { useEffect } from 'react';
import { RiKakaoTalkFill } from 'react-icons/ri'
import { IoMdClose } from 'react-icons/io';
import { FaFacebook, FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
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
    if (document.URL === 'http://localhost:3000/login' && isLoginWindowHidden) {
      toggleLoginWindow();
    }
    //eslint-disable-next-line
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

      <div className="login-middle-input">
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
      </div>

      <div className="login-middle-checkbox">
        <input type="checkbox" name="" id="auto-login" />
        <label for="auto-login">자동 로그인</label>
      </div>

      <div className="login-middle-form">
        <form action="" method="POST">
          <button className="login-button">로그인</button>
        </form>
      </div>

      <div className="login-bottom-links">
        <div className="login-bottom-account">
          <Link to="/">
            <span>ID/PW 찾기</span>
          </Link>
          |
          <Link to="/">
            <span>회원가입</span>
          </Link>
          |
          <Link to="/">
            <span>비회원 예매확인</span>
          </Link>
        </div>
        <div className="login-bottom-social">
          <span><FaFacebook className='fb'/></span>
          <span><FcGoogle className='google'/></span>
          <span><RiKakaoTalkFill className='kakao'/></span>
          <span><FaApple className='apple'/></span>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Login);
