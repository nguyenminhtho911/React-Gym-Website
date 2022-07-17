/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import urlKey1 from "../Image/slide1.jpg";
import urlKey2 from "../Image/slide2.jpg";
import Slider from "react-slick";

const KeyVisual = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1300,
    fade: true,
    autoplay: true,
    pauseOnFocus: false,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} css={hidden}>
      <div css={styles} className="key1"></div>
      <div css={styles} className="key2"></div>
    </Slider>
  );
};

const styles = css`
  width: 100%;
  height: 100vh;
  &.key1 {
    background: url(${urlKey1}) no-repeat center / cover;
  }
  &.key2 {
    background: url(${urlKey2}) no-repeat center / cover;
  }
  @media (max-width: 1000px) {
  }
`;

const hidden = css`
  overflow: hidden;
`;

export default KeyVisual;
