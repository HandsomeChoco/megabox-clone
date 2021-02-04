import { AiFillHome, AiFillShopping } from "react-icons/ai";
import { FaTicketAlt } from "react-icons/fa";
import { GiPopcorn } from "react-icons/gi";
import { BsFillPersonFill } from "react-icons/bs";
import { useAppStateContext } from "../context/AppContext";

const itemInfo = [
  { icon: <AiFillHome />, text: "홈", current: "home" },
  { icon: <AiFillShopping />, text: "스토어", current: "store" },
  { icon: <FaTicketAlt />, text: "예매", current: "booking" },
  { icon: <GiPopcorn />, text: "모바일오더", current: "mobileOrder" },
  { icon: <BsFillPersonFill />, text: "MY", current: "my" },
];

const BottomItem = ({ text, icon, onClick }) => {
  return (
    <button className="bottomNaviBtn" onClick={onClick}>
      <div>
        <div>{icon}</div>
        <div>{text}</div>
      </div>
    </button>
  );
};

const BottomNavi = () => {
  // eslint-disable-next-line
  const [state, setState] = useAppStateContext();

  return (
    <div className="bottomNavi">
      {itemInfo.map((item, index) => (
        <BottomItem
          text={item.text}
          icon={item.icon}
          key={index}
          onClick={() => setState({ current: item.current })}
        />
      ))}
    </div>
  );
};

export default BottomNavi;
