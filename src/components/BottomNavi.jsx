import { Link } from 'react-router-dom';
import { AiFillHome, AiFillShopping } from 'react-icons/ai';
import { FaTicketAlt } from 'react-icons/fa';
import { GiPopcorn } from 'react-icons/gi';
import { BsFillPersonFill } from 'react-icons/bs';
import { useAppDispatchContext } from '../context/AppContext';
import React, { useCallback, useMemo } from 'react';

const itemInfo = [
  { icon: <AiFillHome />, text: '홈', url: '' },
  { icon: <AiFillShopping />, text: '스토어', url: 'store' },
  { icon: <FaTicketAlt />, text: '예매', url: 'booking' },
  { icon: <GiPopcorn />, text: '모바일오더', url: 'mobile_order' },
  { icon: <BsFillPersonFill />, text: 'MY', url: 'my' },
];

const BottomItem = React.memo(({ text, icon, url }) => {
  console.log('bottom item');

  return (
    <Link to={url} className="bottomNaviAnchor">
      <button className="bottomNaviBtn" name={url}>
        <div>
          <div>{icon}</div>
          <div>{text}</div>
        </div>
      </button>
    </Link>
  );
});

const BottomNavi = () => {
  console.log('bottom navi');
  const memoItemInfo = useMemo(() => itemInfo, []);

  return (
    <div className="bottomNavi">
      {memoItemInfo.map((item, index) => (
        <BottomItem
          text={item.text}
          icon={item.icon}
          key={index}
          url={item.url}
        />
      ))}
    </div>
  );
};

export default React.memo(BottomNavi);
