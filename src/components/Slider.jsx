import { useState, useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { list as people } from "../data";

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent(prevCurr => (prevCurr - 1 + people.length) % people.length);
  };

  const nextSlide = () => {
    setCurrent(prevCurr => (prevCurr + 1) % people.length);
  };

  useEffect(() => {
    const sliderInterval = setInterval(() => nextSlide(), 2000);

    return () => clearInterval(sliderInterval);
  }, [current]);

  return (
    <div className="slider-container">
      {people.map((person, index) => {
        const { id, image, name, title, quote } = person;

        return (
          <article
            className="slide"
            style={{
              transform: `translateX(${100 * (index - current)}%)`,
              opacity: index === current ? 1 : 0,
            }}
            key={id}>
            <img src={image} alt={name} className="person-img" />
            <h5 className="name">{name}</h5>
            <p className="title">{title}</p>
            <p className="text">{quote}</p>
            <FaQuoteRight className="icon" />
          </article>
        );
      })}

      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>
      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </div>
  );
};

export default Slider;
