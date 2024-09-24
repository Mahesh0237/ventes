import React from 'react'
import Headertwo from '../components/shared/Headertwo'
import Footer from '../components/shared/Footer'
import Aboutuswrapper from '../components/aboutus/Aboutuswrapper'
import Header from '../components/shared/Header'
import Contactform from '../components/homewrapper/Contactform'

function Aboutuspage() {
    return (
        <div className="body-wrapper">
            <Header />
            <Aboutuswrapper />
            <Contactform />
            <Footer />
        </div>
    )
}

export default Aboutuspage