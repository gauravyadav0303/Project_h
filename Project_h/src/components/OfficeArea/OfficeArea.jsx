import React, {useEffect} from "react";

function OfficeArea() {
  useEffect(() => {
  $('.tilt-animate').tilt({
    maxTilt: 12,
    perspective: 1500,
})
}, []);

    return ( 
        <div className="location-area style-1">
  <div className="container">
    <div className="row justify-content-between align-items-center">
      <div className="md:w-[41.67%]">
        <div className="content-wrapper">
            <div className="section-title">
              <div className="short-title">
                  <span>Our office</span>
              </div>
              <h2 className="title">Our office location</h2>
            </div>
            <div className="accordion accordion-flush" id="accordionFlushExampleTWO">
              <div className="accordion-item style-2">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button " type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false">
                    San fransisco       
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExampleTWO">
                  <div className="accordion-body">
                    <p>853 Snowbird Lane Omaha Newyourk</p>
                    <p>edgy@gmail.com</p>
                    <p>2563-2563-5483</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item style-2">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" >
                    London, UK       
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExampleTWO">
                  <div className="accordion-body">
                    <p>853 Snowbird Lane Omaha Newyourk</p>
                    <p>edgy@gmail.com</p>
                    <p>2563-2563-5483</p>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div className="md:w-[41.67%]">
        <div className="image">
          <img className="tilt-animate" src="images/common/loaction-area.jpg" alt="loaction"/>
        </div>
      </div>
    </div>
  </div>
</div>
     );
}

export default OfficeArea;