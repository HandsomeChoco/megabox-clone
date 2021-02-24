import React from 'react';

const StoryItem = React.memo(() => {
  return <li className="home-story-item">1</li>;
});

const Story = () => {
  return (
    <div className="home-story-wrapper">
      <StoryItem />
      <StoryItem />
      <StoryItem />
      <StoryItem />
    </div>
  );
};

export default React.memo(Story);
