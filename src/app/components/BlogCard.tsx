import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-slate-900 rounded-lg shadow-lg text-slate-200"
      data-aos="fade-up"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Image
          className="w-full h-64 object-cover rounded-lg mb-6"
          height={100}
          width={100}
          src={img}
          alt={title}
        />
      </motion.div>
      <div className="p-6">
        <motion.h3
          className="text-2xl font-medium mb-2"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          {title}
        </motion.h3>
        <motion.p
          className="mb-4 text-slate-400"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          {description?.slice(0, 80)}
        </motion.p>
        <motion.div
          className="flex items-center text-sm text-gray-500"
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <span>{date}</span>
        </motion.div>
        <motion.div data-aos="zoom-in-up" data-aos-delay="500">
          <Link
            href={`/blog/${_id}`}
            className="text-green-500 mt-4 inline-block text-lg underline hover:text-red-300"
          >
            Read more
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BlogCard;
