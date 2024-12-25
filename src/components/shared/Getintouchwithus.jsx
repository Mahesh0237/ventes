import React from 'react'
import getintochbg from '../../assets/getintochbg.jpg'
import { BackgroundImage, Center, Text } from '@mantine/core'
import Getintouchform from './Getintouchform'

function Getintouchwithus() {
    return (
        <BackgroundImage
            src={getintochbg}
        >
            <div className='px-3 py-5' style={{ background: "#19191994" }}>
                <Getintouchform />
            </div>
        </BackgroundImage>
    )
}

export default Getintouchwithus