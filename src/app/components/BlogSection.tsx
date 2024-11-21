import React from "react";
import BlogCard from "./BlogCard";

const BlogSection: React.FC = () => {
  const blogs = [
    {
      title: "How to Build a MERN Stack Application",
      description:
        "A comprehensive guide to building full-stack applications with MongoDB, Express, React, and Node.js, covering everything from setup to deployment.",
      date: "November 15, 2024",
      author: "John Doe",
      imageUrl: "https://via.placeholder.com/600x400", // Add your image URL here
    },
    {
      title: "Next.js for Beginners",
      description:
        "Learn how to get started with Next.js, a powerful framework for building React applications, with an easy-to-follow step-by-step guide.",
      date: "November 10, 2024",
      author: "Jane Doe",
      imageUrl: "https://via.placeholder.com/600x400", // Add your image URL here
    },
    // Add more blog objects here
  ];

  return (
    <section className="py-16" id="blogs">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          Latest Blog Posts
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <BlogCard key={index} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
