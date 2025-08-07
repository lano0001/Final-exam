import React from "react";
import { NavLink } from "react-router";

export default function IntroSection() {
  return (
    <section className=" relative w-full min-h-[60vh] md:min-h-[80vh] overflow-hidden">
      <img
        src="/images/firstimg.webp"
        alt="HegnXperten team"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r  from-black to-transparent"></div>

      <div className=" absolute inset-0 flex items-center h-full">
        <div className="px-4 max-w-2xl text-white">
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold mb-4">
            Vi er HegnXperten
          </h2>
          <p className="mb-6 text-sm md:text-base lg:text-lg">
            Vil du gøre din have eller ejendom mere privat og smuk med et nyt
            raftehegn, FT Systemhegn eller komposithegn? Kontakt os i dag og få
            et uforpligtende tilbud eller se vores pakkeløsninger.
          </p>
          <NavLink
            to="/getoffer"
            className="inline-block bg-accent-green  transition-colors text-white font-semibold px-6 py-3 rounded-md"
          >
            Få et tilbud
          </NavLink>
        </div>
      </div>
    </section>
  );
}
