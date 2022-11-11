import React, { useMemo } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Hero2 = () => {
  const listCustomers = [
    {
      name: "pt-hiin",
      icon: "/assets/pt-hiin.png",
      h: 100,
      w: 122,
    },
    {
      name: "pt-petrosea",
      icon: "/assets/pt-petrosea.png",
      h: 100,
      w: 256,
    },
    {
      name: "pt-kideco",
      icon: "/assets/pt-kideco.png",
      h: 100,
      w: 303,
    },
    ,
    {
      name: "pt-indokordsa",
      icon: "/assets/pt-indokordsa.png",
      h: 100,
      w: 353,
    },
    ,
    {
      name: "pt-caterpillar",
      icon: "/assets/pt-caterpillar.png",
      h: 100,
      w: 334,
    },
    ,
    {
      name: "pt-essilor",
      icon: "/assets/pt-essilor.png",
      h: 100,
      w: 147,
    },
  ];

  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
              Want anything to be easy with <strong>GAP</strong>.
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              We Provide a Solution for all your needs with ease and fun using
              GAP Service especially <strong>Design and Interior</strong>,
              discover interesting features from us.
            </p>
            <ButtonPrimary>Get Started</ButtonPrimary>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <Image
                src="/assets/Illustration1.png"
                alt="VPN Illustrasi"
                quality={100}
                width={612}
                height={383}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
      <div className="relative w-full flex">
        <div className="rounded-lg w-full grid grid-flow-row sm:grid-flow-row grid-cols-1 px-9 py-9 sm:divide-y-0 bg-white-500">
          <Marquee>
            {listCustomers.map((listCustomer, index) => (
              <div className="px-4" key={index}>
                <Image
                  key={index}
                  src={listCustomer.icon}
                  alt={listCustomer.name}
                  width={listCustomer.w}
                  height={listCustomer.h}
                />
              </div>
            ))}
          </Marquee>
        </div>
        <div
          className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-64 sm:h-48 top-0 mt-8 mx-auto left-0 right-0"
          style={{ filter: "blur(114px)" }}
        ></div>
      </div>
    </div>
  );
};

export default Hero2;
