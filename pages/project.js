import React from "react";
import Slider from "react-slick";

function Project() {
  const settings = {
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrow: false,
  };

  return (
    <div>
      <Slider {...settings}>
        <div>
          <img src="/assets/pt-indokordsa.png" />
        </div>
        <div>
          <img src="/assets/pt-caterpillar.png" />
        </div>
        <div>
          <img src="/assets/logo.png" />
        </div>
      </Slider>
    </div>
  );
}

export default Project;
