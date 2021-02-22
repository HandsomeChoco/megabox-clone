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
import useInputs from '../../hooks/useInputs';

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

const Middle = React.memo(
  ({
    _ref,
    inputState,
    _onSubmit,
    onChangeId,
    onChangePW,
    onChangeCheckBox,
  }) => {
    const { userid, password, autoLoginConfirm } = inputState;
    console.log('Middle component in SideBar has been rendered');

    return (
      <div className="login-middle-input">
        <Form onSubmit={_onSubmit}>
          <Input
            type="text"
            placeholder="아이디"
            value={userid}
            name="userid"
            _ref={_ref}
            onChange={onChangeId}
          />
          <Input
            type="password"
            placeholder="비밀번호"
            value={password}
            name="password"
            onChange={onChangePW}
          />

          <div className="login-middle-checkbox">
            <Input
              type="checkbox"
              id="auto-login"
              name="autoLoginConfirm"
              defaultChecked={autoLoginConfirm}
              onChange={onChangeCheckBox}
            />
            <label htmlFor="auto-login"> 자동 로그인</label>
          </div>
          <button className="login-button">로그인</button>
        </Form>
      </div>
    );
  },
);

const Bottom = React.memo(() => {
  console.log('Bottom component in SideBar has been rendered');
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

const initState = {
  userid: '',
  password: '',
  autoLoginConfirm: false,
};

const Login = ({ history }) => {
  console.log('login');
  const state = useAppStateContext();
  const dispatch = useAppDispatchContext();
  const { isLoginWindowHidden } = state;
  const initInput = useRef();
  const [inputState, onChange, onToggle] = useInputs(initState);

  const toggleLoginWindow = useCallback(() => {
    dispatch({
      type: 'TOGGLE_LOGIN_WINDOW',
    });
  }, []);

  const goBack = useCallback(() => {
    toggleLoginWindow();
    // X 버튼 누르면 다시 이전 URL 로 돌아가야 함
    // history.back();
  }, []);

  const sendLoginInfo = useCallback(e => {
    e.preventDefault();
    alert('test');
  }, []);

  useEffect(() => {
    // URL 을 통해서 접근시 바로 로그인 페이지를 보여주기 위한 코드
    if (isLoginWindowHidden) {
      toggleLoginWindow();
      initInput.current.focus();
    }
    //eslint-disable-next-line
  }, []);

  return (
    <div className={isLoginWindowHidden ? 'login loginHidden' : 'login'}>
      <Top goBack={goBack} />
      <Middle
        _ref={initInput}
        inputState={inputState}
        _onSubmit={sendLoginInfo}
        onChangeId={onChange}
        onChangePW={onChange}
        onChangeCheckBox={onToggle}
      />
      <Bottom />
    </div>
  );
};

export default React.memo(Login);
