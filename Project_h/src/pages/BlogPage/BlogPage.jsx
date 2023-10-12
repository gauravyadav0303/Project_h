import React from "react";
import BlogArea from "../../components/BlogArea/BlogArea";
import HeaderTwo from "../../components/Header/HeaderTwo";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import Overlay from "../../components/Overlay/Overlay";
import Footer from "../../components/Footer/Footer";
import Preloader from "../../components/Preloader/Preloader";

function Blog() {
    return ( <>
    <Preloader/>
    <HeaderTwo/>
    <Overlay/>
    <ContactBanner/>
    <BlogArea/>
   <Footer/>
    </> );
}

export default Blog;