import React from "react";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import HeaderTwo from "../../components/Header/HeaderTwo";
import ProjectArea from "../../components/ProjectArea/ProjectArea";
import Faq from "../../components/Faq/Faq";
import Footer from "../../components/Footer/Footer";
import Preloader from "../../components/Preloader/Preloader";


function Project() {
    return ( 

<>
<Preloader/>
<HeaderTwo/>
<ContactBanner/>
<ProjectArea/>
<Faq/>
<Footer/>
</>

     );
}

export default Project;