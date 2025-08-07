import React from "react";
import NewsletterForm from "./NewsLetterForm";

// Components
export default function NewLetterSection() {
  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-center text-3xl lg:text-5xl font-bold mb-4">
        Vil du høre mere om os og vores tilbud?
      </h2>
      <NewsletterForm />
    </section>
  );
}
