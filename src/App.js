import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import BottomNavi from './components/BottomNavi';
import SideBar from './components/SideBar';
import TopNavi from './components/TopNavi';
import Login from './components/screen/Login';
import Screen from './components/screen/Screen';

function App() {
  console.log('App');

  return (
    <>
      <Container>
        <TopNavi />
        <SideBar />
        <Route path="/">
          <BottomNavi />
        </Route>
        <Screen />
      </Container>
    </>
  );
}

export default React.memo(App);
