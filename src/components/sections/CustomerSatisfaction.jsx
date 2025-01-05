import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomerSatisfaction = () => {
    const testimonials = [
        {
            quote: "We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years, and I'm extremely pleased with their performance, ability to execute, and willingness to adapt in our ever-changing environment. Perry is an outstanding leader who is fanatical about customer satisfaction. He has built a solid team that has consistently delivered on projects, thereby exceeding everyone's expectations.",
            author: "Chris",
            role: "President and CEO, PrintReach, USA",
            avatar: "/chris-avatar.jpg",
            rating: 4.3
        },
        {
            quote: "Outstanding service and professional support. The team's dedication to customer satisfaction is remarkable. They delivered beyond our expectations and helped streamline our operations significantly.",
            author: "Sarah",
            role: "CTO, TechStart, UK",
            avatar: "/sarah-avatar.jpg",
            rating: 4.5
        },
        {
            quote: "Excellent experience working with the team. Their expertise in compliance and business solutions made our company registration process smooth and hassle-free.",
            author: "Michael",
            role: "Founder, InnovateHub, Australia",
            avatar: "/michael-avatar.jpg",
            rating: 4.8
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false
                }
            }
        ]
    };

    return (
        <section className="bg-gray-100 py-8 md:py-12">
            <div className="container mx-auto px-4 md:px-6 lg:px-12">
                {/* Header Section */}
                <div className="text-center mb-8 md:mb-10">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-orange-500 mb-2">
                        87.6% Customer Satisfaction
                    </h2>
                    <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-800">
                        Serving Clients Across the Globe
                    </h3>
                </div>

                {/* Slider Section */}
                <Slider {...settings} className="max-w-4xl mx-auto testimonial-slider">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="px-2 md:px-4">
                            <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 lg:p-8">
                                {/* Quote */}
                                <blockquote className="text-gray-700 text-base md:text-lg italic mb-6 md:mb-8">
                                    <span className="text-blue-600 text-xl md:text-2xl font-bold">"</span>
                                    {testimonial.quote}
                                    <span className="text-blue-600 text-xl md:text-2xl font-bold">"</span>
                                </blockquote>

                                {/* Author and Rating Section */}
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
                                    {/* Author Info */}
                                    <div className="flex items-center">
                                        <img
                                            src="/logos/div.lazyloaded (1).png"
                                            alt={testimonial.author}
                                            className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-gray-300"
                                        />
                                        <div className="ml-3 md:ml-4">
                                            <p className="font-bold text-orange-600 text-sm md:text-base">
                                                {testimonial.author}
                                            </p>
                                            <p className="text-xs md:text-sm text-gray-500">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Rating Section */}
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                                        {/* Google Reviews */}
                                        <div className="flex items-center">
                                            <img
                                                src="/logos/Vector (7).png"
                                                alt=""
                                                className="w-6 h-6 md:w-8 md:h-8"
                                            />
                                            <span className="ml-2 text-sm md:text-base text-gray-600">
                                                Google Reviews
                                            </span>
                                        </div>

                                        {/* Star Rating */}
                                        <div className="flex items-center">
                                            <div className="flex text-yellow-500">
                                                {[...Array(5)].map((_, i) => (
                                                    <svg
                                                        key={i}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 24 24"
                                                        className={`w-4 h-4 md:w-5 md:h-5 ${i < Math.floor(testimonial.rating)
                                                                ? 'text-yellow-500'
                                                                : 'text-gray-400'
                                                            }`}
                                                    >
                                                        <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845 1.419 8.261L12 18.897l-7.419 4.632L6 15.268 0 9.423l8.332-1.268z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            <span className="ml-2 text-sm md:text-base text-gray-600">
                                                {testimonial.rating}/5
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <style jsx global>{`
                .testimonial-slider .slick-dots li button:before {
                    color: #f97316;
                }
                .testimonial-slider .slick-dots li.slick-active button:before {
                    color: #f97316;
                }
                .testimonial-slider .slick-prev:before,
                .testimonial-slider .slick-next:before {
                    color: #f97316;
                    font-size: 24px;
                }
                .testimonial-slider .slick-prev {
                    left: -25px;
                }
                .testimonial-slider .slick-next {
                    right: -25px;
                }
                @media (max-width: 640px) {
                    .testimonial-slider .slick-prev,
                    .testimonial-slider .slick-next {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default CustomerSatisfaction;