import React from 'react';
import Slider from 'react-slick';

export default class MultiItemSlider extends React.Component {
  render(children) {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    };

    return <Slider {...settings}>{children}</Slider>;
  }
}

