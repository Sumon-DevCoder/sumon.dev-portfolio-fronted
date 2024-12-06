// components/Footer.tsx
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto text-center">
        <p className="text-sm mb-4">
          &copy; {new Date().getFullYear()} Sumon DevCoder. All rights reserved.
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://github.com/sumon-devcoder"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-2xl hover:text-green-500 transition-colors" />
          </a>
          <a
            href="https://www.linkedin.com/in/sumon-devcoder/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-2xl hover:text-green-500 transition-colors" />
          </a>
          <a
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-2xl hover:text-green-500 transition-colors" />
          </a>
        </div>
        <p className="text-sm">
          Built with ❤️ using Next.js, React, and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
