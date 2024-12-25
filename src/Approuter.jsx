import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Aboutuspage from './pages/Aboutuspage'
import Contactuspage from './pages/Contactuspage'
import Projectpage from './pages/Projectpage'
import Projectdetailspage from './pages/Projectdetailspage'
import Pruthvihomesprojectpage from './pages/Pruthvihomesprojectpage'
import Urbanfieldsprojectpage from './pages/Urbanfieldsprojectpage'
import Pruthvivivanthaprojectpage from './pages/Pruthvivivanthaprojectpage'
import Aadhyapropertiesprojectpage from './pages/Aadhyapropertiesprojectpage'
import Satvikfurtuneprojectpage from './pages/Satvikfurtuneprojectpage'
import Mahidarafortunecitypage from './pages/Mahidarafortunecitypage'
function Approuter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route path='/aboutus' element={<Aboutuspage />} />
                <Route path='/projects' element={<Projectpage />} />
                <Route path='/contactus' element={<Contactuspage />} />
                <Route path='/projectdetails' element={<Projectdetailspage />} />
                <Route path='/pruthvihomes' element={<Pruthvihomesprojectpage />} />
                <Route path='/urbanfields' element={<Urbanfieldsprojectpage />} />
                <Route path='/pruthvivivantha' element={<Pruthvivivanthaprojectpage />} />
                <Route path='/aadhyaproperties' element={<Aadhyapropertiesprojectpage />} />
                <Route path='/satvikfortune' element={<Satvikfurtuneprojectpage />} />
                <Route path='/mahidarafortunercity' element={<Mahidarafortunecitypage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Approuter