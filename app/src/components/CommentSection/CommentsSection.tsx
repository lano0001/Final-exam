import React, { useState, useEffect, useCallback, useMemo } from "react";

interface Comment {
  id: number;
  author: string;
  role: string;
  text: string;
}

// Hook for media queries
function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState<boolean>(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    setMatches(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [query]);
  return matches;
}

export default function CommentsCarousel() {
  // static comments array (stable identity)
  const comments = useMemo<Comment[]>(
    () => [
      {
        id: 1,
        author: "Jan Glerup",
        role: "Kunde",
        text: "Jeg kan varmt anbefale HegnXperten. Stefan leverer fremragende håndværk...",
      },
      {
        id: 2,
        author: "Maria Hansen",
        role: "Hus ejer",
        text: "HegnXperten skabte præcis det hegn, jeg ønskede. Kvaliteten er i top...",
      },
      {
        id: 3,
        author: "Peter Sørensen",
        role: "Have entusiast",
        text: "Professionel service fra start til slut. Montering gik hurtigt...",
      },
      {
        id: 4,
        author: "Louise Nielsen",
        role: "Bolig køber",
        text: "Fantastisk rådgivning og flot udført arbejde. Mit nye hegn passer...",
      },
      {
        id: 5,
        author: "Anders Kristensen",
        role: "Erhvervskunde",
        text: "Vi fik sat hegn op omkring vores erhvervsejendom uden problemer...",
      },
    ],
    []
  );

  const isDesktop = useMediaQuery("(min-width: 768px)");
  const perSlide = isDesktop ? 2 : 1;

  // memoized slides
  const slides = useMemo(() => {
    const chunks: Comment[][] = [];
    for (let i = 0; i < comments.length; i += perSlide) {
      chunks.push(comments.slice(i, i + perSlide));
    }
    return chunks;
  }, [comments, perSlide]);

  const [currentIdx, setCurrentIdx] = useState(0);

  const prev = useCallback(() => {
    setCurrentIdx((i) => (i - 1 >= 0 ? i - 1 : 0));
  }, []);

  const next = useCallback(() => {
    setCurrentIdx((i) => (i + 1 < slides.length ? i + 1 : i));
  }, [slides.length]);

  return (
    <div className="relative bg-stone-900 py-8">
      {/* Prev arrow */}
      <button
        onClick={prev}
        disabled={currentIdx === 0}
        className="absolute left-1 md:left-4 top-1/2 z-50 transform -translate-y-1/2 text-white text-3xl disabled:opacity-30"
        aria-label="Previous"
      >
        ‹
      </button>

      {/* Carousel */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIdx * 100}%)` }}
        >
          {slides.map((group, slideIdx) => (
            <div
              key={slideIdx}
              className="w-full flex-shrink-0 flex justify-center space-x-4 px-4 md:px-8"
            >
              {group.map((c) => (
                <div
                  key={c.id}
                  className="bg-white text-gray-800 p-6 rounded-lg shadow max-w-md w-full"
                >
                  <p className="mb-4">{c.text}</p>
                  <div className="text-right">
                    <div className="font-semibold">{c.author}</div>
                    <div className="text-sm text-gray-500">{c.role}</div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Next arrow */}
      <button
        onClick={next}
        disabled={currentIdx >= slides.length - 1}
        className="absolute right-1 md:right-4 top-1/2 z-50 transform -translate-y-1/2 text-white text-3xl disabled:opacity-30"
        aria-label="Next"
      >
        ›
      </button>
    </div>
  );
}
