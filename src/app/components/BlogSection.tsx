import React from "react";
import BlogCard from "./BlogCard";
import { useGetblogQuery } from "@/redux/features/blog/blogApi";
import { TBlog } from "@/types/blog.types";

const BlogSection: React.FC = () => {
  const { data } = useGetblogQuery({});

  const blogs = data?.data?.result || [];

  return (
    <section className="py-16" id="blogs">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-5">
          Exploring the World of Blogs
        </h2>
        <p className="text-center text-md md:text-xl mb-8">
          Elevating my coding game with these 5 essential tips for writing
          clean, efficient, and maintainable code. <br /> Check out my latest
          blog post to level up your development skills! 💻🚀
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
          {blogs?.map((blog: TBlog) => (
            <BlogCard key={blog?._id} {...blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
