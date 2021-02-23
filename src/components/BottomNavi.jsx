import { Link } from 'react-router-dom';
import { AiFillHome, AiFillShopping } from 'react-icons/ai';
import { FaTicketAlt } from 'react-icons/fa';
import { GiPopcorn } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import React, { useCallback, useMemo, useState } from 'react';

//prettier-ignore
const itemInfo = [
  { icon: <AiFillHome />, text: '홈', url: '', active: true },
  { icon: <AiFillShopping />, text: '스토어', url: 'store', active: false },
  { icon: <FaTicketAlt />, text: '예매', url: 'booking', active: false },
  { icon: <GiPopcorn />, text: '모바일오더', url: 'mobile_order', active: false },
  { icon: <BsFillPersonFill />, text: 'MY', url: 'my', active: false },
];

const BottomItem = React.memo(({ item, onClick, active, id }) => {
  console.log('bottom item', id);
  return (
    <Link
      to={item.url}
      className="bottomNaviAnchor"
      onClick={() => onClick(id)}
    >
      <button
        className={`bottomNaviBtn ${active ? 'active' : ''}`}
        name={item.url !== '' ? item.url : 'home'}
      >
        <div>
          <div>{item.icon}</div>
          <div>{item.text}</div>
        </div>
      </button>
    </Link>
  );
});

const BottomNavi = ({ history }) => {
  console.log('bottom navi', history);
  const memoItemInfo = useMemo(() => itemInfo, []);
  const [state, setState] = useState({ active: 0 });
  const { active } = state;

  //prettier-ignore
  const setActive = useCallback(id => 
    setState(state => ({ ...state, active: id })), []);

  return (
    <div className="bottomNavi">
      {memoItemInfo.map((item, index) => (
        <BottomItem
          item={item}
          key={index}
          id={index}
          onClick={setActive}
          active={active === index}
        />
      ))}
    </div>
  );
};

export default React.memo(BottomNavi);
