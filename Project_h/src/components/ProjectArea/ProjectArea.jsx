import React, { useEffect, useRef } from "react";
import Isotope from "isotope-layout";
import $ from "jquery";

function ProjectArea() {
  const isotopeContainer = useRef(null);
  const isotope = useRef(null);

  useEffect(() => {
    if (isotopeContainer.current) {
      isotope.current = new Isotope(isotopeContainer.current, {
        itemSelector: ".isotope-item",
        layoutMode: "fitRows",
      });
    }
  }, []);

  const handleFilterClick = (filterValue) => {
    if (isotope.current) {
      isotope.current.arrange({ filter: filterValue });
    }
  };

  return (
    <div className="project-card-wrapper">
      <div className="container">
        <div className="section-title-wrapper justify-center">
          <div className="section-title text-center ">
            <div className="short-title">
              <span>Project</span>
            </div>
            <h2 className="title">
              Take a look some of our <br />
              recent case{" "}
              <span className="underline1">
                <img src="images/shape/underline.png" alt="underline" /> studies
              </span>
            </h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="project-btn-wrapper filter-button-group">
              <button
                onClick={() => handleFilterClick("*")}
                className="filter-button active"
              >
                Show All
              </button>
              <button
                onClick={() => handleFilterClick(".userInterface")}
                className="filter-button"
              >
                User interface
              </button>
              <button
                onClick={() => handleFilterClick(".design")}
                className="filter-button"
              >
                Design
              </button>
              <button
                onClick={() => handleFilterClick(".webApp")}
                className="filter-button"
              >
                Web app
              </button>
              <button
                onClick={() => handleFilterClick(".mobileApp")}
                className="filter-button"
              >
                Mobile app
              </button>
              <button
                onClick={() => handleFilterClick(".webDesign")}
                className="filter-button"
              >
                Website design
              </button>
            </div>
          </div>
        </div>
        <div className="row g-4 p-0 m-0 isotope-grid">
          <div className="sm:w-[50%] isotope-item userInterface webDesign">
            <div className="project-card style-1">
              <div className="portfolio-card style-2">
                <div className="image">
                  <img
                    src="images/portfolio/image-2-large.jpg"
                    alt="portfolio"
                  />
                </div>
                <div className="overlay"></div>
                <div className="content">
                  <div className="icon">
                    <a href="project-details.html">
                      <i className="icon-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="content-wrapper">
                <h4>Mobile app design</h4>
                <div className="tag-wrapper">
                  <span className="single-tag">App design</span>
                  <span className="single-tag secondary">User interface</span>
                </div>
                <p className="desc">
                  Ut enim ad minim veniam, quis nostrud exer cita tion ullamco
                  laboris nisi utim aliquip ex ea commodo con veniam, quis
                  nostrud exercitation minim venia
                </p>
              </div>
            </div>
          </div>
          <div className="sm:w-[50%] isotope-item design mobileApp">
            <div className="project-card style-1">
              <div className="portfolio-card style-2">
                <div className="image">
                  <img
                    src="images/portfolio/image-1-large.jpg"
                    alt="portfolio"
                  />
                </div>
                <div className="overlay"></div>
                <div className="content">
                  <div className="icon">
                    <a href="project-details.html">
                      <i className="icon-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="content-wrapper">
                <h4>Mobile app design</h4>
                <div className="tag-wrapper">
                  <span className="single-tag">App design</span>
                  <span className="single-tag secondary">User interface</span>
                </div>
                <p className="desc">
                  Ut enim ad minim veniam, quis nostrud exer cita tion ullamco
                  laboris nisi utim aliquip ex ea commodo con veniam, quis
                  nostrud exercitation minim venia
                </p>
              </div>
            </div>
          </div>
          <div className="sm:w-[50%] isotope-item webApp userInterface">
            <div className="project-card style-1">
              <div className="portfolio-card style-2">
                <div className="image">
                  <img src="images/portfolio/image-3.jpg" alt="portfolio" />
                </div>
                <div className="overlay"></div>
                <div className="content">
                  <div className="icon">
                    <a href="project-details.html">
                      <i className="icon-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="content-wrapper">
                <h4>Mobile app design</h4>
                <div className="tag-wrapper">
                  <span className="single-tag">App design</span>
                  <span className="single-tag secondary">User interface</span>
                </div>
                <p className="desc">
                  Ut enim ad minim veniam, quis nostrud exer cita tion ullamco
                  laboris nisi utim aliquip ex ea commodo con veniam, quis
                  nostrud exercitation minim venia
                </p>
              </div>
            </div>
          </div>
          <div className="sm:w-[50%] isotope-item design mobileApp">
            <div className="project-card style-1">
              <div className="portfolio-card style-2">
                <div className="image">
                  <img src="images/portfolio/image-4.jpg" alt="portfolio" />
                </div>
                <div className="overlay"></div>
                <div className="content">
                  <div className="icon">
                    <a href="project-details.html">
                      <i className="icon-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="content-wrapper">
                <h4>Mobile app design</h4>
                <div className="tag-wrapper">
                  <span className="single-tag">App design</span>
                  <span className="single-tag secondary">User interface</span>
                </div>
                <p className="desc">
                  Ut enim ad minim veniam, quis nostrud exer cita tion ullamco
                  laboris nisi utim aliquip ex ea commodo con veniam, quis
                  nostrud exercitation minim venia
                </p>
              </div>
            </div>
          </div>
          <div className="sm:w-[50%] isotope-item  mobileApp webDesign">
            <div className="project-card style-1">
              <div className="portfolio-card style-2">
                <div className="image">
                  <img src="images/portfolio/image-5.jpg" alt="portfolio" />
                </div>
                <div className="overlay"></div>
                <div className="content">
                  <div className="icon">
                    <a href="project-details.html">
                      <i className="icon-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="content-wrapper">
                <h4>Mobile app design</h4>
                <div className="tag-wrapper">
                  <span className="single-tag">App design</span>
                  <span className="single-tag secondary">User interface</span>
                </div>
                <p className="desc">
                  Ut enim ad minim veniam, quis nostrud exer cita tion ullamco
                  laboris nisi utim aliquip ex ea commodo con veniam, quis
                  nostrud exercitation minim venia
                </p>
              </div>
            </div>
          </div>
          <div className="sm:w-[50%] isotope-item design webApp">
            <div className="project-card style-1">
              <div className="portfolio-card style-2">
                <div className="image">
                  <img src="images/portfolio/image-6.jpg" alt="portfolio" />
                </div>
                <div className="overlay"></div>
                <div className="content">
                  <div className="icon">
                    <a href="project-details.html">
                      <i className="icon-right-arrow"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="content-wrapper">
                <h4>Mobile app design</h4>
                <div className="tag-wrapper">
                  <span className="single-tag">App design</span>
                  <span className="single-tag secondary">User interface</span>
                </div>
                <p className="desc">
                  Ut enim ad minim veniam, quis nostrud exer cita tion ullamco
                  laboris nisi utim aliquip ex ea commodo con veniam, quis
                  nostrud exercitation minim venia
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="btn-wrapper">
          <a href="project.html#" className="theme-btn">
            <div className="swip">
              <div className="title-wrapper">
                <span className="title-1">Load more</span>
                <span className="title-2">Load more</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectArea;
