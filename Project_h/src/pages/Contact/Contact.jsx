import React from "react";
import Overlay from "../../components/Overlay/Overlay";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import ContactArea from "../../components/ContactArea/ContactArea";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import HeaderTwo from "../../components/Header/HeaderTwo";
import Preloader from "../../components/Preloader/Preloader";

function Contact() {
    return ( <>
<Preloader/>
<HeaderTwo/>
<Overlay/>
<ContactBanner/>
<ContactArea/>
<ContactForm/>
<Footer/>

</>
     );
}

export default Contact;