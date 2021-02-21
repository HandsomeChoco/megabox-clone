import React, { useCallback, useEffect, useRef } from 'react';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { IoMdClose } from 'react-icons/io';
import { FaFacebook, FaApple } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import {
  useAppDispatchContext,
  useAppStateContext,
} from '../../context/AppContext';
import Input from '../reusable/Input';
import Form from '../reusable/Form';

const Top = React.memo(({ goBack }) => {
  console.log('Top component in SideBar has been rendered!');

  return (
    <div className="login-top">
      <div className="login-top-title">
        <h3>로그인</h3>
      </div>
      <div className="login-top-icon">
        <IoMdClose style={{ fontSize: 25 }} onClick={goBack} />
      </div>
    </div>
  );
});

const Middle = React.memo(({ _ref }) => {
  console.log('Middle component in SideBar has been rendered')
 
  return (
    <div className="login-middle-input">
      <Form>
        <Input type="text" placeholder="아이디" name="userid" _ref={_ref}/>
        <Input type="password" placeholder="비밀번호" name="password" />

        <div className="login-middle-checkbox">
          <Input type="checkbox" id="auto-login" name="autoLoginCheck" />
          <label htmlFor="auto-login"> 자동 로그인</label>
        </div>
        <button className="login-button">로그인</button>
      </Form>
    </div>
  );
});

const Bottom = React.memo(() => {
  console.log('Bottom component in SideBar has been rendered')
  return (
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
        <span>
          <FaFacebook className="fb" />
        </span>
        <span>
          <FcGoogle className="google" />
        </span>
        <span>
          <RiKakaoTalkFill className="kakao" />
        </span>
        <span>
          <FaApple className="apple" />
        </span>
      </div>
    </div>
  );
});

const Login = ({ history }) => {
  console.log('login');
  const state = useAppStateContext();
  const dispatch = useAppDispatchContext();
  const { isLoginWindowHidden } = state;
  
  const initInput = useRef();

  const toggleLoginWindow = useCallback(() => {
    dispatch({
      type: 'TOGGLE_LOGIN_WINDOW',
    });
  }, []);

  const goBack = useCallback(() => {
    toggleLoginWindow();
    // X 버튼 누르면 다시 이전 URL 로 돌아가야 함
    // history.goBack();
  }, []);

  useEffect(() => {
    // URL 을 통해서 접근시 바로 로그인 페이지를 보여주기 위한 코드
    if (document.URL === 'http://localhost:3000/login' && isLoginWindowHidden) {
      toggleLoginWindow();
      initInput.current.focus(); 
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div className={isLoginWindowHidden ? 'login loginHidden' : 'login'}>
      <Top goBack={goBack} />
      <Middle _ref={initInput} />
      <Bottom />
    </div>
  );
};

export default React.memo(Login);
