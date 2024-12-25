import React from 'react'
import Footer from '../components/shared/Footer'
import Projectswrapper from '../components/projects/Projectswrapper'
import Header from '../components/shared/Header'
import Getintouchwithus from '../components/shared/Getintouchwithus'
function Projectpage() {
    return (
        <div className="body-wrapper">
            <Header />
            <Projectswrapper/>
            <Getintouchwithus/>
            <Footer />
        </div>
    )
}

export default Projectpage