import React, { useState } from "react";
import { GrPrevious } from "react-icons/gr";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Slider = () => {
  const slides = [
    {
      id: 1,
      rating: "rating.svg",
      activity: "FUN",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      subtitle: "Preston S., Greer, SC",
      profile: "person1.svg",
      employe: "Agent: Nate Stainaker",
    },
    {
      id: 2,
      rating: "rating.svg",
      activity: "LISTENED",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      subtitle: "Preston S., Greer, SC",
      profile: "person2.svg",
      employe: "Agent: Nate Stainaker",
    },
    {
      id: 3,
      rating: "rating.svg",
      activity: "COMMUNICATION",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. Lorem Ipsum is simply dummy",
      subtitle: "Preston S., Greer, SC",
      profile: "person3.svg",
      employe: "Agent: Nate Stainaker",
    },
    {
      id: 4,
      rating: "rating.svg",
      activity: "AWESOME",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text. ",
      subtitle: "Preston S., Greer, SC",
      profile: "person4.svg",
      employe: "Agent: Nate Stainaker",
    },
    {
      id: 5,
      rating: "rating.svg",
      activity: "FUN",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      subtitle: "Preston S., Greer, SC",
      profile: "person3.svg",
      employe: "Agent: Nate Stainaker",
    },
    {
      id: 6,
      rating: "rating.svg",
      activity: "FUN",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      subtitle: "Preston S., Greer, SC",
      profile: "person2.svg",
      employe: "Agent: Nate Stainaker",
    },
    {
      id: 7,
      rating: "rating.svg",
      activity: "FUN",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      subtitle: "Preston S., Greer, SC",
      profile: "person1.svg",
      employe: "Agent: Nate Stainaker",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const Previous = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1)); // Move to the last slide if at the first
  };

  const Next = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1)); // Move to the first slide if at the last
  };

  return (
    <div className="relative container mx-auto px-16 bg-[#F6F6FF] py-36">
      <div className="text-left font-montserrat font-semibold flex flex-col gap-y-4 pl-11">
        <p className="text-[24px] text-[#021A56B0]">
          If this were a popularity contest,
        </p>
        <p className="text-[40px] text-[#021A56]">We win hands down.</p>
        <p className="text-[24px] text-[#595959]">
          That's easy to say when you're America's highest- rated <br></br> insurance
          provider. Which we are.
        </p>
      </div>

      {/* Slider Wrapper */}
      <div className="overflow-hidden ">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * (100 / 4)}%)`, // Move by 1 slide, showing 4 at a time
            width: `${(slides.length / 4) * 100}%`, // Adjust the width to fit all slides
          }}
        >
          {/* Render the slides */}
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="flex-shrink-0 p-4" // Adjust each slide width to fit 4 slides in view
            >
              <div className=" p-6  font-montserrat  flex flex-col w-[340px] items-start">
                <img
                  src={slide.rating}
                  alt={`Slide ${slide.id}`}
                  className="w-[138px] mb-4"
                />
                <p className="text-[24px] text-[#C50D00] mb-2 font-semibold">
                  "{slide.activity}"
                </p>
                <p className="text-[20px] text-[#021A56] mb-2 font-semibold text-left">
                  {slide.description}
                </p>
                <p className="text-[20px] pt-4 mb-2 font-semibold text-[#021A56]">
                  {slide.subtitle}
                </p>
                <img
                  src={slide.profile}
                  alt={`Profile ${slide.id}`}
                  className="w-[148px] h-[128px]  rounded-full mb-2"
                />
                <p className="text-sm font-semibold text-[#595959]">
                  {slide.employe}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={Previous}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
      >
        <GrPrevious />
      </button>
      <button
        onClick={Next}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100"
      >
        <MdOutlineArrowForwardIos />
      </button>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-4 space-x-2">
        {Array.from({ length: Math.ceil(slides.length / 4) }).map(
          (_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index * 4)}
              className={`w-3 h-3 rounded-full cursor-pointer ${
                currentSlide >= index * 4 && currentSlide < (index + 1) * 4
                  ? "bg-blue-500"
                  : "bg-gray-300"
              }`}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Slider;
