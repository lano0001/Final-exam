import React, { useEffect, useRef, useState } from "react";

interface Step {
  id: number;
  text: string;
}

const steps: Step[] = [
  {
    id: 1,
    text: "Kontakt os for at diskutere dine behov og ønsker for dit hegn.",
  },
  { id: 2, text: "Vi designer et hegn, der passer til dine krav og budget." },
  { id: 3, text: "Vi aftaler en tid for installation og klargør materialer." },
  { id: 4, text: "Vi installerer dit nye hegn på din ejendom." },
  {
    id: 5,
    text: "Vi rydder op efter os og lader dig inspicere det færdige arbejde.",
  },
];

export default function ProcessSection() {
  const [animated, setAnimated] = useState<boolean[]>(
    Array(steps.length).fill(false)
  );
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // stagger animation in order when section is in view
          steps.forEach((_, idx) => {
            const timer = setTimeout(() => {
              setAnimated((prev) => {
                const next = [...prev];
                next[idx] = true;
                return next;
              });
            }, idx * 300);
            timers.push(timer);
          });
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <section ref={sectionRef} className="container mx-auto px-4 py-12">
      <h2 className="text-center text-3xl font-bold mb-4">
        Hvordan virker det?
      </h2>
      <p className="text-center text-gray-700 max-w-2xl mx-auto mb-6">
        Vores proces er enkel og struktureret, så du kan være sikker på en
        smidig og stressfri oplevelse.
      </p>
      <p className="text-center font-semibold mb-8">Sådan kommer du i gang</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {steps.map(({ id, text }, idx) => (
          <div
            key={id}
            className={`transform bg-stone-900 text-white p-6 rounded-lg flex flex-col justify-around h-full transition-transform duration-900 ease-out ${
              animated[idx] ? "scale-100 opacity-100" : "scale-0 opacity-0"
            }`}
          >
            <p className="mb-4">{text}</p>
            <div className="flex justify-center">
              <span className="bg-green-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-medium">
                {id}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
