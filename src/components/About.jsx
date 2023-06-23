import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="flex flex-col justify-start items-center h-screen w-full mt-25"
    >
      <div className="flex flex-col justify-center items-center my-8 md:my-32">
        <div className="max-w-[1260px] mx-auto px-2">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-red-900">Makuguihon</h2>
            <h2 className="text-2xl font-bold text-red-900">
              Municipality of Molave
            </h2>
            <h2 className="text-2xl font-bold text-red-900">
              Province of Zamboanga del Sur
            </h2>

            <div className="border border-gray-300 p-6 mt-8 md:mt-12 mx-auto w-full max-w-[800px] lg:max-w-[90%]">
              <p className="text-sm text-justify text-gray-800">
                Welcome to Molave, a vibrant municipality nestled in the heart
                of Zamboanga del Sur. Makuguihon, with its close-knit community
                and rich cultural heritage, is the epitome of the warm spirit
                that permeates Molave. Whether you're seeking an escape to
                nature or an immersion into the local culture, Molave and
                Makuguihon offer an unforgettable experience that will leave you
                longing to return. Come and discover the beauty and charm of
                this hidden gem in Zamboanga del Sur, where every visit is an
                opportunity to create lasting memories.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
