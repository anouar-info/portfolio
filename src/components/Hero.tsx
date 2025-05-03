// src/components/Hero.tsx
"use client";
const Hero: React.FC = () => {
  
  return (
    <section className="bg-transparent dark:bg-transparent py-12 font-space">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-around md:items-center ">
          {/* English Version */}
          <div className="md:w-8/12 text-center mb-8 md:mb-0 dark__gradient__text dark:light__gradient__text dark">
            <h1 className="text-6xl font-extrabold text-grad mb-4">
              Hello, world.
            </h1>
            <p className="text-4xl font-bold mb-4">
            I’m into code, data, and science.
            </p>
            <p className="text-4xl font-bold mb-4">
            On a never-ending learning curve.
            </p>
          </div>
          {/* 
          <div className="md:w-1/2 flex justify-center">
            {isDark ? (
              <Image 
                src="/assets/anouar_astronaut.png" 
                className="w-96 h-fit float-animation" 
                alt="Anouar as an astronaut" 
                width={400}
                height={250}
              />
            ) : (
              <Image
                src="/assets/anouar_astronaut_blue.png" 
                className="w-96 h-fit float-animation" 
                alt="Anouar as an astronaut" 
                width={400}
                height={250}
              />
            )}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
