import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import MultiItemSlider from '../../reusable/MultiItemSlider';
import { AiFillStar } from 'react-icons/ai';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const tags = [
  '박스오피스',
  '상영예정',
  '단독',
  'N스크린',
  '돌비시네마',
  '클소',
  '필소',
];

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
};

const HashTag = React.memo(({ text }) => {
  return <span className="hash-tag">{text}</span>;
});

const Poster = React.memo(({ title, ratio, src, score }) => {
  return (
    <li className="poster">
      <div>
        <img src={`/imgs/${src}`} alt="" className="poster-image" />
      </div>
      <div>
        <div>{title}</div>
        <div>
          <span>예매율: {ratio}%</span>
          <span>
            <AiFillStar />
            {score}
          </span>
        </div>
        <div>
          <button className="poster-bookBtn">바로예매</button>
        </div>
      </div>
    </li>
  );
});

const Rank = () => {
  return (
    <div className="home-body-rank">
      {tags.map((tag, index) => (
        <HashTag text={'#' + tag} key={index} />
      ))}

      <div>
        <div className="poster-wrapper">
          <MultiItemSlider settings={settings}>
            <Poster title="어벤저스: 엔드게임" src="/endgame.jpg" />
            <Poster />
            <Poster />
            <Poster />
            <Poster />
            <Poster />
            <Poster />
            <Poster />
            <Poster />
          </MultiItemSlider>
        </div>

        <div className="poster-lookup">
          더 많은 영화보기 <MdKeyboardArrowRight />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Rank);
