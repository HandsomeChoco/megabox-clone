import React from 'react';
import Form from '../reusable/Form';
import Input from '../reusable/Input';
import { Top } from './Login';

const Join = ({ history }) => {
  console.log('join component', history);
  return (
    <div className="join">
      <Top text="회원가입" />
      <Form className="join-form">
        <Input placeholder="생년월일" />
        <Input placeholder="휴대전화번호" />
        <Input placeholder="아이디. 영문, 숫자 조합(8~12자)" />
        <Input placeholder="비밀번호. 영문, 숫자, 특수 기호 중 2가지 이상 조합" />
        <Input placeholder="비밀번호 검증" />
        <Input placeholder="이메일 주소를 입력해주세요." />
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
        <button className="">동의</button>
        <button className="">비동의</button>
        <button type="submit" className="join-submit-button">
          회원가입
        </button>
      </Form>
    </div>
  );
};

export default React.memo(Join);
