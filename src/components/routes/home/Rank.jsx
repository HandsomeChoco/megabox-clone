import React from 'react';

const tags = [
  '박스오피스',
  '상영예정',
  '단독',
  'N스크린',
  '돌비시네마',
  '클소',
  '필소',
];

const HashTag = React.memo(({ text }) => {
  return <span className="hash-tag">{text}</span>;
});

const Rank = () => {
  return (
    <div className="home-body-rank">
      {tags.map((tag, index) => (
        <HashTag text={'#' + tag} key={index} />
      ))}
    </div>
  );
};

export default React.memo(Rank);
