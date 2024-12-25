import React from 'react'
import Header from '../components/shared/Header'
import Banner from '../components/homewrapper/Banner'
import Projectswrapper from '../components/homewrapper/Projectswrapper'
import Footer from '../components/shared/Footer'
import Whoweare from '../components/homewrapper/Whoweare'
import Whatwedo from '../components/homewrapper/Whatwedo'
import Getintouchwithus from '../components/shared/Getintouchwithus'
function Homepage() {
    return (
        <div className="body-wrapper">
            <Header />
            <Banner />
            <Whoweare />
            <Whatwedo />
            <Projectswrapper />
            <Getintouchwithus/>
            <Footer />
        </div>
    )
}

export default Homepage