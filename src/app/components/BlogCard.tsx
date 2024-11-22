import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BlogCardProps {
  _id?: string;
  title: string;
  description: string;
  date: string;
  img: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  _id,
  title,
  description,
  date,
  img,
}) => {
  return (
    <div className="bg-slate-900 rounded-lg shadow-lg text-slate-200">
      <Image
        className="w-full h-64 object-cover rounded-lg mb-6"
        height={100}
        width={100}
        src={img}
        alt={title}
      />
      <div className="p-6">
        <h3 className="text-2xl font-medium mb-2 ">{title}</h3>
        <p className="mb-4 text-slate-400">{description?.slice(0, 100)}</p>
        <div className="flex items-center text-sm text-gray-500">
          <span>{date}</span>
        </div>
        <Link
          href={`/blog/${_id}`}
          className="text-green-500 mt-4 inline-block text-lg underline hover:text-red-300"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
