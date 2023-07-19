import React, { useState, useEffect } from 'react';
import { ReactComponent as LeftArrow } from '../../assets/slider_left-arrow.svg';
import { ReactComponent as RightArrow } from '../../assets/slider_right-arrow.svg';
import './_index.scss';

function Carousel(props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const location = props.location;
  const [count, setCount] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex =>
        prevIndex === location.pictures.length - 1 ? 0 : prevIndex + 1
      );
      setCount(prevCount =>
        prevCount === location.pictures.length ? 1 : prevCount + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [location.pictures.length]);

  const handlePreviousClick = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? location.pictures.length - 1 : prevIndex - 1
    );
    setCount(prevCount =>
      prevCount === 1 ? location.pictures.length : prevCount - 1
    );
  };

  const handleNextClick = () => {
    setCurrentIndex(prevIndex =>
      prevIndex === location.pictures.length - 1 ? 0 : prevIndex + 1
    );
    setCount(prevCount =>
      prevCount === location.pictures.length ? 1 : prevCount + 1
    );
  };

  useEffect(() => {
    if (currentIndex < 0) {
      setCurrentIndex(location.pictures.length - 1);
      setCount(location.pictures.length);
    } else if (currentIndex >= location.pictures.length) {
      setCurrentIndex(0);
      setCount(1);
    }
  }, [currentIndex, location.pictures.length]);

  return (
    <div className="container_carousel">
      {location.pictures.length > 1 && (
        <div className="arrows-container">
          <LeftArrow onClick={handlePreviousClick} className='arrow' />
          <p className="slide--counter">{`${count}/${location.pictures.length}`}</p>
          <RightArrow onClick={handleNextClick} className='arrow' />
        </div>
      )}
      <img src={location.pictures[currentIndex]} alt={location.title} className="caroussel__img" />
    </div>
  );
}

export default Carousel;
