import React from 'react'
import Footer from '../components/shared/Footer'
import Aboutuswrapper from '../components/aboutus/Aboutuswrapper'
import Header from '../components/shared/Header'
import Getintouchwithus from '../components/shared/Getintouchwithus'

function Aboutuspage() {
    return (
        <div className="body-wrapper">
            <Header />
            <Aboutuswrapper />
            <Getintouchwithus/>
            <Footer />
        </div>
    )
}

export default Aboutuspage