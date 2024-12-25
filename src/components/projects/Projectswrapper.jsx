import React from 'react'
import { Container, Grid, Stack, Text } from '@mantine/core'
import latestproject1 from '../../assets/latestproject1.png'
import latestproject2 from '../../assets/latestproject.png'
import latestproject3 from '../../assets/latestproject4.png'
import latestproject4 from '../../assets/latestproject3.jpg'

import project1 from '../../assets/project11.jpeg'
import project2 from '../../assets/project22.jpeg'
import project3 from '../../assets/project33.jpeg'
import project4 from '../../assets/slider11.jpeg'
import project5 from '../../assets/slider12.jpeg'
import project6 from '../../assets/slider13.jpeg'
import project7 from '../../assets/slider14.jpeg'
import project8 from '../../assets/slider10.jpeg'
import project9 from '../../assets/slider9.jpeg'
import Projectcard from '../homewrapper/shared/Projectcard';
function Projectwrapper() {
    return (
        <Container size={1600} mb={50} mt={120}>
            <Text ta="center" fw={700} mb={30} style={{ fontSize: "35px" }}>Our Projects</Text>
            <Grid >
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcard
                        img={latestproject1}
                        name="URBAN FIELDS"
                        desc=" FIELDS: YOUR GATEWAY TO LUXURY LIVING
 Urban Fields, part of our meticulously planned 6-acre layout with
 local body approval, offers a unique combination of urban luxury and
 natural tranquillity. Nestled on the outskirts of Whitefield, this
 development is where UbranFields lifestyle meets serene living.  Situated within a 4 km radius of Whitefield Main Road, Urban Fields
 provides seamless access to key locations, including the school zone
 in Whitefield, via Kadugodi Road. This prime location ensures that
 residents enjoy the best of both worlds: the vibrancy of city life and
 the calm of nature.
  Urban Fields is strategically situated in the East of Bengaluru, just
 under 5 km from Hoskote town center. 
Located a mere 1 km off NH 207, the project offers excellent
 connectivity to Whitefield Main Road via the approved 300 ft wide TRR.
 "
                        project_link="/urbanfields"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcard
                        img={latestproject2}
                        name="PRUTHVI VIVANTA"
                        desc="Our endeavor is to create a unique world for you, one that transports you to a realm of fine living and indulgence. Our Luxury Villa project in the flourishing environs of Bengaluru, we are poised to deliver on this promise. You often dream of a place close to Bengaluru, yet calm. The spacious Villas in Bengaluru are well equipped to embrace all your dreams. A luxurious Villas in Bengaluru, PRUTHVI PROJECTS is poised with mazing architectural efforts. It has a close proximity to all the public places; yet calm in its own nviron. The sheer verdant atmosphere boosted by the unique landscaping created by renowned designers,upled with the cutting edge lifestyle choices and the breathtaking aesthetics, ensure that you get the best of both worlds. These luxurious Villas in Bengaluru have more value than you could ever imagine."
                        project_link="/pruthvivivantha"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcard
                        img={latestproject3}
                        name="PRUTHVI HOMES"
                        desc="Our endeavor is to create a unique world for you, one that transports you to a realm of fine living and indulgence. Our luxury Apartments project in the flourishing environs of Jigani Bangalore, we are poised to deliver on this promise. You often dream of a place close to Jigani Bangalore city, yet calm. The spacious Apartments in Jigani Bangalore are well equipped to embrace all your dreams. A luxurious Apartments in Jigani Bangalore, PRUTHVI HOMES is poised with mazing architectural efforts. It has a close proximity to all the public places; yet calm in its own nviron. The sheer verdant atmosphere boosted by the unique landscaping created by renowned designers,upled with the cutting edge lifestyle choices and the breathtaking aesthetics, ensure that you get the best of both worlds."
                        project_link="/pruthvihomes"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcard
                        img={latestproject4}
                        name="AADHYAA PROPERTIES"
                        desc="Aadhyaa Properties is revolutionizing the real estate industry. We don't only sell plots; we curate possibilities. Each plot is a promise of possibility, painstakingly created and lovingly placed to blend effortlessly into the tapestry of your dreams.

Our commitment to not just meeting but also surpassing your expectations is what makes us unique. We are in the business of influencing destinies rather than merely selling real estate."
                        project_link="/aadhyaproperties"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcard
                        img={project1}
                        name="RICHMOND PRIDE"
                        desc="Richmond Pride offers 2 / 3 BHK Residential Apartments in Bangalore. The project offers a nurturing space where life blooms in tranquillity. It is a self-contained township, offering you world-class amenities. The facilities inside the complex, its ambience & the location make it an exceptional living space. Richmond has placed Bangalore definitely on the global IT map. Today being home to many of the leading IT companies, Hospitals, Schools, Restaurants and best malls."
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcard
                        img={project2}
                        name="PRUTHVI PARADISE"
                        desc="Pruthvi Paradise is a 7-acre residential plot by Pruthvi Projects. This plot
is available for sale in Jigani, Bangalore. This project offers plots in various
sizes. The minimum plot size is 1396.0 sq.ft. and the maximum size is
1939.0 sq.ft.. This project was launched on December 2018. The address
of Pruthvi paradise is Jigani. 146 Units
This residential land for sale is RERA approved. For details, check RERA ID
PRM/KA/RERA/1251/308/PR/190330/002508."
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcard
                        img={project3}
                        name="KUMARI VILLAS"
                        desc="Kumari Oakville is strategically crafted by the renowned
builder Kumari Builders And Developers. It is a splendid
Residential development in Sarjapur Road, a posh locality in
Bangalore having all the utilities and basic needs within
easy reach. It constitutes modern Villas with all the highend, contemporary interior fittings. Set within picturesque
and magnificent views of the countryside, this grand
property at Ittangur, Sarjapur Road, Bangalore, Karnataka,
INDIA.
"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcard
                        img={project4}
                        name="DSR GREENS"
                        desc="DSR GREENS is a 7-acre residential plot by DSR. This plot is available forsale in Hoskote, Bangalore. This project offers plots in various sizes. Theminimum plot size is 1396.0 sq.ft. and the maximum size is 1939.0 sq.ft..This project was launched on December 2018. The address of DSRGREENSis Hoskote . 146 Units"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcard
                        img={project5}
                        name="PRUTHVI PRIME"
                        desc="Positioned at well connected locality Sarjapura,
Pruthvi Prime is an aesthetically built project of
Bangalore. It is spread over a sprawling area of 7 Acre.
The project features a total of 171 units that are wellventilated.
The available project units are in Ready To Move state.
The project's official launch date is 01 June 2020. Its
possession date is 01 December 2020.
"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcard
                        img={project6}
                        name="PRUTHVI ASSET"
                        desc="Situated in Sarjapur Road, the Pruthvi Asset is
planned to offer a modern lifestyle to all the residents.
The project is spread over a wide area of 3 Acre. The
project features a total of 91 units that are wellventilated.
The units of this property are Under Construction. The
launch date of this beautiful project is 01 January
2022. 01 July 2023 is the date of possession.

"
                    />

                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcard
                        img={project7}
                        name="PURVI PRISTINE"
                        desc="Purvi Group is famous for their well-planned societies
like Purvi Pristine in Bangalore. If you have always
wanted to be part of a vibrant and well managed
society, this is the best option for you. No matter what
the weather is like outside, you can always try out
True in this society to beat boredom."
                    />

                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcard
                        img={project8}
                        name="PRUTHVI GREENFIELD"
                        desc="Pruthvi Greenfields is a residential plot by
Pruthvi Projects. This plot is available for sale
in Jigani, Bangalore. The plot area is 794.0
sq.ft.. This project was launched on June
2013. There are 130 units in Pruthvi
Greenfields. The address of Pruthvi
Greenfields is Jigani, Bangalore.
"
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcard
                        img={project9}
                        name="VASUDHA RAJA GRUHA HSR LAYOUT"
                        desc="Vasudhaa Raja Gruha is a well-planned project that is
ideally positioned in Hsr Layout, Bangalore. It is
spread out over a large area of 1 Acre. . 40 Units.To help keep the
society looking as good as new there are True that
take care of everything. 70 Units"
                    />
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default Projectwrapper 