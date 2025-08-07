import type { FC } from "react";
import { NavLink } from "react-router";

const AboutSection: FC = () => {
  return (
    <section className="bg-primary-black text-white">
      <div className="container  px-6 py-12 flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Vi er HegnXperten
          </h2>
          <p className="mb-6 text-gray-300">
            Vil du gøre din have eller ejendom mere privat og smuk med et nyt
            raftehegn, FT Systemhegn eller komposithegn? Kontakt os i dag og få
            et uforpligtende tilbud eller se vores pakkeløsninger.
          </p>
          <NavLink
            to="/getoffer"
            className="inline-block bg-accent-green transition-colors text-white font-semibold px-6 py-3 rounded-md"
          >
            Få et tilbud
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
