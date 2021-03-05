import React, { useCallback } from 'react';
import { RiTicket2Line } from 'react-icons/ri';
import { AiOutlineBell } from 'react-icons/ai';
import { GoThreeBars } from 'react-icons/go';
import {
  useAppDispatchContext,
  useAppStateContext,
} from '../context/AppContext';

const iconStyle = {
  color: 'white',
  fontSize: 25,
};

const TopNavi = () => {
  console.log('TopNavi');
  const state = useAppStateContext();
  const dispatch = useAppDispatchContext();

  const toggleSideBar = () => {
    dispatch({
      type: 'TOGGLE_SIDEBAR',
    });
  };

  const topNaviRender = useCallback(() => {
    console.log(`topNaviRender has been called!`);
    const color = { color: 'white' };

    switch (state.topNaviLogo) {
      case '':
        return (
          <img src="megabox.jpg" style={{ height: 25 }} alt="메가박스 로고" />
        );
      case 'store':
        return <span style={color}>스토어</span>;

      case 'booking':
        return <span style={color}>예매</span>;

      case 'mobile_order':
        return <span style={color}>모바일오더</span>;

      case 'my':
        return <span style={color}>나의 메가박스</span>;

      default:
        return <span style={color}>error</span>; // 좋은 생각 같지 않은데... 딱히 떠오르는 더 좋은 방법이 없다
    }
  }, [state.topNaviLogo]);

  return (
    <div className="topNavi">
      <div>
        <span>
          <RiTicket2Line style={{ ...iconStyle, paddingLeft: '1rem' }} />
        </span>
      </div>
      <div>
        <span>{topNaviRender()}</span>
      </div>
      <div>
        <span>
          <span>
            <AiOutlineBell style={{ ...iconStyle, paddingRight: '0.5rem' }} />
          </span>
          <span onClick={toggleSideBar}>
            <GoThreeBars style={{ ...iconStyle, paddingRight: '1rem' }} />
          </span>
        </span>
      </div>
    </div>
  );
};

export default React.memo(TopNavi);
