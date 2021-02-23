import React from 'react';

const StoryItem = React.memo(() => {
  return <li className="home-story-item">1</li>;
});

const Story = React.memo(() => {
  return (
    <div className="home-story-wrapper">
      <StoryItem />
      <StoryItem />
      <StoryItem />
      <StoryItem />
    </div>
  );
});

const Rank = React.memo(() => {
  return <div className="home-body-rank">MovieRank</div>;
});

const MovieFeed = React.memo(() => {
  return (
    <div className="home-body-feed">
      <h3>무비피드</h3>
    </div>
  );
});

const GreetAndPreScreen = React.memo(() => {
  return (
    <div className="home-body-theater">
      <h3>무대인사 & 시사</h3>
    </div>
  );
});

const Event = React.memo(() => {
  return (
    <div className="home-body-event">
      <h3>이벤트</h3>
    </div>
  );
});

const Special = React.memo(() => {
  return (
    <div className="home-body-special">
      <h3>특별관</h3>
    </div>
  );
});

const MoviePost = React.memo(() => {
  return (
    <div className="home-body-post">
      <h3>무비 포스트</h3>
    </div>
  );
});

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
