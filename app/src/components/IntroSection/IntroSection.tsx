import React from "react";

export default function IntroSection() {
  return (
    <section className="relative w-full min-h-[60vh] md:min-h-[80vh] overflow-hidden">
      <img
        src="/images/firstimg.webp"
        alt="HegnXperten team"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r  from-black to-transparent"></div>

      <div className="absolute inset-0 flex items-center h-full">
        <div className="px-4 max-w-2xl text-white">
          <h2 className="text-xl md:text-4xl lg:text-5xl font-bold mb-4">
            Vi er HegnXperten
          </h2>
          <p className="mb-6 text-sm md:text-base lg:text-lg">
            Vil du gøre din have eller ejendom mere privat og smuk med et nyt
            raftehegn, FT Systemhegn eller komposithegn? Kontakt os i dag og få
            et uforpligtende tilbud eller se vores pakkeløsninger.
          </p>
          <button className="inline-block bg-accent-green bg-green-700 transition-colors text-white font-semibold px-6 py-3 rounded-md">
            Kontakt os i dag
          </button>
        </div>
      </div>
    </section>
  );
}
