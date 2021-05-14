import React from 'react';
import { Carousel } from 'react-materialize';

const SiteImage = () => {
  return (
    <Carousel
      carouselId='Carousel-2'
      images={[
        'disinfect.jpg',
        'brush.jpg',
        'cdc.jpg',
        'spray.jpg',
        'wash.jpg',
      ]}
      options={{
        dist: -100,
        duration: 200,
        fullWidth: false,
        indicators: false,
        noWrap: false,
        numVisible: 5,
        onCycleTo: null,
        padding: 0,
        shift: 0,
      }}
    />
  );
};
export default SiteImage;
