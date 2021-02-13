import React from 'react';
import './App.css';
import Container from './components/Container';
import BottomNavi from './components/BottomNavi';
import SideBar from './components/SideBar';
import TopNavi from './components/TopNavi';
import Home from './components/screen/Home';
import Store from './components/screen/Store';
import Booking from './components/screen/Booking';
import MobileOrder from './components/screen/MobileOrder';
import My from './components/screen/My';
import { useAppStateContext } from './context/AppContext';
function App() {
  const state = useAppStateContext();
  console.log('App');

  const Screen = () => {
    console.log('Screen function');
    switch (state.screen) {
      case 'home':
        return <Home />;
      case 'store':
        return <Store />;
      case 'booking':
        return <Booking />;
      case 'mobileOrder':
        return <MobileOrder />;
      case 'my':
        return <My />;
      default:
        throw new Error(`Unhandled current screen type: ${state.current}`);
    }
  };

  return (
    <>
      <Container>
        <TopNavi />
        <SideBar />
        <BottomNavi />
        {Screen()}
      </Container>
    </>
  );
}

export default React.memo(App);
