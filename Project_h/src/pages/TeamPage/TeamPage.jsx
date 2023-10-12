import React from "react";
import HeaderTwo from "../../components/Header/HeaderTwo";
import Overlay from "../../components/Overlay/Overlay";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import Team from "../../components/Team/Team";
import Footer from "../../components/Footer/Footer";
import Preloader from "../../components/Preloader/Preloader";

function TeamPage() {
  return (
    <>
    <Preloader/>
      <HeaderTwo />
      <Overlay />
      <ContactBanner />
      <Team />
      <Footer />
    </>
  );
}

export default TeamPage;
