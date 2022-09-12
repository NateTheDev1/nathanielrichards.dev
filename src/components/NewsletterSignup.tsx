import { useState } from "react";
import { Link } from "react-router-dom";

export const NewsletterSignup = () => {
  const [done, setDone] = useState(false);

  return (
    <aside
      className="p-4 my-8  border  rounded-lg shadow-md sm:p-6 lg:p-8 bg-gray-800 border-gray-700"
      aria-label="Subscribe to the Nathaniel Richard's Newsletter"
    >
      {done && (
        <>
          <h3
            className="mb-3 text-xl font-medium text-center text-white"
            style={{ animation: "fadeIn 2s" }}
          >
            Thanks For Signing Up 🎉
          </h3>
        </>
      )}
      {!done && (
        <>
          <h3 className="mb-3 text-xl font-medium  text-white">
            Get more updates...
          </h3>
          <p className="mb-5 text-sm font-medium  text-gray-300">
            Do you want to get notified when a article is posted here? Sign up
            for our newsletter and you'll be notified when there are updates or
            new things are available to read.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();

              setDone(true);
            }}
          >
            <div className="flex items-end mb-3">
              <div className="relative w-full mr-3 revue-form-group">
                <label
                  htmlFor="member_email"
                  className="hidden mb-2 text-sm font-medium  text-gray-300"
                >
                  Email address
                </label>
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-5 h-5  text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </div>
                <input
                  className="border text-sm rounded-lg block w-full pl-10 p-2.5 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Your email address..."
                  type="email"
                  name="member[email]"
                  id="member_email"
                  required={true}
                />
              </div>
              <div>
                <input
                  type="submit"
                  value="Subscribe"
                  className="cursor-pointer text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800"
                  name="member[subscribe]"
                  id="member_submit"
                />
              </div>
            </div>
            <div className="text-sm font-medium revue-form-footer text-gray-300">
              By subscribing, you agree with This Site's{" "}
              <Link
                rel="nofollow"
                to="/terms"
                className="hover:underline text-blue-500"
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                rel="nofollow"
                className="hover:underline text-blue-500"
                to="/terms#privacypolicy2"
              >
                Privacy Policy
              </Link>
              .
            </div>
          </form>
        </>
      )}
    </aside>
  );
};
