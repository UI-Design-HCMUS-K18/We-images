import * as React from 'react';
import CollectionLayout from "./Layout";
import Carousel from 'react-elastic-carousel';
import data from './data';

const breakPoints = [
  { width: 1, itemsToShow: 1, itemsToScroll: 1 },
  { width: 500, itemsToShow: 2, itemsToScroll: 2 },
  { width: 750, itemsToShow: 3, itemsToScroll: 3 },
  { width: 1000, itemsToShow: 4, itemsToScroll: 4 },
  { width: 1500, itemsToShow: 5, itemsToScroll: 5 },
  { width: 2000, itemsToShow: 6, itemsToScroll: 6 }
];

export default function ArtistList() {
  const carouselRef = React.useRef(null);
  const onNextStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(0);
    }
  };
  const onPrevStart = (currentItem, nextItem) => {
    if (currentItem.index === nextItem.index) {
      carouselRef.current.goTo(data.length);
    }
  };

  return (
    <Carousel
      style={{ width: "100%", marginTop: "20px" }}
      breakPoints={breakPoints}
      ref={carouselRef}
      onPrevStart={onPrevStart}
      onNextStart={onNextStart}
      disableArrowsOnEnd={false}>
      {data.map(item => {
        return (<CollectionLayout collection={item}></CollectionLayout>);
      })}
    </Carousel>
  );
}