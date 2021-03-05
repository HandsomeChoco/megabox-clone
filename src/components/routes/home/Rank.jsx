import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import MultiItemSlider from '../../reusable/MultiItemSlider';
import { AiFillStar } from 'react-icons/ai';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useCustomContextState } from '../../../context/CustomContext';

const tags = [
  '박스오피스',
  '상영예정',
  '단독',
  'N스크린',
  '돌비시네마',
  '클소',
  '필소',
];

const posterSettings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  lazyLoad: true,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
};

const hashTagSettings = {
  dots: false,
  infinite: false,
  variableWidth: true,
};

const HashTag = React.memo(({ text }) => {
  return <span className="hash-tag">{text}</span>;
});

const Poster = React.memo(({ title, ratio, src, score, onClick, id }) => {
  return (
    <li className="poster">
      <div>
        <img src={src} alt="" className="poster-image" />
      </div>
      <div className="poster-movie-info">
        <h4>{title}</h4>
        <div className="poster-movie-info-ratio">
          <span>예매율: {ratio}%</span>
          <span>
            <AiFillStar className="star" />
            {score}
          </span>
        </div>
        <div>
          <button className="poster-bookBtn" onClick={() => onClick(id)}>
            바로예매
          </button>
        </div>
      </div>
    </li>
  );
});

const Rank = () => {
  console.log('Home => HomeBody => Rank component rendered!');
  const state = useCustomContextState();
  const { data } = state;

  return (
    <div className="home-body-rank">
      <MultiItemSlider settings={hashTagSettings}>
        {tags.map((tag, index) => (
          <HashTag text={'#' + tag} key={index} className="hash-tag" />
        ))}
      </MultiItemSlider>

      <div>
        <div className="poster-wrapper">
          <MultiItemSlider settings={posterSettings}>
            {data.map((v, i) => (
              <Poster
                id={i}
                key={i}
                title={v.original_title}
                src={`https://image.tmdb.org/t/p/original${v.poster_path}`}
                score={v.vote_average}
                ratio={v.popularity}
              />
            ))}
            <div className="poster-explore">
              <div>더보기</div>
            </div>
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
