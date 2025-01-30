import { useState } from 'react';
import SlideItems from './SlideItems';

const Features = () => {
  const [offset, setOffset] = useState(0);

  const slideWidth = 294 + 120;

  const handlePrevClick = () => {
    if (offset > 0) {
      setOffset(offset - slideWidth);
    }
  };

  const handleNextClick = () => {
    const maxOffset = (7 - 3) * slideWidth;
    if (offset < maxOffset) {
      setOffset(offset + slideWidth);
    }
  };

  return (
    <div className="features">
      <div className="container">
        <h1 className="title">особенности работы</h1>
        <h2 className="features__subtitle">компании Saffari Estate</h2>

        <div className="features__carousel">
          <div className="features__carouesel-buttons">
            <span
              id="arrow-left"
              className={`arrow arrow-left ${offset === 0 ? 'disabled' : ''}`}
              onClick={handlePrevClick}></span>
            <span
              id="arrow-right"
              className={`arrow arrow-right ${offset === (7 - 1) * slideWidth ? 'disabled' : ''}`}
              onClick={handleNextClick}></span>
          </div>
          <div
            className="features__carousel-content"
            style={{ transform: `translateX(-${offset}px)`, transition: '0.2s' }}>
            <SlideItems />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
