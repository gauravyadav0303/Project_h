import React from "react";
import HeaderTwo from "../../components/Header/HeaderTwo";
import Overlay from "../../components/Overlay/Overlay";
import ServiceDetail from "../../components/ServiceDetail/ServiceDetail";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";
import Services from "../../components/Services/Services";
import Preloader from "../../components/Preloader/Preloader";

function UserExperience() {
  return (
    <>
    <Preloader/>
      <HeaderTwo />
      <Overlay />
      <ContactBanner />
      <ServiceDetail />
      <Faq/>
      <Services/>
      <Footer/>
    </>
  );
}

export default UserExperience;
