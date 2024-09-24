import React from 'react'
import Footer from '../components/shared/Footer'
import Projectswrapper from '../components/projects/Projectswrapper'
import Header from '../components/shared/Header'
import Contactform from '../components/homewrapper/Contactform'
function Projectpage() {
    return (
        <div className="body-wrapper">
            <Header />
            <Projectswrapper />
            <Contactform />
            <Footer />
        </div>
    )
}

export default Projectpage