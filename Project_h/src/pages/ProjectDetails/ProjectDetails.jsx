import React from "react";
import HeaderTwo from "../../components/Header/HeaderTwo";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import ProjectDetail from "../../components/ProjectDetail/ProjectDetail";
import ProjectAreaTwo from "../../components/ProjectArea/ProjectAreaTwo";
import Footer from "../../components/Footer/Footer";
import Preloader from "../../components/Preloader/Preloader";

function ProjectDetails() {
    return ( 

<>
<Preloader/>
<HeaderTwo/>
<ContactBanner/>
<ProjectDetail/>
<ProjectAreaTwo/>
<Footer/>
</>

     );
}

export default ProjectDetails;