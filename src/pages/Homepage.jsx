import React from 'react'
import Header from '../components/shared/Header'
import Banner from '../components/homewrapper/Banner'
import Projectswrapper from '../components/homewrapper/Projectswrapper'
import Footer from '../components/shared/Footer'
import Whoweare from '../components/homewrapper/Whoweare'
import Whatwedo from '../components/homewrapper/Whatwedo'
import Contactform from '../components/homewrapper/Contactform'
function Homepage() {
    return (
        <div className="body-wrapper">
            <Header />
            <Banner />
            <Whoweare />
            <Whatwedo />
            <Projectswrapper />
            <Contactform />
            <Footer />
        </div>
    )
}

export default Homepage