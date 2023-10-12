import React from "react";
import HeaderTwo from "../../components/Header/HeaderTwo";
import Overlay from "../../components/Overlay/Overlay";
import ContactBanner from "../../components/ContactBanner/ContactBanner";
import BlogAreaTwo from "../../components/BlogArea/BlogAreaTwo";
import Footer from "../../components/Footer/Footer";
import Preloader from "../../components/Preloader/Preloader";

function BlogPageTwo() {
    return ( <>
    <Preloader/>
    <HeaderTwo/>
    <Overlay/>
    <ContactBanner/>
    <BlogAreaTwo/>
    <Footer/>
    
    </> );
}

export default BlogPageTwo;