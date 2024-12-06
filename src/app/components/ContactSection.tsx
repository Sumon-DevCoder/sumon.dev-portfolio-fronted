import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="my-6 px-4" id="contact">
      <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-8 sm:gap-16 p-6 sm:p-10 mx-auto bg-black shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] rounded-md text-[#333] font-[sans-serif]">
        {/* Left Section */}
        <div>
          <h1 className="text-3xl sm:text-4xl text-green-600 font-extrabold">
            Let&apos;s Collaborate
          </h1>
          <p className="text-base sm:text-xl text-gray-400 mt-3">
            Have an exciting project or idea you&apos;d like to bring to life?
            Let&apos;s work together to create something amazing! I&apos;m
            always open to new opportunities and collaborations.
          </p>
          <div className="mt-8">
            <h2 className="text-lg font-extrabold text-green-600">Email</h2>
            <ul className="mt-3">
              <li className="flex items-center">
                <div className="bg-black h-8 w-8 sm:h-10 sm:w-10 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18px"
                    height="18px"
                    fill="#007bff"
                    viewBox="0 0 479.058 479.058"
                  >
                    <path d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z" />
                  </svg>
                </div>
                <a className="text-[#007bff] text-sm ml-3">
                  <small className="block">Mail</small>
                  <strong>Sumon.DevCoder@gmail.com</strong>
                </a>
              </li>
            </ul>
          </div>
          <div className="mt-8">
            <h2 className="text-lg text-green-600 font-extrabold">Socials</h2>
            <div
              className="flex justify-center sm:justify-start space-x-3 mt-6 text-slate-300"
              data-aos="fade-up"
            >
              <a
                href="https://github.com/sumon-devCoder"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border-2 border-green-400 rounded-full hover:bg-green-400 hover:text-white transition duration-300"
              >
                <FaGithub className="text-lg sm:text-xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/mustafizur-rahman-sumon-790199290/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border-2 border-green-400 rounded-full hover:bg-green-400 hover:text-white transition duration-300"
              >
                <FaLinkedin className="text-lg sm:text-xl" />
              </a>
              <a
                href="https://www.facebook.com/Sumon.DevCoder/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 border-2 border-green-400 rounded-full hover:bg-green-400 hover:text-white transition duration-300"
              >
                <FaFacebook className="text-lg sm:text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Right Section (Form) */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full rounded-md py-3 sm:py-4 px-4 border text-white text-sm sm:text-md outline-[#007bff]"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-md py-3 sm:py-4 px-4 border text-white text-sm sm:text-md outline-[#007bff]"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full rounded-md py-3 sm:py-4 px-4 border text-white text-sm sm:text-md outline-[#007bff]"
          />
          <textarea
            placeholder="Message"
            className="w-full h-32 sm:h-40 rounded-md px-4 border text-white text-sm sm:text-md pt-3 sm:pt-4 outline-[#007bff]"
          ></textarea>
          <button
            type="button"
            className="bg-[#007bff] hover:bg-blue-600 text-white font-semibold rounded-md text-md px-4 py-3 sm:py-4 w-full"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSection;
