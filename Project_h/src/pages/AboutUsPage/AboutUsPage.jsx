import React from "react";
import HeaderTwo from "../../components/Header/HeaderTwo";
import Overlay from "../../components/Overlay/Overlay";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import AboutUsTwo from "../../components/AboutUs/AboutUsTwo";
import CounterOne from "../../components/Counter/CounterOne";
import ChooseUsTwo from "../../components/ChooseUs/ChooseUsTwo";
import Team from "../../components/Team/Team";
import TestamonialTwo from "../../components/Testamonial/TestamonialTwo";
import Footer from "../../components/Footer/Footer";
import OfficeArea from "../../components/OfficeArea/OfficeArea";
import Preloader from "../../components/Preloader/Preloader";


function AboutUsPage() {
    return ( <>
    <Preloader/>
    <HeaderTwo/>
    <Overlay/>
    <ContactBanner/>
    <AboutUsTwo/>
    <CounterOne/>
    <ChooseUsTwo/>
    
    <Team/>
    <TestamonialTwo/>
    <OfficeArea/>
    <Footer/>
    </> );
}

export default AboutUsPage;