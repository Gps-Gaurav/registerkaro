import React from "react";

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      image: "https://via.placeholder.com/300", // Replace with actual image URL
      author: "Prabhash Mishra",
      date: "1 Jan 2023",
      title: "Small business & Startup",
      description:
        "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
      tags: ["Tax & Audit", "Management"],
    },
    {
      id: 2,
      image: "https://via.placeholder.com/300", // Replace with actual image URL
      author: "Mahesh Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Mental models are simple expressions of complex processes or relationships.",
      tags: ["Tax", "Research", "Compliance"],
    },
    {
      id: 3,
      image: "https://via.placeholder.com/300", // Replace with actual image URL
      author: "Rakhi Verma",
      date: "1 Jan 2023",
      title: "Growing Business Package",
      description:
        "Introduction to Wireframing and its Principles. Learn from the best in the Industry.",
      tags: ["Audit", "Money Back"],
    },
    {
      id: 4,
      image: "https://via.placeholder.com/300", // Replace with actual image URL
      author: "Karan Kumar",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Collaboration can make our teams stronger, and our individual designs better.",
      tags: ["Money", "Management"],
    },
    {
      id: 5,
      image: "https://via.placeholder.com/300", // Replace with actual image URL
      author: "Richa Singh",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "JavaScript frameworks make development easy with extensive features and functionalities.",
      tags: ["Tax Return", "News", "Audit"],
    },
    {
      id: 6,
      image: "https://via.placeholder.com/300", // Replace with actual image URL
      author: "Miss Nora",
      date: "1 Jan 2023",
      title: "Scale-Up Company Offer",
      description:
        "Starting a community doesn't need to be complicated, but how do you get started?",
      tags: ["Private Limited Company", "Customer Success"],
    },
  ];

  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-yellow-500 text-sm uppercase text-center mb-4">
          Explore Our Blogs
        </h2>
        <h3 className="text-white text-3xl font-bold text-center mb-12">
          Accelerate Digital Transformation
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div key={blog.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-gray-400 text-sm mb-1">
                  {blog.author} • {blog.date}
                </p>
                <h4 className="text-white text-lg font-bold mb-2">
                  {blog.title}
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  {blog.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-700 text-gray-300 text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition">
            Show more blogs →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
