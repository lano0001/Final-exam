import React from "react";

export default function ContactUsSection() {
  return (
    <section
      className=" bg-center bg-cover"
      style={{ backgroundImage: `url('/images/plants.webp')` }}
    >
      <div className="relative flex flex-col items-center justify-center text-center text-white px-4 py-20 md:py-32 lg:py-40">
        <div className="bg-stone-900 opacity-95 p-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">
            Skal vi tage en snak om dine ønsker?
          </h1>
          <p className="text-sm md:text-lg mb-6">
            Vi tilbyder skræddersyede løsninger
          </p>
          <button
            type="button"
            className="bg-green-700 transition-colors text-white font-semibold px-6 py-3 rounded-md cursor-pointer"
          >
            Kontakt os i dag
          </button>
        </div>
      </div>
    </section>
  );
}
