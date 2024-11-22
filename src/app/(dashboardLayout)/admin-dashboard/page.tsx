import Link from "next/link";
import React from "react";

const WelcomeText = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <h1 className="text-5xl md:text-6xl font-bold text-white text-center shadow-lg">
        Dashboard Portfolio! <br />
        <Link
          href={"/"}
          className="btn btn-primary text-xl md:text-2xl font-medium text-gray-200"
        >
          Back to Home
        </Link>
      </h1>
    </div>
  );
};

export default WelcomeText;
