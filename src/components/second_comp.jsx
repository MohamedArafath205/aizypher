"use client";

import React from "react";

const borderGradientStyle = {
  borderRadius: "1rem",
  background: "rgba(0, 0, 0, 0.75)", // Darker transparent background
  backgroundClip: "padding-box",
  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.6)", // Shadow for depth
  transition: "box-shadow 0.3s ease",
};

const SecondComp = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/white-bg.png"
          alt="Mirrored Background"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="w-full p-4 sm:p-6 md:p-8 lg:p-10 mx-auto flex flex-col gap-8 relative z-10">
        {/* Section 1: SRM Institute of Science and Technology */}
        <section
          className="w-full lg:w-3/4 mx-auto relative rounded-lg transition-shadow duration-300 ease-in-out"
          style={{
            ...borderGradientStyle,
            marginLeft: "0", // Remove margin on mobile
          }}
        >
          <div className="flex flex-col lg:flex-row items-start p-4 lg:p-6">
            <img
              src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/handlogo.png"
              alt="Icon"
              className="w-full lg:w-1/3 h-full mr-0 lg:mr-4 mb-4 lg:mb-0" // Responsive image sizing
            />
            <div className="pl-0 lg:pl-4">
              <h1 className="text-3xl lg:text-4xl font-extrabold text-white mb-2">
                SRM IST
                <span className="block w-12 h-1 mt-1 bg-yellow-400"></span>
              </h1>
              <p className="text-md lg:text-lg text-gray-300">
                SRM Institute of Science and Technology (SRMIST) Ramapuram in
                Chennai is a leading campus known for its engineering,
                technology, and management programs. It boasts modern
                classrooms, advanced labs, and extensive libraries. With strong
                industry ties, it provides valuable internships and placements.
                The vibrant campus life includes cultural events, technical
                fests, and sports, fostering both academic and personal growth.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: AIML Department */}
        <section
          className="w-full lg:w-3/4 mx-auto relative rounded-lg transition-shadow duration-300 ease-in-out"
          style={{
            ...borderGradientStyle,
            marginRight: "0", // Remove margin on mobile
          }}
        >
          <div className="flex flex-col-reverse lg:flex-row-reverse items-start p-4 lg:p-6">
            <img
              src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/robo.png"
              alt="Icon"
              className="w-1/4 lg:w-1/6 w-full lg:w-1/3 h-auto ml-0 lg:ml-4 mb-4 lg:mb-0" // Responsive image sizing
            />
            <div className="pr-0 lg:pr-4">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-2">
                AIML Department
                <span className="block w-12 h-1 mt-1 bg-green-400"></span>
              </h2>
              <p className="text-md lg:text-lg text-gray-300">
                The AIML Department at SRMIST advances AI and ML education with
                a comprehensive curriculum in areas like deep learning and data
                science. It offers hands-on experience through state-of-the-art
                labs and industry collaboration. With a focus on research,
                internships, and a vibrant learning community, it prepares
                students for careers in data science, AI engineering, and
                innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Zypher */}
        <section
          className="w-full lg:w-3/4 mx-auto relative rounded-lg transition-shadow duration-300 ease-in-out"
          style={{
            ...borderGradientStyle,
            marginLeft: "0", // Remove margin on mobile
          }}
        >
          <div className="flex flex-col lg:flex-row items-start p-4 lg:p-6">
            <img
              src="https://cdn.jsdelivr.net/gh/MohamedArafath205/cdn.aizypher@main/aiz.png"
              alt="Icon"
              className="w-1/4 lg:w-1/6 w-full lg:w-1/3 h-auto ml-0 lg:ml-4 mb-4 lg:mb-0" // Responsive image sizing
            />
            <div className="pl-0 lg:pl-4">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-2">
                Zypher
                <span className="block w-12 h-1 mt-1 bg-green-400"></span>
              </h2>
              <p className="text-md lg:text-lg text-gray-300">
                AI Zypher, hosted by SRMIST&apos;s AIML Department, is a premier
                event uniting students, researchers, and industry experts to
                explore AI and ML advancements. It features workshops,
                hackathons, keynote sessions, and networking opportunities,
                fostering innovation and collaborative problem-solving. The
                event highlights cutting-edge research and provides a platform
                for emerging AI leaders to connect and learn.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SecondComp;
