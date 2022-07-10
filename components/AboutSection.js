import React from "react";
import Image from "next/image";
import { MinusIcon } from "@heroicons/react/solid";

const AboutSection = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Image
          src="/static/grad_me.png"
          alt="Another picture of me"
          width={300}
          height={300}
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
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
