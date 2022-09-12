import { Link, useLocation } from "react-router-dom";
import { Searchbox } from "./Searchbox";

export const Sidebar = () => {
  const location = useLocation();

  return (
    <>
      <div className="md:hidden relative">
        <button
          title="Contact Sale"
          className="fixed z-90 top-5 right-8 -z-50 bg-gray-900 w-15 h-15 rounded-full drop-shadow-lg flex justify-center items-center text-white text-4xl hover:bg-gray-700 hover:drop-shadow-2xl hover:animate-pulse"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="flex-shrink-0 w-6 h-6"
            fill="currentColor"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </button>
      </div>
      <aside className="md:w-1/3 md:block hidden" aria-label="Sidebar">
        <div className="overflow-y-auto py-4 px-3  rounded bg-gray-800">
          <ul className="space-y-2">
            <li className="pb-4">
              <Searchbox />
            </li>
            <li>
              <Link
                to="/"
                className={`transition-all flex items-center p-2 text-base font-normal  rounded-lg hover:bg-gray-700 ${
                  location.pathname === "/" && "text-brand bg-gray-700"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                >
                  <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
                </svg>
                <span className="ml-3">Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/articles"
                className={`transition-all flex items-center p-2 text-base font-normal  rounded-lg hover:bg-gray-700 ${
                  location.pathname === "/articles" && "text-brand bg-gray-700"
                }`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                  className="w-6 h-6"
                  fill="currentColor"
                >
                  <path d="M96 96c0-35.3 28.7-64 64-64H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H80c-44.2 0-80-35.8-80-80V128c0-17.7 14.3-32 32-32s32 14.3 32 32V400c0 8.8 7.2 16 16 16s16-7.2 16-16V96zm64 24v80c0 13.3 10.7 24 24 24H424c13.3 0 24-10.7 24-24V120c0-13.3-10.7-24-24-24H184c-13.3 0-24 10.7-24 24zm0 184c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm160 0c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H336c-8.8 0-16 7.2-16 16zM160 400c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H176c-8.8 0-16 7.2-16 16zm160 0c0 8.8 7.2 16 16 16h96c8.8 0 16-7.2 16-16s-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Articles</span>
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className="flex items-center p-2 text-base font-normal  rounded-lg text-white  hover:bg-gray-700"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400  group-hover:text-white"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 320 512V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM512 288H320v32c0 17.7-14.3 32-32 32H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V288z" />
                </svg>

                <span className="flex-1 ml-3 whitespace-nowrap">
                  Work Experience
                </span>
                <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium  rounded-full bg-blue-900 text-blue-200">
                  3
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400  group-hover:text-white"
                  fill="currentColor"
                >
                  <path d="M64 480H448c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7L226.7 50.7c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Projects</span>
                <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium  rounded-full bg-blue-900 text-blue-200">
                  10
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="flex items-center p-2 text-base font-normal rounded-lg text-white hover:bg-gray-700"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 transition duration-75 text-gray-400 group-hover:text-white"
                  fill="currentColor"
                >
                  <path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z" />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
