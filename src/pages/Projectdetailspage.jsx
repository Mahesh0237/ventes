import React from 'react'
import Headertwo from '../components/shared/Headertwo'
import Footer from '../components/shared/Footer'
import Projectsdetails from '../components/projects/parts/Projectsdetails'
import Contactform from '../components/homewrapper/Contactform'

function Projectdetailspage() {
    return (
        <div className="body-wrapper">
            <Headertwo />
            <Projectsdetails />
            <Contactform/>
            <Footer />
        </div>
    )
}

export default Projectdetailspage