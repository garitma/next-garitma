import React from "react";
import Carousel from "react-multi-carousel";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 3,
    slidesToSlide: 1,
    partialVisibilityGutter: 0,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 0,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 200,
    },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 0,
  },
};

export default class CarouselWithCustomDots extends React.Component {
  render() {
    const { document, children } = this.props;

    return (
      <Carousel
        ssr
        slidesToSlide={1}
        responsive={responsive}
        showDots
        arrows={false}
      >
        {children}
      </Carousel>
    );
  }
}
