
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

import AppContext, { useAppStateContext } from './context/AppContext';

function App() {
  // eslint-disable-next-line
  const state = useAppStateContext();
  
  const Screen = () => {
    switch (state.currentScreen) {
      case 'home' : return <Home/>
      case 'store' : return <Store/>
      case 'booking' : return <Booking/>
      case 'mobileOrder' : return <MobileOrder/>
      case 'my' : return <My/>
      default : throw new Error(`Unhandled current screen type: ${state.current}`)
    }
  };

  return (
    <>
      <AppContext>
        <Container>
          <TopNavi/>
          <SideBar/>
          <BottomNavi/>
        </Container>
      </AppContext>
     
    </>
  );
}

export default App;
