import { useState, useEffect, useCallback } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import b4fImg from "../assets/b4f.png";
import nigeImg from "../assets/nige.jpg";
import barucImg from "../assets/baruc.jpg";
import inteImg from "../assets/inte.jpg";
import maryImg from "../assets/mary.jpg";
import janeImg from "../assets/jane.jpg";
import paulImg from "../assets/paul.jpg";
import robertoImg from "../assets/roberto.jpg";
import romImg from "../assets/rom.jpg";

function Home() {
  const slides = [
    {
      url: romImg,
    },
    {
      url: nigeImg,
    },
    {
      url: barucImg,
    },
    {
      url: inteImg,
    },
    {
      url: paulImg,
    },
    {
      url: robertoImg,
    },
    {
      url: maryImg,
    },
    {
      url: janeImg,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides.length]);

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex, nextSlide]);

  return (
    <div
      name="home"
      className="flex flex-col lg:flex-row"
      style={{
        backgroundImage: `url(${b4fImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Carousel Section */}
      <div className="flex justify-center items-center h-screen w-full lg:w-1/2">
        <div className="max-w-[1000px] h-[650px] w-full m-auto py-16 px-4 content-end relative group">
          <div
            style={{
              backgroundImage: `url(${slides[currentIndex].url})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
            className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          ></div>
          {/* Left Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          {/* Right Arrow */}
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex top-4 justify-center py-2">
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className="text-2xl cursor-pointer"
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-center items-center max-w-7xl p-2 space-y-3 w-full lg:w-1/2">
        <div className="flex flex-col text-white md:items-start items-center justify-between space-y-3 px-8 mb-20">
          <div className="text-4xl md:text-6xl lg:text-7xl font-bold animate-pulse">
            Sangguniang Kabataan
          </div>
          <div className="text-4xl md:text-6xl lg:text-3xl font-bold animate-pulse">
            Barangay Makuguihon
          </div>
          <div className="text-xl md:text-3xl cursor-pointer hover:text-yellow-500">
            brgymakuguihon.org.ph
          </div>
          {/* <button className="btn btn-xs md:btn-md rounded-lg md:text-2xl hover:bg-black/30 transition-colors duration-300 bg-red-900">
            Get Started
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
