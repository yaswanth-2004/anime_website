import React from "react";
import Navbar from "./Navbar";
import slide2 from "../assets/slide2.jpg";
import slide3 from "../assets/slide3.jpg";
import { FiArrowRight, FiArrowLeft, FiPlayCircle } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";
import { FaCirclePlay } from "react-icons/fa6";import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Home = () => {
  const slides = [
    {
      image: slide3,
      title: "Bleach",
      description: "Ichigo Kurosaki is an ordinary high schooler—until his family is attacked by a Hollow, a corrupt spirit that seeks to devour human souls. It is then that he meets a Soul Reaper named Rukia Kuchiki, who gets injured while protecting Ichigo's family from th..",
      watchLink: "#",
      detailsLink: "#",
    },
    {
      image: slide2,
      title: "Exciting Stories Await",
      description: "This is the second slide description.",
      watchLink: "#",
      detailsLink: "#",
    },
    {
      image: slide2,
      title: "Exciting Stories Await",
      description: "This is the third slide description.",
      watchLink: "#",
      detailsLink: "#",
    },
  ];

  const trendingAnimes = [
    {
      id: 1,
      image: slide2,
      title: "Attack on Titan",
      detailsLink: "#",
    },
    {
      id: 2,
      image: slide3,
      title: "Demon Slayer",
      detailsLink: "#",
    },
    {
      id: 3,
      image: slide2,
      title: "One Piece",
      detailsLink: "#",
    },
    {
      id: 4,
      image: slide3,
      title: "Jujutsu Kaisen",
      detailsLink: "#",
    },
    {
      id: 5,
      image: slide3,
      title: "Jujutsu Kaisen",
      detailsLink: "#",
    },
    {
      id: 6,
      image: slide3,
      title: "Jujutsu Kaisen",
      detailsLink: "#",
    },
    {
      id: 7,
      image: slide3,
      title: "Jujutsu Kaisen",
      detailsLink: "#",
    },
  ];
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 6;
  const [slideDirection, setSlideDirection] = useState(""); 


  const handleNext = () => {
    if (startIndex + itemsPerPage < trendingAnimes.length) {
      setSlideDirection("right");
      setTimeout(() => {
        setStartIndex(startIndex + 1);
      }, 300); // Delay matches the slide animation
    }
  };

  const handlePrevious = () => {
    if (startIndex > 0) {
      setSlideDirection("left");
      setTimeout(() => {
        setStartIndex(startIndex - 1);
      }, 300); // Delay matches the slide animation
    }
  };

  const visibleAnimes = trendingAnimes.slice(startIndex, startIndex + itemsPerPage);


  return (
    <div className="bg-gray-900 text-white min-h-screen ">
      <Navbar />

      <div>
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation
          loop
          className="w-full h-[600px]"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute bottom-4 left-4 text-white bg-opacity-50 bg-black p-6 rounded right-20">
                  <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                  <p className="mb-4">{slide.description}</p>
                  <div className="flex gap-4">
                    <a
                      href={slide.watchLink}
                      className="px-6 flex items-center py-3 bg-violet-600 text-white rounded-lg  hover:bg-violet-700"
                    >
                      <h1>Watch Now</h1>
                      <FaCirclePlay className="ml-2 text-black" />
                    </a>
                    <a
                      href={slide.detailsLink}
                      className="px-6 py-3 flex justify-center items-center bg-gray-600 text-white rounded-lg hover:bg-gray-700"
                    >
                      <h1>Details</h1>
                      <IoIosArrowForward className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="mt-8 px-6 ml-2">
        <h2 className="text-2xl font-bold text-pink-400 mb-6">Trending</h2>
        <div className="relative flex items-center">
          <button
            onClick={handlePrevious}
            className={`absolute left-0 z-10 p-2 rounded-full bg-pink-400 hover:bg-pink-500 ${
              startIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={startIndex === 0}
          >
            <FiArrowLeft />
          </button>

          <div className="flex overflow-hidden space-x-10">
            {visibleAnimes.map((anime, index) => (
              <div
                key={anime.id}
                className="w-[200px] flex-shrink-0 bg-gray-800 rounded-lg shadow-lg relative mb-10"
              >
                <img
                  src={anime.image}
                  alt={anime.title}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <p className="text-sm font-semibold truncate">
                    {anime.title}
                  </p>
                </div>

                <div className="absolute left-2 top-2 bg-black bg-opacity-70 text-pink-400 text-sm rounded px-2 py-1">
                  {String(startIndex + index + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className={`absolute right-0 z-10 p-2 rounded-full bg-pink-400 hover:bg-pink-500 ${
              startIndex + itemsPerPage >= trendingAnimes.length
                ? "opacity-50 cursor-not-allowed"
                : ""
            }`}
            disabled={startIndex + itemsPerPage >= trendingAnimes.length}
          >
            <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
