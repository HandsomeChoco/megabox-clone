import React from 'react';
import Story from './Story';
import Rank from './Rank';
import MovieFeed from './MovieFeed';
import GreetAndPreScreen from './GreetAndPreScreen';
import Event from './Event';
import Special from './Special';
import MoviePost from './MoviePost';

const HomeBody = React.memo(() => {
  return (
    <div className="home-body">
      <Rank />
      <MovieFeed />
      <GreetAndPreScreen />
      <Event />
      <Special />
      <MoviePost />
    </div>
  );
});

const Home = () => {
  console.log('Home');
  return (
    <div className="home">
      <Story />
      <HomeBody />
    </div>
  );
};

export default React.memo(Home);
