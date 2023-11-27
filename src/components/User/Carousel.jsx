import React, {useState, useEffect } from 'react'
import { ArrowRightIcon, ArrowLeftIcon, StopCircleIcon } from '@heroicons/react/24/outline'
import { banner1, banner2, banner3, weather, carousel1024p1,carousel1024p2,carousel1024p3,carousel1440p1,carousel1440p2,carousel1440p3,carousel2650p1,carousel2650p2,carousel2650p3, } from '../../assets';
const Carousel = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []);

  const slides = [
    //pic 1
    {
      url: windowWidth <= 1024 ? carousel1024p1 :
         windowWidth <= 1440 ? carousel1440p1 :
         windowWidth <= 2560 ? carousel2650p1 :
        weather
    },//pic2
    {
      url: windowWidth <= 1024 ? carousel1024p2:
      windowWidth <= 1440 ? carousel1440p2 :
      windowWidth <= 2560 ? carousel2650p2 :
     weather
    },//pic3
    {
      url: windowWidth <= 1024 ? carousel1024p3 :
      windowWidth <= 1440 ? carousel1440p3 :
      windowWidth <= 2560 ? carousel2650p3 :
     weather
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const [autoplay, setAutoplay] = useState(true);
  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        nextSlide();
      }, 3000); // 3 seconds auto
    };
    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, autoplay]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
     <div className='max-w-screen h-[780px] w-full mt-[101px]  relative group z-0'>
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className='w-full h-full bg-center bg-local bg-cover duration-500 z-0'
      ></div>
      {/* Left Arrow */}
      <div className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full  bg-black/20 text-white cursor-pointer'>
        <ArrowLeftIcon onClick={prevSlide} size={30} className='w-6 h-6' />
      </div>
      {/* Right Arrow */}
      <div className=' absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full bg-black/20 text-white cursor-pointer'>
        <ArrowRightIcon onClick={nextSlide} size={30}  className='w-6 h-6' />
      </div>
      {/* <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className='text-2xl cursor-pointer'
          >
            <StopCircleIcon className='w-6 h-6' />
          </div>
        ))}
      </div> */}
    </div>
  );
}

export default Carousel