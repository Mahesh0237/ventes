import React from 'react'
import Headertwo from '../components/shared/Headertwo'
import Footer from '../components/shared/Footer'
import Projectsdetails from '../components/projects/parts/Projectsdetails'
import Getintouchwithus from '../components/shared/Getintouchwithus'

function Projectdetailspage() {
    return (
        <div className="body-wrapper">
            <Headertwo />
            <Projectsdetails />
            <Getintouchwithus />
            <Footer />
        </div>
    )
}

export default Projectdetailspage