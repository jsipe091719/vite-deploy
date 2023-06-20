import React from "react";
import logoImg from "../assets/logo.png";

function Footer() {
  return (
    <div>
      <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
        <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="flex flex-wrap justify-between items-center">
            <a
              href="https://www.facebook.com/profile.php?id=100088298305965"
              className="flex items-center mb-4 sm:mb-0"
            >
              <img src={logoImg} className="h-8 mr-3" alt="Flowbite Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Brgy.Makuguihon
              </span>
            </a>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm text-gray-500 text-center md:text-left dark:text-gray-400">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Nigels™
            </a>
            . VOTE STRAIGHT!
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
