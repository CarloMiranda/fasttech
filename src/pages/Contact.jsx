

function Contact() {

    return(
        <div id="contact" className="contact-us section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading" data-aos="fade-down" data-aos-offset="300" data-aos-duration="500">
                <h6>Contact Us</h6>
                <h4>Get In Touch With Us <em>Now</em></h4>
                <div className="line-dec"></div>
              </div>
            </div>
            <div className="col-lg-12 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.25s">
              <form id="contact" action="" method="post">
                <div className="row">
                  <div className="col-lg-12" data-aos="fade-left" data-aos-offset="300" data-aos-duration="3000">
                    <div className="contact-dec">
                      <img src="../images/contact-dec-v3.png" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div id="map">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.2967083456692!2d125.53231299999999!3d8.944782800000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3301c05006267073%3A0xc8fa3f838a5599ec!2sJose%20Rosales%20Ave%2C%20Butuan%20City%2C%20Agusan%20Del%20Norte!5e0!3m2!1sen!2sph!4v1704886766711!5m2!1sen!2sph" width="100%" height="636px" frameBorder="0" style={{border:0}} allowFullScreen></iframe>
                    </div>
                  </div>
                  <div className="col-lg-7" data-aos="zoom-in" data-aos-offset="300" data-aos-duration="3000">
                    <div className="fill-form">
                      <div className="row">
                        <div className="col-lg-4">
                          <div className="info-post">
                            <div className="icon">
                              <img src="../images/phone-icon.png" alt="" />
                              <a href="#">09268571232</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="info-post">
                            <div className="icon">
                              <img src="../images/email-icon.png" alt="" />
                              <a href="#">sales@fasttech <br /> computers.ph</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-4">
                          <div className="info-post">
                            <div className="icon">
                              <img src="../images/location-icon.png" alt="" />
                              <a href="#">Butuan city, Philippines</a>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <input type="name" name="name" id="name" placeholder="Name" autoComplete="on" required />
                          </fieldset>
                          <fieldset>
                            <input type="text" name="email" id="email" pattern="[^ @]*@[^ @]*" placeholder="Your Email" required="" />
                          </fieldset>
                          <fieldset>
                            <input type="subject" name="subject" id="subject" placeholder="Subject" autoComplete="on" />
                          </fieldset>
                        </div>
                        <div className="col-lg-6">
                          <fieldset>
                            <textarea name="message" type="text" className="form-control" id="message" placeholder="Message" required=""></textarea>  
                          </fieldset>
                        </div>
                        <div className="col-lg-12">
                          <fieldset>
                            <button type="submit" id="form-submit" className="main-button ">Send Message Now</button>
                          </fieldset>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Contact;