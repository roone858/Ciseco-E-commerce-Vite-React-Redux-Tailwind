import React from "react";
import ContactSection from "../../component/Sections/contactSection/ContactSection";
import PromoOne from "../../component/Promos/promoOne/PromoOne";

const ContactPage = () => {
  return (
    <div>
      <ContactSection />
      <div className="relative bg-neutral-100/70 p-1 mt-28  ">
          <PromoOne />
          </div>
    </div>
  );
};

export default ContactPage;
