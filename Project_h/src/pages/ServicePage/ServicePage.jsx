import React from "react";
import HeaderTwo from "../../components/Header/HeaderTwo";
import Overlay from "../../components/Overlay/Overlay";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import ServiceCardTwo from "../../components/ServiceCard/ServiceCardTwo";
import ProcessArea from "../../components/ProcessArea/ProcessArea";
import PriceArea from "../../components/PriceArea/PriceArea";
import TestamonialTwo from "../../components/Testamonial/TestamonialTwo";
import Footer from "../../components/Footer/Footer";
import Preloader from "../../components/Preloader/Preloader";

function ServicePage() {
    return ( <>
    <Preloader/>
    <HeaderTwo/>
    <Overlay/>
    <ContactBanner/>
    <ServiceCardTwo/>
    <ProcessArea/>
    <PriceArea/>
    <TestamonialTwo/>
    <Footer/>
    </> );
}

export default ServicePage;