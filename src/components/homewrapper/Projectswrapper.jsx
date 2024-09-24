import { Container, Grid, Image, Stack, Text, BackgroundImage, Center, Button } from '@mantine/core'
import React, { useRef } from 'react'
import project1 from '../../assets/latestproject1.png'
import project2 from '../../assets/latestproject.png'
import project3 from '../../assets/latestproject4.png'
import project4 from '../../assets/latestproject3.jpg'
import realestate1 from '../../assets/realestate1.avif'
import realestate2 from '../../assets/realestate2.avif'
import realestate3 from '../../assets/realestate3.avif'
import realestate4 from '../../assets/realestate4.avif'

import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay';
import { IconArrowNarrowRight, IconLocation, IconMapPin } from '@tabler/icons-react'
import Projectcard from './shared/Projectcard'

import Aadhyaa_Properties from '../../assets/brochures/Aadhyaa_Properties.pdf'
import pruthvi_homes from '../../assets/brochures/prithvi_homes.pdf'
import urban_fields from '../../assets/brochures/urban_fields.pdf'
import pruthvi_vivantha from '../../assets/brochures/Vivanta_brochure.pdf'
import { useViewportSize } from '@mantine/hooks'

function Projectswrapper() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
    // const { height, width } = useViewportSize();
    // let updateheight;
    // let updateleftpos;
    // if (width < 500) {
    //     updateheight = '200px'
    //     updateleftpos = "40%"
    // } else if (width < 1200) {
    //     updateheight = '400px'
    //     updateleftpos = "40%"
    // } else {
    //     updateheight = height - 100
    //     updateleftpos = "28%"
    // }
    return (
        <main className="dsr-home-page">
            <section className="latest-listings">
                <div className="section-wrapper">
                    <Container size={1200}>
                        <div className="latest-listings-wrapper">
                            <Stack align="center" justify="center" gap={2} mb={20}>
                                <Text fw={700} style={{ fontSize: "20px" }}> <IconArrowNarrowRight
                                    color='#cea134' size={30} /> Our Latest Projects</Text>
                                <Text fw={700} style={{ fontSize: "24px" }}>Every Project tells a Story</Text>
                            </Stack>
                            {/* <div style={{ height: updateheight, display: 'flex' }}> */}
                            <Carousel
                                withIndicators
                                height={350}
                                align="start"
                                loop
                                slideSize="25%"
                                slideGap="md"
                                withControls={false}
                                plugins={[autoplay.current]}
                                onMouseEnter={autoplay.current.stop}
                                onMouseLeave={autoplay.current.reset}
                            >
                                <Carousel.Slide>
                                    <div style={{ position: "relative", height: "100%" }}>
                                        <img src={realestate2} height="100%" width="100%" alt='' />
                                        <div style={{ position: "absolute", left: "0px", bottom: "0px", backgroundColor: "rgb(23 23 23 / 68%)", padding: "20px" }}>
                                            <Text c="white" fw={700} style={{ fontSize: "20px" }}>URBAN FIELDS</Text>
                                            <div className='d-flex justify-content-start align-items-center my-2'>
                                                <IconMapPin color='yellow' size={15} />
                                                <Text c="yellow" size='md' ml={10} fw={600}>
                                                    Bengaluru, Karnataka.
                                                </Text>
                                            </div>
                                            <Text c="white" size='sm'>Your gateway to luxury living urban fields, part of our meticulously planned 6-acre layout with local body approval, offers a unique combination of urban luxury. </Text>
                                            <Button mt={10} fullWidth color='#741853' component='a' href={urban_fields} download="urban_fields">Download Brochure</Button>
                                        </div>
                                    </div>
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <div style={{ position: "relative", height: "100%" }}>
                                        <img src={realestate3} height="100%" width="100%" alt='' />
                                        <div style={{ position: "absolute", left: "0px", bottom: "0px", backgroundColor: "rgb(23 23 23 / 68%)", padding: "20px" }}>
                                            <Text c="white" fw={700} style={{ fontSize: "20px" }}>PRUTHVI VIVANTA</Text>
                                            <div className='d-flex justify-content-start align-items-center my-2'>
                                                <IconMapPin color='yellow' size={15} />
                                                <Text c="yellow" size='md' ml={10} fw={600}>
                                                    Bengaluru, Karnataka.
                                                </Text>
                                            </div>
                                            <Text c="white" size='sm'>Our endeavor is to create a unique world for you, one that transports you to a realm of fine living and indulgence. Our Luxury Villa project in the flourishing environs of Bengaluru</Text>
                                            <Button mt={10} fullWidth color='#741853' component='a' href={pruthvi_vivantha} download="pruthvi_vivantha">Download Brochure</Button>
                                        </div>
                                    </div>
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <div style={{ position: "relative", height: "100%" }}>
                                        <img src={realestate4} height="100%" width="100%" alt='' />
                                        <div style={{ position: "absolute", left: "0px", bottom: "0px", backgroundColor: "rgb(23 23 23 / 68%)", padding: "20px" }}>
                                            <Text c="white" fw={700} style={{ fontSize: "20px" }}>PRUTHVI HOMES</Text>
                                            <div className='d-flex justify-content-start align-items-center my-2'>
                                                <IconMapPin color='yellow' size={15} />
                                                <Text c="yellow" size='md' ml={10} fw={600}>
                                                    Bengaluru, Karnataka.
                                                </Text>
                                            </div>
                                            <Text c="white" size='sm'>Our endeavor is to create a unique world for you, one that transports you to a realm of fine living and indulgence. Our luxury Apartments project in the flourishing environs.</Text>
                                            <Button mt={10} fullWidth color='#741853' component='a' href={pruthvi_homes} download="pruthvi_homes">Download Brochure</Button>
                                        </div>
                                    </div>
                                </Carousel.Slide>
                                <Carousel.Slide>
                                    <div style={{ position: "relative", height: "100%" }}>
                                        <img src={realestate1} height="100%" width="100%" alt='' />
                                        <div style={{ position: "absolute", left: "0px", bottom: "0px", backgroundColor: "rgb(23 23 23 / 68%)", padding: "20px" }}>
                                            <Text c="white" fw={700} style={{ fontSize: "20px" }}>AADHYAA PROPERTIES</Text>
                                            <div className='d-flex justify-content-start align-items-center my-2'>
                                                <IconMapPin color='yellow' size={15} />
                                                <Text c="yellow" size='md' ml={10} fw={600}>
                                                    Bengaluru, Karnataka.
                                                </Text>
                                            </div>
                                            <Text c="white" size='sm'>Aadhyaa Properties is revolutionizing the real estate industry. We don't only sell plots; we curate possibilities. Each plot is a promise of possibility, painstakingly created and lovingly.</Text>
                                            <Button mt={10} fullWidth color='#741853' component='a' href={Aadhyaa_Properties} download="Aadhyaa_Properties">Download Brochure</Button>
                                        </div>
                                    </div>
                                </Carousel.Slide>
                            </Carousel>
                            {/* </div> */}
                        </div>
                    </Container>
                </div>
            </section>

            <section className='aboutus mb-5 pt-5'>
                <Grid px={10}>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Stack p={15}>
                            <Text style={{ fontSize: "30px" }} ta="center" fw={700}>REAL ESTATE, ELEVATED OUR UNIQUE EDGE</Text>
                            <Text size='lg'>
                                At Ventes Consulting, we're not just another entity in the real estate world; we're the solution to the industry's most pressing challenges.
                                With a deep understanding of the unique pain points faced by Developers/Builders, Channel Partners, and Buyers/Investors, we've tailored our services to offer holistic solutions.
                            </Text>
                            <Text size='lg'>
                                Our strategic approach ensures that developers benefit from optimized project strategies, channel partners experience seamless collaborations, and buyers/investors embark on a transparent and hassle-free journey to their dream properties. By bridging gaps and fostering harmonious relationships, we're redefining the real estate experience for every stakeholder.
                            </Text>
                        </Stack>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Image src={realestate1} alt='img' width={300} height={400} />
                    </Grid.Col>
                </Grid>
            </section>

            <section className='aboutus my-5'>
                <Grid px={50} mt={100}>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Carousel
                            withIndicators
                            height={350}
                            loop
                            withControls={false}
                            plugins={[autoplay.current]}
                            onMouseEnter={autoplay.current.stop}
                            onMouseLeave={autoplay.current.reset}
                        >
                            <Carousel.Slide>
                                <img src={realestate2} height="100%" width="100%" alt='' />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <img src={realestate3} height="100%" width="100%" alt='' />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <img src={realestate4} height="100%" width="100%" alt='' />
                            </Carousel.Slide>
                            <Carousel.Slide>
                                <img src={realestate1} height="100%" width="100%" alt='' />
                            </Carousel.Slide>
                        </Carousel>
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                        <Stack px={25}>
                            <Text style={{ fontSize: "30px" }} ta="center" fw={700}>About Us</Text>
                            <Text size='lg'>
                                VENTES was established in 2011, with apartment construction as its main focus, we strive to
                                build superior apartments for our customers with the highest level of quality construction
                                services at fair and market-competitive prices. We research, analyze, and determine the
                                best cost-effective and regulatory design to suit our customers needs. We accomplish this
                                by listening to our client's needs and concerns and addressing them in a timely and
                                effective fashion. Our name is synonymous with quality and timely delivery. Our reputation
                                is built on the strength of our relationships with our clients. We take great pride in our
                                accomplishments and build on them every day.
                            </Text>

                        </Stack>
                    </Grid.Col>
                </Grid>
            </section>
        </main>
    )
}

export default Projectswrapper