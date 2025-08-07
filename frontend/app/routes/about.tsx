// Components
import AboutInfoSection from "../src/components/AboutInfoSetion/AboutInfoSection";
import AboutSection from "../src/components/AboutSection/AboutSection";
import CommentsCarousel from "../src/components/CommentSection/CommentsSection";
import SatisfactionSection from "../src/components/SatisfactionSection/SatisfactionSection";

export default function About() {
  return (
    <div>
      <AboutSection />
      <AboutInfoSection />
      <SatisfactionSection />
      <CommentsCarousel />
    </div>
  );
}
