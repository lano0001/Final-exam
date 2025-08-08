import { useState, useEffect, useCallback, useMemo } from "react";

// Data
import { supabase } from "../../lib/supabaseClient";

// Icons
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface Comment {
  id: number;
  author: string;
  role: string;
  text: string;
  created_at?: string;
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
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);

  const isDesktop = useMediaQuery("(min-width: 768px)");
  const perSlide = isDesktop ? 2 : 1;

  // Fetch data
  useEffect(() => {
    const fetchComments = async () => {
      const { data, error } = await supabase
        .from("comments")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching comments", error.message);
      } else {
        setComments(data || []);
      }

      setLoading(false);
    };

    fetchComments();
  }, []);

  // Group into slides
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

  if (loading) {
    return (
      <div className="bg-primary-black text-white py-8 text-center">
        Indlæser kommentarer...
      </div>
    );
  }

  return (
    <div className="relative bg-primary-black py-8">
      {/* tilbage */}
      <button
        onClick={prev}
        disabled={currentIdx === 0}
        className="absolute cursor-pointer left-1 md:left-4 top-1/2 z-10 transform -translate-y-1/2 text-white text-3xl disabled:opacity-30"
        aria-label="Previous"
      >
        <FaAngleLeft />
      </button>

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
                    <h2 className="font-semibold">{c.author}</h2>
                    <h3 className="text-sm text-gray-500">{c.role}</h3>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* frem */}
      <button
        onClick={next}
        disabled={currentIdx >= slides.length - 1}
        className="absolute cursor-pointer right-1 md:right-4 top-1/2 z-10 transform -translate-y-1/2 text-white text-3xl disabled:opacity-30"
        aria-label="Next"
      >
        <FaAngleRight />
      </button>
    </div>
  );
}
