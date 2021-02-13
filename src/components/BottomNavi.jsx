import { AiFillHome, AiFillShopping } from "react-icons/ai";
import { FaTicketAlt } from "react-icons/fa";
import { GiPopcorn } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { useAppDispatchContext, useAppStateContext } from "../context/AppContext";
import React, { useCallback, useMemo } from "react";

const itemInfo = [
  { icon: <AiFillHome />, text: "홈", current: "home" },
  { icon: <AiFillShopping />, text: "스토어", current: "store" },
  { icon: <FaTicketAlt />, text: "예매", current: "booking" },
  { icon: <GiPopcorn />, text: "모바일오더", current: "mobileOrder" },
  { icon: <BsFillPersonFill />, text: "MY", current: "my" },
]

const BottomItem = React.memo(({ text, icon, current }) => {
  const state = useAppStateContext();
  const dispatch = useAppDispatchContext();

  console.log('bottom item');

  const setScreen = useCallback((e) => {
    dispatch({
      type: 'SET_SCREEN',
      screen: e.currentTarget.name
    });
    // eslint-disable-next-line
  }, []);

  return (
    <button className="bottomNaviBtn" onClick={setScreen} name={current}>
      <div>
        <div>{icon}</div>
        <div>{text}</div>
      </div>
    </button>
  );
});

const BottomNavi = () => {
  console.log('bottom navi')
  
  const memoItemInfo = useMemo(() => itemInfo, []);

  return (
    <div className="bottomNavi">
      {memoItemInfo.map((item, index) => (
        <BottomItem
          text={item.text}
          icon={item.icon}
          key={index}
          current={item.current}
        />
      ))}
    </div>
  );
};

export default React.memo(BottomNavi);
