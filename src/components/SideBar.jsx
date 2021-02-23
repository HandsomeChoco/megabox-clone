import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
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

  const toggleSideBar = useCallback(() => {
    dispatch({
      type: 'TOGGLE_SIDEBAR',
    });
    //eslint-disable-next-line
  }, []);

  const toggleLoginWindow = useCallback(() => {
    dispatch({
      type: 'TOGGLE_LOGIN_WINDOW',
    });
    //eslint-disable-next-line
  }, []);

  return (
    <div className="sideBar-header">
      <div className="sideBar-header-top">
        <span>
          <Link
            to="/login"
            onClick={toggleLoginWindow}
            className="sideBar-header-login"
          >
            로그인
          </Link>
          &nbsp;후 이용하세요!
        </span>
        <span>
          <RiHome2Line style={{ fontSize: 25, paddingRight: '0.5rem' }} />
          <IoMdClose style={{ fontSize: 25 }} onClick={toggleSideBar} />
        </span>
      </div>
      <div className="sideBar-header-bottom">
        <div>
          <Link to="/join" className="sideBar-header-bottom-links">
            <BiBookAdd />
            &nbsp;회원가입
          </Link>
        </div>
        <div>
          <Link to="/get_booked" className="sideBar-header-bottom-links">
            <RiTicketLine />
            &nbsp;비회원 예매확인
          </Link>
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
    <div className="sideBar-shop-item">
      <div className="sideBar-shop-item-iconWrapper">{element}</div>
      <div className="sideBar-shop-item-text">{text}</div>
    </div>
  );
});

const SideBarShop = React.memo(() => {
  console.log('SideBarShop');
  return (
    <div className="sideBar-shop">
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
    <div className="sideBar-menu">
      <div className="sideBar-menu-item">
        <span>이벤트</span>
      </div>
      <div className="sideBar-menu-item">
        <span>포토카드</span>
      </div>
      <div className="sideBar-menu-item">
        <span>극장안내</span>
      </div>
      <div className="sideBar-menu-item">
        <span>무비포스트</span>
      </div>
      <div className="sideBar-menu-item">
        <span>더 부티크 프라이빗 예매</span>
      </div>
      <div className="sideBar-menu-item">
        <span>제휴/할인 안내</span>
      </div>
      <div
        className="sideBar-menu-item"
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <span>멤버십 안내</span>
        <span>
          <MdKeyboardArrowDown />
        </span>
      </div>
      <div className="sideBar-menu-item">
        <span>고객센터</span>
      </div>
    </div>
  );
});

const SideBarNotice = React.memo(() => {
  console.log('SideBarNotice');
  return (
    <div className="sideBar-notice">
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
