import { useEffect } from "react";

function Gallery() {
// Add this code after your component has been mounted
useEffect(() => {
  $('.loop').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    autoplay: true,
    nav: true,
    margin: 0,
    responsive: {
      1200: {
        items: 5
      },
      992: {
        items: 3
      },
      760: {
        items: 2
      }
    }
  });
}, []); 

    return(
    <div id="gallery" className="services section ">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="section-heading" data-aos="fade-down" data-aos-offset="300" data-aos-duration="500">
                <h6>Our Gallery</h6>
                <h4>See Our Recent <em>Works &amp; Client</em></h4>
                <div className="line-dec"></div>
              </div>
            </div>
          </div>
        </div> 
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="loop owl-carousel">
                <div className="item">
                  <a href="../gallery/img1.jpg">
                    <div className="portfolio-item">
                    <div className="thumb">
                      <img src="../gallery/img1.jpg" alt="" />
                    </div>
                    <div className="down-content">
                      <span>CCTV Set up</span>
                    </div>
                  </div>
                  </a>  
                </div>
                <div className="item">
                  <a href="../gallery/img2.jpg">
                    <div className="portfolio-item">
                    <div className="thumb">
                      <img src="../gallery/img2.jpg" alt="" />
                    </div>
                    <div className="down-content">
                      <span>Working in CCTV</span>
                    </div>
                  </div>
                  </a>  
                </div>
                <div className="item">
                  <a href="../gallery/img3.jpg">
                    <div className="portfolio-item">
                    <div className="thumb">
                      <img src="../gallery/img3.jpg" alt="" />
                    </div>
                    <div className="down-content">
                      <span>CCTV Monitor</span>
                    </div>
                  </div>
                  </a>  
                </div>
                <div className="item">
                  <a href="../gallery/img4.jpg">
                    <div className="portfolio-item">
                    <div className="thumb">
                      <img src="../gallery/img4.jpg" alt="" />
                    </div>
                    <div className="down-content">
                      <span>Working in CCTV</span>
                    </div>
                  </div>
                  </a>  
                </div>
                <div className="item">
                  <a href="../gallery/img5.jpg">
                    <div className="portfolio-item">
                    <div className="thumb">
                      <img src="../gallery/img5.jpg" alt="" />
                    </div>
                    <div className="down-content">
                      <span>Working</span>
                    </div>
                  </div>
                  </a>  
                </div>
                <div className="item">
                  <a href="../gallery/img6.jpg">
                    <div className="portfolio-item">
                    <div className="thumb">
                      <img src="../gallery/img6.jpg" alt="" />
                    </div>
                    <div className="down-content">
                      <span>Customer</span>
                    </div>
                  </div>
                  </a>  
                </div>
                <div className="item">
                  <a href="../gallery/img7.jpg">
                    <div className="portfolio-item">
                    <div className="thumb">
                      <img src="../gallery/img7.jpg" alt="" />
                    </div>
                    <div className="down-content">
                      <span>Marketing</span>
                    </div>
                  </div>
                  </a>  
                </div>
                <div className="item">
                  <a href="../gallery/img8.jpg">
                    <div className="portfolio-item">
                    <div className="thumb">
                      <img src="../gallery/img8.jpg" alt="" />
                    </div>
                    <div className="down-content">
                      <span>Customer</span>
                    </div>
                  </div>
                  </a>  
                </div>
                <div className="item">
                  <a href="../gallery/img9.jpg">
                    <div className="portfolio-item">
                    <div className="thumb">
                      <img src="../gallery/img9.jpg" alt="" />
                    </div>
                    <div className="down-content">
                      <span>Customer</span>
                    </div>
                  </div>
                  </a>  
                </div>
                <div className="item">
                  <a href="../gallery/img10.jpg">
                    <div className="portfolio-item">
                    <div className="thumb">
                      <img src="../gallery/img10.jpg" alt="" />
                    </div>
                    <div className="down-content">
                      <span>Customer</span>
                    </div>
                  </div>
                  </a>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Gallery;