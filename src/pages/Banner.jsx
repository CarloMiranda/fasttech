

function Banner() {

    return(
        <div className="main-banner" id="top" data-aos="fade-in" data-aos-duration="1500">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                    <div className="row">
                        <div className="col-lg-6 align-self-center">
                            <div className="left-content show-up header-text" data-aos="fade-up" data-aos-duration="1500">
                                <div className="row">
                                <div className="col-lg-12">
                                    <h6 className="banner=text">Your Gateway to Tech Brilliance.</h6>
                                    <h2>We Craft Your Digital Journey.</h2>
                                    <p className="banner=text">Unleash Power, Customize Precision, Upgrade Possibilities.</p>
                                </div>
                                <div className="col-lg-12">
                                    <div className="border-first-button scroll-to-section" data-aos="fade-right" data-aos-duration="3000">
                                    <a href="#contact">Contact Us</a>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                        <div className="right-image" data-aos="fade-left" data-aos-duration="2500">
                            <img src="../images/banner.jpg" alt="Fast Tech Computer" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner;