import React from "react";
import Link from "next/link";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
const Footer = () => {
  return (
    <div className="bg-white-300 pt-44 pb-24">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <p className="mb-4">
            <strong className="font-medium">PT Gita Agung Pratama</strong> is a
            proffesional design network that has unique features and has high
            security.
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Link href="/">
                <a>
                  <Facebook className="h-6 w-6" />
                </a>
              </Link>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Link href="/">
                <a>
                  <Twitter className="h-6 w-6" />
                </a>
              </Link>
            </div>
            <div className="mx-2 bg-white-500 rounded-full items-center justify-center flex p-2 shadow-md">
              <Link href="/">
                <a>
                  <Instagram className="h-6 w-6" />
                </a>
              </Link>
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - PT Gita Agung Pratama
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
