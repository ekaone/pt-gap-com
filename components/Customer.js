import React, { useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";
import ButtonPrimary from "./misc/ButtonPrimary";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Customer = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);
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

  return (
    <div
      className="bg-gradient-to-b from-white-300 to-white-500 w-full py-14"
      id="customer"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto"
            >
              Huge Customers Network of GAP{" "}
            </motion.h3>
            <motion.p
              className="leading-normal  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12"
              variants={scrollAnimation}
            >
              Our Global Customer everywhere to make it easier for you when you
              move locations.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div
              className="w-full flex justify-evenly items-center mt-4 flex-wrap lg:flex-nowrap"
              variants={scrollAnimation}
            >
              {/* <Netflix className="h-18 w-auto" /> */}
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
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto"
            >
              Get in touch from GAP{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              Contact us to get help, talk to sales, have a discussion about
              partnerships or tell us good news.
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16">
            <motion.div variants={scrollAnimation} custom={{ duration: 3 }}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-white-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                    Contact Now for <br /> to discuss your goal!
                  </h5>
                  <p>Let's braistorming with us for your requirements.</p>
                </div>
                <Link href="/contact">
                  <a>
                    <ButtonPrimary>Contact</ButtonPrimary>
                  </a>
                </Link>
              </div>
              <div
                className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
              ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Customer;
