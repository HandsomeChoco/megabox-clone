import React, { useEffect } from 'react';
import Axios from 'axios';

import Story from './Story';
import Rank from './Rank';
import MovieFeed from './MovieFeed';
import GreetAndPreScreen from './GreetAndPreScreen';
import Event from './Event';
import Special from './Special';
import MoviePost from './MoviePost';

import useNetwork from '../../../hooks/useNetwork';

import getYesterDay from '../../../lib/date';
import key from '../../../lib/key.json';

// const getDailyBoxOfficeAPI = async () => {
//   .then(response => response.data);
//   return result;
// };

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
  const [state, setState] = useNetwork();
  console.log('Home');

  const result = async () => {
    let result;

    try {
      //prettier-ignore
      result = await Axios.get(`http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${key.privateKey}&targetDt=${getYesterDay()}`);
    } catch (e) {
      console.error(e);
    }
    return result.data;
  };

  result();

  useEffect(() => {});

  return (
    <div className="home">
      <Story />
      <HomeBody />
    </div>
  );
};

export default React.memo(Home);
