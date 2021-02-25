import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
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

const Poster = React.memo(() => {
  return <li className="poster">Poster image</li>;
});

const Rank = () => {
  return (
    <div className="home-body-rank">
      {tags.map((tag, index) => (
        <HashTag text={'#' + tag} key={index} />
      ))}

      <div>
        <div className="poster-wrapper">
          <Poster />
          <Poster />
          <Poster />
          <Poster />
        </div>
        <div className="poster-lookup">
          더 많은 영화보기 <MdKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Rank);
