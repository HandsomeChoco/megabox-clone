import React, { useEffect, useCallback } from 'react';
import Axios from 'axios';

import Story from './Story';
import Rank from './Rank';
import MovieFeed from './MovieFeed';
import GreetAndPreScreen from './GreetAndPreScreen';
import Event from './Event';
import Special from './Special';
import MoviePost from './MoviePost';

import key from '../../../lib/key.json';
import CustomContext, {
  useCustomContextDispatch,
  useCustomContextState,
} from '../../../context/CustomContext';

const HomeBody = React.memo(() => {
  const state = useCustomContextState();
  const dispatch = useCustomContextDispatch();
  console.log('HomeBody component rendered!', state);

  const getTrendyMovies = useCallback(async () => {
    console.log('getTendyMovie function called!');
    let response;
    try {
      //prettier-ignore
      response = await Axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${key.privateKey}`);
    } catch (e) {
      console.error(e);
    }
    dispatch({
      type: 'GET',
      response,
    });
  }, [state.data]);

  useEffect(() => {
    getTrendyMovies();
  }, []);

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
    <CustomContext>
      <div className="home">
        <Story />
        <HomeBody />
      </div>
    </CustomContext>
  );
};

export default React.memo(Home);
