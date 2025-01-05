import React from "react";

const CustomerSatisfaction = () => {
    return (
        <section className="bg-gray-100 py-12">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                {/* Heading */}
                <h2 className="text-2xl font-bold text-orange-500 mb-2">
                    87.6% Customer Satisfaction
                </h2>
                <h3 className="text-xl font-semibold text-gray-800">
                    Serving Clients Across the Globe
                </h3>

                {/* Testimonial Content */}
                <div className="mt-8 max-w-4xl mx-auto">
                    <blockquote className="text-gray-700 text-lg italic">
                        <span className="text-blue-600 text-2xl font-bold">“</span>
                        We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years, and I’m extremely pleased with their performance, ability to execute, and willingness to adapt in our ever-changing environment. Perry is an outstanding leader who is fanatical about customer satisfaction. He has built a solid team that has consistently delivered on projects, thereby exceeding everyone’s expectations. I would strongly recommend their services to any organization looking for solid, reliable, and predictable outcomes.
                        <span className="text-blue-600 text-2xl font-bold">”</span>
                    </blockquote>

                    {/* Author Information */}
                    <div className="mt-6 flex items-center justify-center">
                        <img
                            src="/chris-avatar.jpg"
                            alt="Chris"
                            className="w-16 h-16 rounded-full border-2 border-gray-300"
                        />
                        <div className="ml-4 text-left">
                            <p className="font-bold text-orange-600">Chris</p>
                            <p className="text-sm text-gray-500">
                                President and CEO, PrintReach, USA
                            </p>
                        </div>
                    </div>
                </div>

                {/* Reviews */}
                <div className="mt-8 flex items-center justify-center">
                    <div className="flex items-center">
                        <img
                            src="/google-logo.png"
                            alt="Google Reviews"
                            className="w-8 h-8"
                        />
                        <span className="ml-2 text-gray-600">Google Reviews</span>
                    </div>
                    <div className="ml-4 flex items-center">
                        <div className="flex text-yellow-500">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-5 h-5"
                            >
                                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845 1.419 8.261L12 18.897l-7.419 4.632L6 15.268 0 9.423l8.332-1.268z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-5 h-5"
                            >
                                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845 1.419 8.261L12 18.897l-7.419 4.632L6 15.268 0 9.423l8.332-1.268z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-5 h-5"
                            >
                                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845 1.419 8.261L12 18.897l-7.419 4.632L6 15.268 0 9.423l8.332-1.268z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-5 h-5"
                            >
                                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845 1.419 8.261L12 18.897l-7.419 4.632L6 15.268 0 9.423l8.332-1.268z" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-5 h-5 text-gray-400"
                            >
                                <path d="M12 .587l3.668 7.568L24 9.423l-6 5.845 1.419 8.261L12 18.897l-7.419 4.632L6 15.268 0 9.423l8.332-1.268z" />
                            </svg>
                        </div>
                        <span className="ml-2 text-gray-600">4.3/5</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomerSatisfaction;
