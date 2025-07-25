import type { Route } from "./+types/home";

// Components
import IntroSection from "~/src/components/IntroSection/IntroSection";
import InfoSection from "~/src/components/InfoSection/InfoSection";
import ProcessSection from "~/src/components/ProcessSection/ProcessSection";
import CommentsSection from "~/src/components/CommentSection/CommentsSection";
import ContactUsSection from "~/src/components/ContactUsSection/ContactUsSection";

export default function Home() {
  return (
    <div>
      <IntroSection />
      <InfoSection />
      <CommentsSection />
      <ContactUsSection />
      <ProcessSection />
    </div>
  );
}
