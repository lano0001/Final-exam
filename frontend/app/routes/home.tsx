// Components
import IntroSection from "../src/components/IntroSection/IntroSection";
import InfoSection from "../src/components/InfoSection/InfoSection";
import ProcessSection from "../src/components/ProcessSection/ProcessSection";
import CommentsSection from "../src/components/CommentSection/CommentsSection";
import ContactUsSection from "../src/components/ContactUsSection/ContactUsSection";
import NewLetterSection from "../src/components/NewsLetterSection/NewsLetterSection";

export default function Home() {
  return (
    <div>
      <IntroSection />
      <InfoSection />
      <CommentsSection />
      <NewLetterSection />
      <ContactUsSection />
      <ProcessSection />
    </div>
  );
}
