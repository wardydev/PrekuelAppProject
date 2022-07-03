import React from 'react';
// import CarouselItem from '../../components/CarouselBanner/CarouselItem';
import PostItem from '../../components/PostArticles/PostItem';

export const renderPostCarousel = ({item, i}) => {
  return <PostItem data={item} key={i} />;
};
