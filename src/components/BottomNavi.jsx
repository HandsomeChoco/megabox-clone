import { Link } from 'react-router-dom';
import { AiFillHome, AiFillShopping } from 'react-icons/ai';
import { FaTicketAlt } from 'react-icons/fa';
import { GiPopcorn } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import React, { useState, useMemo, useCallback } from 'react';
//0, 183, 212 토글 컬러
const itemInfo = [
  { icon: <AiFillHome />, text: '홈', url: '' },
  { icon: <AiFillShopping />, text: '스토어', url: 'store' },
  { icon: <FaTicketAlt />, text: '예매', url: 'booking' },
  { icon: <GiPopcorn />, text: '모바일오더', url: 'mobile_order' },
  { icon: <BsFillPersonFill />, text: 'MY', url: 'my' },
];

const BottomItem = React.memo(({ text, icon, url, onClick }) => {
  console.log('bottom item');

  return (
    <Link to={url} className="bottomNaviAnchor" onClick={onClick}>
      <button className="bottomNaviBtn" name={url}>
        <div>
          <div>{icon}</div>
          <div>{text}</div>
        </div>
      </button>
    </Link>
  );
});

const BottomNavi = ({ history }) => {
  const [state, setState] = useState({ active: 'home' });

  console.log('bottom navi', history);
  const memoItemInfo = useMemo(() => itemInfo, []);

  const setActive = useCallback(index => {
    setState(state => ({ ...state, active: index }));
  }, []);

  return (
    <div className="bottomNavi">
      {memoItemInfo.map((item, index) => (
        <BottomItem
          text={item.text}
          icon={item.icon}
          key={index}
          url={item.url}
          onClick={setActive}
        />
      ))}
    </div>
  );
};

export default React.memo(BottomNavi);
