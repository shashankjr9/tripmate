"use client";

import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";
interface sponsorsProps {
  name: string;
}

const sponsors: sponsorsProps[] = [
  {
    name: "Gemini Ai",
  },
  {
    name: "Google Cloud",
  },
  {
    name: "Google Maps",
  },
  {
    name: "Firebase",
  },
  {
    name: "React",
  },
  {
    name: "Vite",
  },
  {
    name: "Tailwind CSS",
  },
];

export const SponsorsSection = () => {
  return (
    <section id="sponsors" className="max-w-[75%] mx-auto pb-24 sm:pb-32">
      <h2 className="text-lg md:text-xl text-center mb-6">Our Tools</h2>

      <div className="mx-auto">
        <Marquee
          className="gap-[3rem]"
          fade
          innerClassName="gap-[3rem]"
          pauseOnHover
        >
          {sponsors.map(({ name }) => (
            <div
              key={name}
              className="flex items-center text-xl md:text-2xl font-medium"
            >
              {name}
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
};
