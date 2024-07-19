import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import React from "react";

const contact = () => {
  return (
    <div className="bg-lightMain">
      <Hero heading={"Contact Us"} img={"bg-img4"} />
      <ContactForm />
    </div>
  );
};

export default contact;
