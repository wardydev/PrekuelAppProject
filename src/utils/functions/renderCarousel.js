import React from 'react';
import CarouselItem from '../../components/CarouselBanner/CarouselItem';

export const renderCarousel = ({item, i}) => {
  return <CarouselItem data={item && item} key={i} />;
};
