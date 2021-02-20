import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Container from './components/Container';
import BottomNavi from './components/BottomNavi';
import SideBar from './components/SideBar';
import TopNavi from './components/TopNavi';
import Router from './components/screen/Router';

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
        <Router />
      </Container>
    </>
  );
}

export default React.memo(App);
