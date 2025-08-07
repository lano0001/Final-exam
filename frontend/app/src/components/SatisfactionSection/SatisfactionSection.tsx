import type { FC } from "react";

const SatisfactionSection: FC = () => (
  <section className="bg-white py-12">
    <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      <div className="relative">
        <div className="absolute bg-accent-green h-full w-full top-2 right-2 rounded-lg "></div>
        <img
          src="/images/omosimg.webp"
          alt="Fence and keys"
          className="relative w-full h-auto rounded-lg shadow-lg object-cover z-2"
        />
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-4 text-gray-900">
          Din tilfredshed er vores succes
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Vi værdsætter vores kunders tillid og bestræber os på at opretholde en
          høj standard af integritet og ærlighed i alt hvad vi gør. Vi tror på
          at opbygge gode relationer med vores kunder ved at være pålidelige.
        </p>
      </div>
    </div>
  </section>
);

export default SatisfactionSection;
