import type { FC } from "react";
import { Link } from "react-router";

const AboutSection: FC = () => {
  return (
    <section className="bg-stone-900 text-white">
      <div className="container mx-auto px-4 py-12 flex flex-col-reverse md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            Vi er HegnXperten
          </h2>
          <p className="mb-6 text-gray-300">
            Vil du gøre din have eller ejendom mere privat og smuk med et nyt
            raftehegn, FT Systemhegn eller komposithegn? Kontakt os i dag og få
            et uforpligtende tilbud eller se vores pakkeløsninger.
          </p>
          <Link
            to="/kontakt"
            className="inline-block bg-green-700 transition-colors text-white font-semibold px-6 py-3 rounded-md"
          >
            Kontakt os i dag
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
