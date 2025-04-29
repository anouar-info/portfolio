// src/components/Hero.tsx
"use client";
import { useDarkModeContext } from "@/context/DarkModeContext";
const Hero: React.FC = () => {
  const { isDark } = useDarkModeContext();
  return (
    <section className="bg-transparent dark:bg-transparent py-12 font-space">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-around md:items-center ">
          {/* English Version */}
          <div className="md:w-1/2 text-left mb-8 md:mb-0 dark__gradient__text dark:light__gradient__text dark">
            <h1 className="text-3xl font-extrabold text-grad mb-4">
              Hello, I&apos;m Anouar.
            </h1>
            <p className="text-xl font-bold mb-4">
              I’m a Data/AI/Machine Learning engineer who&apos;s forced to build APIs and center divs (and I enjoy it, too).
            </p>
            <p className="text-xl font-bold mb-4">
              I love science, though I&apos;m not sure it loves me back. A curious perfectionist and all-around human.
            </p>
            <p className="text-xl font-bold mb-4">
              My dream? To pull off a backflip aboard the ISS.
            </p>
          </div>
          {/* Moroccan Dialect in Arabic */}
          <div className="md:w-1/2 flex justify-center">
            {isDark ? (
              <img 
                src="/assets/anouar_astronaut.png" 
                className="w-96 h-fit float-animation" 
                alt="Anouar as an astronaut" 
              />
            ) : (
              <img 
                src="/assets/anouar_astronaut_blue.png" 
                className="w-96 h-fit float-animation" 
                alt="Anouar as an astronaut" 
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
