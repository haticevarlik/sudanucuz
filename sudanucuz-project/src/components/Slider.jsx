import React, { useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';

const items = [
  {
    src: 'https://images.pexels.com/photos/5868126/pexels-photo-5868126.jpeg?_gl=1*n5eiuh*_ga*NTYzMzc5ODY0LjE3NTIwODE2NjM.*_ga_8JE65Q40S6*czE3NTQ2Mzg4MDYkbzIkZzEkdDE3NTQ2Mzk1OTgkajUxJGwwJGgw',
    altText: 'Slide 1',
    caption: 'Slide 1',
    key: 1,
  },
  {
    src: 'https://images.pexels.com/photos/5868730/pexels-photo-5868730.jpeg?_gl=1*1eywtn8*_ga*NTYzMzc5ODY0LjE3NTIwODE2NjM.*_ga_8JE65Q40S6*czE3NTQ2Mzg4MDYkbzIkZzEkdDE3NTQ2MzkzNDkkajYwJGwwJGgw',
    altText: 'Slide 2',
    caption: 'Slide 2',
    key: 2,
  },
];

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => (
    <CarouselItem onExiting={() => setAnimating(true)} onExited={() => setAnimating(false)} key={item.src}>
        <div className="relative h-[600px] w-full sm:w-auto sm:h-full md:h-full md:w-auto lg:h-[500px] overflow-hidden">
            <img src={item.src} className="block h-full object-cover object-left sm:w-full sm:h-auto" />
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center sm:items-start sm:text-left text-white pl-0 sm:pl-48 space-y-4 sm:w-full">
                <p className="text-sm tracking-widest">SUMMER 2025</p>
                <h1 className="text-3xl font-bold leading-tight sm:text-left ">NEW<br />COLLECTION</h1>
                <p className="text-sm leading-relaxed px-24 sm:px-0">
                    We know how large objects will act, but things on a small scale.
                </p>
                <button className="bg-green-500 text-white px-6 py-2 rounded font-semibold hover:bg-green-600 transition"> SHOP NOW </button>
            </div>
        </div>
      <CarouselCaption  />

    </CarouselItem>
  ));

  return (
    <div className="flex flex-col items-center">
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default App;