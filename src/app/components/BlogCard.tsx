import Image from "next/image";
import React from "react";

interface BlogCardProps {
  title: string;
  description: string;
  date: string;
  author: string;
  imageUrl: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  date,
  author,
  imageUrl,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <Image
        className="w-full h-64 object-cover rounded-lg mb-6"
        height={100}
        width={100}
        src={imageUrl}
        alt={title}
      />
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-sm text-gray-500">
        <span>{date}</span>
        <span className="mx-2">|</span>
        <span>{author}</span>
      </div>
      <a href="#" className="text-blue-500 mt-4 inline-block">
        Read more
      </a>
    </div>
  );
};

export default BlogCard;
