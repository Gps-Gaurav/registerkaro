
import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: "/logos/Image (1).png",
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      title: "Small business & Startup",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Tax & Audit", "Management"],
    },
    {
      id: 2,
      image: "/logos/Image (2).png",
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Tax", "Research", "Compliance"],
    },
    {
      id: 3,
      image: "/logos/Image (3).png",
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      title: "Growing Business Package",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the Industry.",
      tags: ["Audit", "Money Back"],
    },
    {
      id: 4,
      image: "/logos/Image (4).png",
      author: "Karan Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Collaboration can make our teams stronger, and our individual designs better.",
      tags: ["Money", "Management"],
    },
    {
      id: 5,
      image: "/logos/Image (5).png", // Replace with actual image URL
      author: "Richa Singh",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      tags: ["Tax Return", "News", "Audit"],
    },
    {
      id: 6,
      image: "/logos/Image (6).png",
      author: "Miss Nora",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Starting a community doesn't need to be complicated, but how do you get started?",
      tags: ["Private Limited Company", "Customer Success"],
    },
  ];

  return (
    <section id="blog" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-orange-500 text-sm uppercase text-center font-bold mb-4">
          Explore Our Blogs
        </h2>
        <h3 className="text-gray-900 text-3xl font-bold text-center mb-12">
          Accelerate Digital Transformation
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >

              <div className="relative h-52 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-white/90 backdrop-blur-sm text-gray-800 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>


              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <img
                    src={`https://ui-avatars.com/api/?name=${blog.author}&background=random`}
                    alt={blog.author}
                    className="w-6 h-6 rounded-full"
                  />
                  <p className="text-gray-600 text-sm">
                    {blog.author} • <span className="text-gray-400">{blog.date}</span>
                  </p>
                </div>

                <h4 className="text-gray-900 text-xl font-bold mb-2 hover:text-blue-600 transition-colors">
                  {blog.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {blog.description}
                </p>


                <div className="flex items-center text-blue-600 hover:text-blue-700 transition-colors">
                  <span className="text-sm font-medium">Read More</span>
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>


        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center gap-2 mx-auto">
            Show more blogs
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;