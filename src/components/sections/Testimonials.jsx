import React from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const TestimonialsCarousel = () => {
  const testimonials = [
    {
      id: 1,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      name: "Chris",
      role: "President and CEO, PrintReach, USA",
      rating: 4.5,
      image: "/logos/div.lazyloaded.png",
    },
    {
      id: 2,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      name: "Chris",
      role: "President and CEO, PrintReach, USA",
      rating: 5,
      image: "/logos/div.lazyloaded.png",
    },
    {
      id: 3,
      text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident.",
      name: "Chris",
      role: "President and CEO, PrintReach, USA",
      rating: 5,
      image: "/logos/div.lazyloaded.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="bg-blue-900 py-12">
      <h2 className="text-white text-3xl font-bold text-center mb-8">
        What peoples says about us
      </h2>
      <div className="container mx-auto px-4">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-2">
              <div className="bg-white rounded-lg p-6 shadow-lg text-center h-full">
                <div className="text-blue-900 text-4xl mb-4">"</div>
                <p className="text-gray-600 text-sm mb-4 line-clamp-4">
                  {testimonial.text}
                </p>
                <div className="flex justify-center my-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">
                      {i + 1 <= Math.floor(testimonial.rating) ? "★" : i < testimonial.rating ? "☆" : "☆"}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-center mt-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="text-gray-800 font-bold text-sm">{testimonial.name}</h3>
                    <p className="text-gray-600 text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
