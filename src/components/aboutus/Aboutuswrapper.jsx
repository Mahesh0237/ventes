import { Container, Divider, Grid, Stack, Text } from '@mantine/core'
import React, { useRef } from 'react'
import realestate1 from '../../assets/realestate1.avif'
import realestate2 from '../../assets/realestate2.avif'
import realestate3 from '../../assets/realestate3.avif'
import realestate4 from '../../assets/realestate4.avif'
import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay';
function Aboutuswrapper() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
    return (
        <Container size={1400} mt={120}>
            <section className='aboutus my-5'>
                <Grid >
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
            <Stack mb={30}>
                <div className='row'>
                    <div className='col-md-4 '>
                        <Stack py={20} >
                            <Text fw={700} c="pink" style={{ fontSize: "25px" }} ta="center">Vision</Text>
                            <Text ta="center">We also take great pride in being a customer-focused organization.
                                This “customer-first” philosophy is constantly translated into
                                trailblazing services and innovative activities. There are many
                                dreams that inspire VENTES . Many avenues await exploration. Many
                                worlds that beckon us. It promises to be a glorious journey for
                                Pruthvi Projects. Check out various options for plots in Bangalore.
                                Travel with us -- and together, let’s celebrate our milestones and ur achievements.
                            </Text>
                        </Stack>
                    </div>
                    <div className='col-md-4'>
                        <Stack py={20} >
                            <Text fw={700} c="pink" style={{ fontSize: "25px" }} ta="center">Mission</Text>
                            <Text ta="center">We also take great pride in being a customer-focused
                                organization. This “customer-first” philosophy is constantly
                                translated into trailblazing services and innovative activities.
                                There are many dreams that inspire VENTES. Many avenues await
                                exploration. Many worlds that beckon us. It promises to be a
                                glorious journey for VENTES. Check out various options for plots
                                in Bangalore. Travel with us -- and together, let’s celebrate our
                                milestones and our achievements.
                            </Text>
                        </Stack>
                    </div>
                    <div className='col-md-4'>
                        <Stack py={20}>
                            <Text fw={700} c="pink" style={{ fontSize: "25px" }} ta="center">Company Profile</Text>
                            <Text ta="center">At VENTES, we value your time and your money. We understand that
                                not only should your index be a refuge from the storms of life but also
                                should give you an excellent return on investment (ROI). Delivery
                                schedules are strictly adhered to, and “value-for-money” is not just
                                another buzz term with us: it’s a business philosophy.
                            </Text>
                        </Stack>
                    </div>
                </div>
            </Stack>
        </Container>
    )
}

export default Aboutuswrapper