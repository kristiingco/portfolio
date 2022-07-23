import React, { useEffect } from "react";
import Image from "next/image";
import { MinusIcon, DocumentDownloadIcon } from "@heroicons/react/solid";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CustomButton from "./CustomButton";

const scrollVariant = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 0 },
};

const AboutSection = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <motion.section
      ref={ref}
      variants={scrollVariant}
      initial="hidden"
      animate={control}
      className="flex flex-col items-center"
      id="about"
    >
      <div>
        <Image
          src="/static/grad_me.png"
          alt="Another picture of me"
          width={300}
          height={300}
          className="rounded-xl"
        />
      </div>
      <div className="px-10 py-2">
        <h2 className="text-xl text-cool-green font-semibold">
          <MinusIcon className="w-5 h-5 inline" />
          about
        </h2>
        <div className="my-3 flex flex-col gap-4">
          <p>
            I am Kristi Ingco, a front end developer who is passionate about
            creating delightful experiences for users. I believe that the
            intersection between technology and design can facilitate how people
            solve problems.
          </p>
          <p>
            Outside of work, I love to play video games and delve in digital
            art!
          </p>
          <div className="w-44 self-center">
            <a
              href="https://drive.google.com/file/d/1bVHs2ZHqvopQi6Ru57DMa0FUmoPJhBPc/view?usp=sharing"
              target={"_blank"}
              rel="noreferrer"
            >
              <CustomButton
                buttonText={"download resume"}
                styleType="primary"
                Icon={DocumentDownloadIcon}
              />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
