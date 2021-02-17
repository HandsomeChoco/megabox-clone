import React, { } from 'react';
import { IoMdClose } from 'react-icons/io';
import { RiHome2Line, RiTicketLine } from 'react-icons/ri';
import { BiBookAdd, BiMovie, BiShoppingBag } from 'react-icons/bi';
import { GiFilmSpool } from 'react-icons/gi';
import { CgScreen } from 'react-icons/cg';
import { BsPerson } from 'react-icons/bs';
import { IoFastFoodOutline, IoMegaphoneOutline } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';
import '../App.css';
import {
  useAppDispatchContext,
  useAppStateContext,
} from '../context/AppContext';

const SideBarHeader = React.memo(() => {
  console.log('SideBarHeader');

  const dispatch = useAppDispatchContext();

  const toggleSideBar = () => {
    dispatch({
      type: 'TOGGLE_SIDEBAR',
    });
  };

  const toggleLoginWindow = () => {
    dispatch({
      type: 'TOGGLE_LOGIN_WINDOW',
    });
  }

  return (
    <div className="sideBar-Header">
      <div className="sideBar-Header-Top">
        <span>
          <a href="/" onClick={toggleLoginWindow}>
            로그인
          </a>{' '}
          후 이용하세요!
        </span>
        <span>
          <RiHome2Line style={{ fontSize: 25, paddingRight: '0.5rem' }} />
          <IoMdClose style={{ fontSize: 25 }} onClick={toggleSideBar} />
        </span>
      </div>
      <div className="sideBar-Header-Bottom">
        <div>
          <span>
            <BiBookAdd />
          </span>
          <span> 회원가입</span>
        </div>
        <div>
          <span>
            <RiTicketLine />
          </span>
          <span> 비회원 예매확인</span>
        </div>
      </div>
    </div>
  );
});

const sideBarShopItem = [
  { element: <GiFilmSpool />, text: '영화별 예매' },
  { element: <CgScreen />, text: '극장별 예매' },
  { element: <BsPerson />, text: '나의 메가박스' },
  { element: <BiMovie />, text: '영화' },
  { element: <BiShoppingBag />, text: '스토어' },
  { element: <IoFastFoodOutline />, text: '모바일 오더' },
];

const SideBarShopItem = React.memo(({ element, text }) => {
  console.log('SideBarShopItem');
  return (
    <div className="sideBar-Shop-Item">
      <div className="sideBar-Shop-Item-IconWrapper">{element}</div>
      <div className="sideBar-Shop-Item-Text">{text}</div>
    </div>
  );
});

const SideBarShop = React.memo(() => {
  console.log('SideBarShop');
  return (
    <div className="sideBar-Shop">
      {sideBarShopItem.map((items, index) => (
        <SideBarShopItem
          element={items.element}
          text={items.text}
          key={index}
        />
      ))}
    </div>
  );
});

const SideBarMenu = React.memo(() => {
  console.log('SideBarMenu');
  return (
    <div className="sideBar-Menu">
      <div className="sideBar-Menu-Item">
        <span>이벤트</span>
      </div>
      <div className="sideBar-Menu-Item">
        <span>포토카드</span>
      </div>
      <div className="sideBar-Menu-Item">
        <span>극장안내</span>
      </div>
      <div className="sideBar-Menu-Item">
        <span>무비포스트</span>
      </div>
      <div className="sideBar-Menu-Item">
        <span>더 부티크 프라이빗 예매</span>
      </div>
      <div className="sideBar-Menu-Item">
        <span>제휴/할인 안내</span>
      </div>
      <div
        className="sideBar-Menu-Item"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <span>멤버십 안내</span>
        <span>
          <MdKeyboardArrowDown />
        </span>
      </div>
      <div className="sideBar-Menu-Item">
        <span>고객센터</span>
      </div>
    </div>
  );
});

const SideBarNotice = React.memo(() => {
  console.log('SideBarNotice');
  return (
    <div className="sideBar-Notice">
      <IoMegaphoneOutline />
      &nbsp;[공지] 메가박스 개인정보 처리 방침 변경 안내
    </div>
  );
});

const SideBar = () => {
  console.log('SideBar');
  const state = useAppStateContext();
  const { isSideBarHidden } = state;

  return (
    <div className={isSideBarHidden ? 'sideBar sideBar-hidden' : 'sideBar'}>
      <SideBarHeader />
      <SideBarShop />
      <SideBarMenu />
      <SideBarNotice />
    </div>
  );
};

export default React.memo(SideBar);
