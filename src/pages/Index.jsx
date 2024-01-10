import React from 'react';
import Preloader from '../components/Preloader.jsx';
import Preheader from './Preheader.jsx';
import Header from './Header.jsx';
import Banner from './Banner.jsx';
import About from './About.jsx';
import Service from './Service.jsx';
import Gallery from './Gallery.jsx';
import Partners from './Partners.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

function Index() {

    return(
<div>
    < Preloader />
    < Preheader />
    < Header />
    < Banner /> 
    < About />
    < Service />
    < Gallery />
    < Partners />
    < Contact />
    < Footer />

</div>
    )
}


export default Index;