import Axios from 'axios';
import React, { useCallback, useEffect } from 'react';
import useInputs from '../../hooks/useInputs';
import Form from '../reusable/Form';
import Input from '../reusable/Input';
import { Top } from './Login';

const initState = {
  inputs: {
    birthday: '',
    phone: '',
    userId: '',
    password: '',
    passwordVerify: '',
    email: '',
    agree: false,
  },
};

const Join = ({ history }) => {
  console.log('join component', history);
  //eslint-disable-next-line
  const [state, onChange, onToggle, setInputState] = useInputs(initState);
  const {
    birthday,
    phone,
    userId,
    password,
    passwordVerify,
    email,
    agree,
  } = state.inputs;

  const setAgree = useCallback((e) => {
    e.preventDefault();
    setInputState((state) => ({
      ...state,
      inputs: { ...state.inputs, agree: true },
    }));
  }, []);

  const setDisagree = useCallback((e) => {
    e.preventDefault();
    setInputState((state) => ({
      ...state,
      inputs: { ...state.inputs, agree: false },
    }));
  }, []);

  const sendState = async (url, data) => {
    await Axios.post(url, data);
  };

  const sendJoinRequest = useCallback(
    async (e) => {
      e.preventDefault();
      try {
        await sendState('http://localhost:6666', state);
      } catch {
        alert(
          '전송에 실패하였습니다. 지금 뜨는 에러는 정상입니다. 데이터를 보낼 곳이 없거든요',
        );
      }
    },
    [state],
  );

  useEffect(() => {
    // 중복 체크 및 입력값 유효성 검사는 여기서
  }, []);

  return (
    <div className="join">
      <Top text="회원가입" />
      <Form className="join-form">
        <Input
          placeholder="생년월일"
          name="birthday"
          value={birthday}
          onChange={onChange}
        />
        <Input
          placeholder="휴대전화번호"
          name="phone"
          value={phone}
          onChange={onChange}
        />
        <Input
          placeholder="아이디. 영문, 숫자 조합(8~12자)"
          name="userId"
          value={userId}
          onChange={onChange}
        />
        <Input
          type="password"
          placeholder="비밀번호. 영문, 숫자, 특수 기호 중 2가지 이상 조합"
          name="password"
          value={password}
          onChange={onChange}
        />
        <Input
          type="password"
          placeholder="비밀번호 검증"
          name="passwordVerify"
          value={passwordVerify}
          onChange={onChange}
        />
        <Input
          type="email"
          placeholder="이메일 주소를 입력해주세요."
          name="email"
          value={email}
          onChange={onChange}
        />

        <div>
          <h3>무인발권기 기능 설정</h3>
          <span>* '생년월일 + 휴대폰번호로' 티켓 출력</span>
          <span>여기 버튼</span>
        </div>

        <div>
          <h3>나만의 메가박스</h3>
          <span>자주 방문하는 메가박스를 등록해주세요!</span>
        </div>

        <div>
          <h3>마케팅 활용을 위한 개인정보 수집 이용 안내(선택)</h3>

          <span>
            <h4>수집목적</h4>
            고객맞춤형 상품 및 서비스 추천, 당사 신규 상품/서비스 안내 및 권유,
            사은 할인 행사 등 각종 이벤트 정보 동의 안내 및 권유
          </span>
          <span>
            <h4>수집항목</h4>
            이메일, 휴대폰번호, 주소, 생년월일, 선호극장, 문자/이메일/앱푸쉬
            정보수신동의여부, 서비스 이용기록, 포인트 적립 및 사용 정보,
            접속로그
          </span>
          <span>
            <h4>보유 및 이용기간</h4>
            회원 탈퇴 시 혹은 이용 목적 달성 시 까지
          </span>
        </div>
        <div className="join-agree-button-wrapper">
          <button
            className={`join-agree-button${agree ? ' agreed' : ''}`}
            onClick={setAgree}
          >
            동의
          </button>
          <button
            className={`join-agree-button${agree ? '' : ' agreed'}`}
            onClick={setDisagree}
          >
            비동의
          </button>
        </div>

        <button
          type="submit"
          className="join-submit-button"
          onClick={sendJoinRequest}
        >
          회원가입
        </button>
      </Form>
    </div>
  );
};

export default React.memo(Join);
