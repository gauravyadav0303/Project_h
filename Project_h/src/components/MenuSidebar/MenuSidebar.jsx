import React, { useEffect } from "react";

function MenuSidebar() {
  // Function to initialize the jQuery MeanMenu
  const initializeMeanMenu = () => {
    $('#main-menu').meanmenu({
      meanMenuContainer: '.mobile-nav-menu',
      meanScreenWidth: "991",
      meanExpand: ['<i class="fal fa-plus"></i>'],
    });
  };

  // Function to open the menu sidebar
  const openMenuSidebar = () => {
    $(".menu-sidebar-area").addClass("active");
    $(".body-overlay").addClass("active");
  };

  // Function to close the menu sidebar
  const closeMenuSidebar = () => {
    $(".menu-sidebar-area").removeClass("active");
    $(".body-overlay").removeClass("active");
  };

  // Initialize the MeanMenu and event listeners when the component mounts
  useEffect(() => {
    initializeMeanMenu();

    // Event listener for opening the menu sidebar
    $(".mobile-menu-toggle-btn").on("click", openMenuSidebar);

    // Event listener for closing the menu sidebar
    $(".menu-sidebar-close-btn").on("click", closeMenuSidebar);
  }, []);

  return (
    <div className="menu-sidebar-area">
      <div className="menu-sidebar-wrapper">
        <div className="menu-sidebar-close">
          <button className="menu-sidebar-close-btn" id="menu_sidebar_close_btn">
            <i className="fal fa-times"></i>
          </button>
        </div>
        <div className="menu-sidebar-content">
          <div className="menu-sidebar-logo">
            <a href="index.html">
              <img src="images/logo/logo.png" alt="logo" />
            </a>
          </div>
          <div className="mobile-nav-menu"></div>
          <div className="menu-sidebar-content">
            <div className="menu-sidebar-single-widget">
              <h5 className="menu-sidebar-title">Contact Info</h5>
              <div className="header-contact-info">
                <span><i className="fa-solid fa-location-dot"></i>20, Bordeshi, New York, US</span>
                <span><a href="mailto:hello@hivency.com"><i className="fa-solid fa-envelope"></i>hello@hivency.com</a></span>
                <span><a href="tel:+123-456-7890"><i className="fa-solid fa-phone"></i>+123-456-7890</a></span>
              </div>
              <div className="social-profile">
                <a href="index.html#"><i className="fa-brands fa-facebook-f"></i></a>
                <a href="index.html#"><i className="fa-brands fa-twitter"></i></a>
                <a href="index.html#"><i className="fa-brands fa-linkedin-in"></i></a>
                <a href="index.html#"><i className="fa-brands fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuSidebar;
