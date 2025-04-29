// app/about/page.tsx

export default function AboutPage() {
  return (
    <>
      <div className="container mx-auto px-4">
        {/* About Me Section */}
        <h1 className="text-5xl text-center font-bold text-blue-800 dark:text-blue-100 mb-6">
          About Me
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-4">
          Hi, I&apos;m Anouar Faraji, a passionate Data/AI/Machine Learning
          engineer. I enjoy building innovative solutions, whether it&apos;s
          creating APIs or designing user interfaces. My journey in tech has
          been driven by curiosity, a love for science, and a commitment to
          continuous learning.
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          With a background that blends data engineering and software
          development, I strive to bring clarity and efficiency to complex
          systems. When I&apos;m not coding, you might find me exploring new
          technologies or dreaming up creative projects, like pulling off a
          backflip aboard the ISS.
        </p>

        {/* Studies Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-100 mb-4">
            Studies
          </h2>
          <div className="space-y-8">
            {/* Primary School */}
            <div className="flex flex-col md:flex-row items-center">
              {/*  <img
                    src="/assets/primary-school.png"
                    alt="Primary School"
                    className="w-32 h-32 object-cover mb-4 md:mb-0 md:mr-6"
                  /> */}
              <div>
                <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-100 mb-2">
                  Primary School
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I attended XYZ Primary School where I built a strong
                  foundation in learning, creativity, and teamwork.
                </p>
              </div>
            </div>
            {/* Middle School */}
            <div className="flex flex-col md:flex-row items-center">
              {/*   <img
                    src="/assets/middle-school.png"
                    alt="Middle School"
                    className="w-32 h-32 object-cover mb-4 md:mb-0 md:mr-6"
                  /> */}
              <div>
                <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-100 mb-2">
                  Middle School
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  At ABC Middle School, I honed my critical thinking and
                  problem-solving skills which sparked my interest in science
                  and technology.
                </p>
              </div>
            </div>
            {/* High School */}
            <div className="flex flex-col md:flex-row items-center">
              {/* <img
                    src="/assets/high-school.png"
                    alt="High School"
                    className="w-32 h-32 object-cover mb-4 md:mb-0 md:mr-6"
                  /> */}
              <div>
                <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-100 mb-2">
                  High School
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  My high school years at DEF High were transformative,
                  cultivating my passion for mathematics, computer science, and
                  research.
                </p>
              </div>
            </div>
            {/* Preparatory Classes */}
            <div className="flex flex-col md:flex-row items-center">
              {/*  <img
                    src="/assets/preparatory.png"
                    alt="Preparatory Classes"
                    className="w-32 h-32 object-cover mb-4 md:mb-0 md:mr-6"
                  /> */}
              <div>
                <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-100 mb-2">
                  Preparatory Classes
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  In preparatory classes, I deepened my understanding of
                  advanced subjects, preparing me for a rigorous academic and
                  professional journey in technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-100 mb-4">
            Experience
          </h2>
          <div className="space-y-8">
            {/* Internship */}
            <div className="flex flex-col md:flex-row items-center">
              <img
                src="/assets/internship.png"
                alt="Internship at TechCorp"
                className="w-32 h-32 object-cover mb-4 md:mb-0 md:mr-6"
              />
              <div>
                <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-100 mb-2">
                  Internship at TechCorp
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I gained hands-on experience in data analysis and machine
                  learning, contributing to innovative projects and learning
                  from industry experts.
                </p>
              </div>
            </div>
            {/* Part-Time Job */}
            <div className="flex flex-col md:flex-row items-center">
              <img
                src="/assets/part-time.png"
                alt="Part-Time Developer"
                className="w-32 h-32 object-cover mb-4 md:mb-0 md:mr-6"
              />
              <div>
                <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-100 mb-2">
                  Part-Time Developer
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I worked as a part-time developer, building APIs and front-end
                  interfaces for local businesses, sharpening my problem-solving
                  skills.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Other Aspects Section */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold text-blue-800 dark:text-blue-100 mb-4">
            Other Aspects
          </h2>
          <div className="space-y-8">
            {/* Hobbies */}
            <div className="flex flex-col md:flex-row items-center">
              <img
                src="/assets/hobbies.png"
                alt="Hobbies & Interests"
                className="w-32 h-32 object-cover mb-4 md:mb-0 md:mr-6"
              />
              <div>
                <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-100 mb-2">
                  Hobbies & Interests
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Outside of work, I enjoy photography, reading sci-fi novels,
                  and exploring nature—activities that keep my creativity and
                  curiosity alive.
                </p>
              </div>
            </div>
            {/* Skills & Certifications */}
            <div className="flex flex-col md:flex-row items-center">
              <img
                src="/assets/skills.png"
                alt="Skills & Certifications"
                className="w-32 h-32 object-cover mb-4 md:mb-0 md:mr-6"
              />
              <div>
                <h3 className="text-2xl font-semibold text-blue-800 dark:text-blue-100 mb-2">
                  Skills & Certifications
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  I hold various certifications in data science and machine
                  learning, and I possess a broad skill set from programming and
                  system design to project management.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
