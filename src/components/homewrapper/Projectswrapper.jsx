import { Container, Grid, Image, Stack, Text } from '@mantine/core'
import React, { useRef } from 'react'
import realestate1 from '../../assets/realestate1.avif'
import realestate2 from '../../assets/realestate2.avif'
import realestate3 from '../../assets/pruthvi_apartments.jpeg'
import realestate4 from '../../assets/realestate4.avif'
import ventes_villa from '../../assets/ventes_slider5.jpeg'
import Dsr_fortune_city from '../../assets/Dsr_fortune_city.jpeg'
import mahidara_projrct from '../../assets/mahidara_project.jpg'
import pruthvi_vivanthaa from '../../assets/pruthvi_vivantha.jpeg'
import { Carousel } from '@mantine/carousel'
import Autoplay from 'embla-carousel-autoplay';
import { IconArrowNarrowRight } from '@tabler/icons-react'
import Latestprojectcard from './shared/Latestprojectcard'
import urban_fields from '../../assets/brochures/urban_fields.pdf'
import Satvik_Fortune from '../../assets/brochures/Satvik_Fortune.pdf'
import pruthvi_homes from '../../assets/brochures/pruthvi_homes.pdf'
import pruthvi_vivantha from '../../assets/brochures/pruthvi_vivantha.pdf'
import Mahidhara_fortune from '../../assets/brochures/Mahidhara_fortune.pdf'

function Projectswrapper() {
    const autoplay = useRef(Autoplay({ delay: 2000 }));
    return (
        <main className="dsr-home-page">
            <section className="latest-listings">
                <div className="section-wrapper">
                    <div className="latest-listings-wrapper">
                        <Text fw={700} ta="center" pb={5} style={{ fontSize: "20px" }}> <IconArrowNarrowRight color='#cea134' size={30} />Our Latest Projects</Text>
                        <Text fw={700} ta="center" pb={20} style={{ fontSize: "24px" }}>Every Project tells a Story</Text>
                        <Container size={1400}>
                            <div className="latest-listings-slider">
                                <Grid px={20}>
                                    <Grid.Col span={{ base: 12, md: 3, lg: 3 }}>
                                        <Latestprojectcard
                                            image={mahidara_projrct}
                                            title="MAHIDHARA CMR PPR FORTUNE CITY"
                                            location="Bengaluru, Karnataka."
                                            desc="Living at Mahidhara Fortune City is a compliment to elegant engineering. For the connoisseurs of the fine living who wish to take the right size of living space, Fortune City."
                                            pdf={Mahidhara_fortune}
                                            project_link="/mahidarafortunercity"
                                        />
                                    </Grid.Col>
                                    <Grid.Col span={{ base: 12, md: 3, lg: 3 }}>
                                        <Latestprojectcard
                                            image={Dsr_fortune_city}
                                            title="SATVIK FORTUNE CITY"
                                            location="Bengaluru, Karnataka."
                                            desc="DSR Fortune City is a prestigious, BMRDA-approved residential layout located in the thriving suburb of Hoskote, Bangalore. Spread over a vast expanse, this well-planned township offers."
                                            pdf={Satvik_Fortune}
                                            project_link="/satvikfortune"
                                        />
                                    </Grid.Col>
                                    <Grid.Col span={{ base: 12, md: 3, lg: 3 }}>
                                        <Latestprojectcard
                                            image={ventes_villa}
                                            title="PRUTHVI VIVANTA"
                                            location="Bengaluru, Karnataka."
                                            desc="Our endeavor is to create a unique world for you, one that transports you to a realm of fine living and indulgence. Our Luxury Villa project in the flourishing environs of Bengaluru"
                                            pdf={pruthvi_vivantha}
                                            project_link="/pruthvivivantha"
                                        />
                                    </Grid.Col>
                                    <Grid.Col span={{ base: 12, md: 3, lg: 3 }}>
                                        <Latestprojectcard
                                            image={realestate3}
                                            title="PRUTHVI HOMES"
                                            location="Bengaluru, Karnataka."
                                            desc="Our endeavor is to create a unique world for you, one that transports you to a realm of fine living and indulgence. Our luxury Apartments project in the flourishing environs."
                                            pdf={pruthvi_homes}
                                            project_link="/pruthvihomes"
                                        />
                                    </Grid.Col>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                </div>
            </section>

            <Container size={1400}>
                <section className='aboutus mb-5 pt-5'>
                    <Grid >
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
                    <Grid mt={100}>
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
            </Container>
        </main>
    )
}

export default Projectswrapper