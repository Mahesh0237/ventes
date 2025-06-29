import React from 'react'
import Projectheader from '../components/newprojectwrapper/Projectheader'
import Projectbanner from '../components/newprojectwrapper/Projectbanner'
import { Button, Container, Grid, Group, Image, List, Stack, Text } from '@mantine/core'
import Projectcontactform from '../components/newprojectwrapper/Projectcontactform'
import DSR_Sathvik_Fusion_city from '../assets/brochures/DSR_Sathvik_Fusion_City.pdf'
import { IconDownload, IconPoint } from '@tabler/icons-react'
import Footer from '../components/shared/Footer'
import Sathvikfusioncity from '../assets/Sathvikfusioncity.png'
import gallery1 from '../assets/sathvikfusioncitygallery1.png'
import gallery2 from '../assets/sathvikfusioncitygallery2.png'
import gallery3 from '../assets/sathvikfusioncitygallery3.png'
import gallery4 from '../assets/sathvikfusioncitygallery3.png'
import dsr_rotuemap from '../assets/sathvikfusioncitymap.png'

function Sathvikfusioncitypage() {
    return (
        <div className="body-wrapper">
            <Projectheader />
            <Grid mt={110}>
                <Grid.Col span={{ base: 12, md: 8, lg: 8 }}>
                    <div style={{ position: "relative" }}>
                        <Projectbanner
                            image1={Sathvikfusioncity}
                            image2={gallery1}
                            imsge3={gallery2}
                        />
                    </div>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcontactform
                        pdf={DSR_Sathvik_Fusion_city}
                        project_name="Sathvik Fusion City"
                    />
                </Grid.Col>
            </Grid>
            <Container size={1400}>
                <div className='py-5'>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Image src={gallery2} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Stack mb={50}>
                                <Text style={{ fontSize: "30px" }} fw={700}>Sathvik Fusion City</Text>
                                <Text>
                                    DSR Sathvik Fusion City is a prestigious, BMRDA - approved residential layout located in the thriving suburb of Hoskote, Bangalore. Spread over a vast expanse, this well-planned township offers a perfect blend of urban connectivity and serene living, designed to meet the aspirations of modern home buyers. With an array of plot sizes to choose from, DSR Sathvik Fusion City caters to both investors and families looking to build their dream homes.
                                </Text>
                                <Group>
                                    <Button leftSection={<IconDownload size={18} />} size='md' component='a' href={DSR_Sathvik_Fusion_city} download="DSR_Sathvik_Fusion_city">Download Brochure</Button>
                                </Group>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                </div>
                {/* <Text>Zen-themed villas are designed to promote relaxation, harmony, and balance, inspired by Zen philosophy and Japanese aesthetics. Some common features of Zen-themed villas include:</Text>
                <List
                    icon={<IconPoint />}
                >
                    <List.Item>Minimalist decor.</List.Item>
                    <List.Item>Natural materials like wood and stone Serene gardens and water features.</List.Item>
                    <List.Item>Simple, clean lines and open spaces</List.Item>
                    <List.Item>Muted color palettes with natural accents</List.Item>
                    <List.Item>Architecture: Clean lines, minimal ornamentation, and an emphasis on natural light and ventilation.</List.Item>
                    <List.Item>Interiors: Simple, uncluttered spaces with natural materials, plants, and subtle color schemes.</List.Item>
                    <List.Item>Gardens: Serene outdoor spaces with carefully designed water features, stone pathways, and lush greenery.
                    </List.Item>
                    <List.Item>Amenities: Meditation areas, yoga spaces, and spa services for a holistic experience.</List.Item>
                </List> */}
                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={30}>Why Invest in DSR Fusion City?</Text>
                    <List spacing={10}>
                        <List.Item><Text fw={700} component='span'>Future Appreciation:</Text> : The development of the VIT University campus and Garden City University are poised to create immense demand for residential and rental properties in the vicinity.</List.Item>
                        <List.Item><Text fw={700} component='span'>Excellent Connectivity:</Text> The project is ideally located on connecting Hoskote with key areas of Bangalore such as Whitefield, ITPL and Old Madras Road.</List.Item>
                        <List.Item><Text fw={700} component='span'>High Growth Corridor:</Text> Hoskote is one of Bangalore's most rapidly developing zones, with infra structural advancements and numerous upcoming commercial projects</List.Item>
                        <List.Item><Text fw={700} component='span'>Serene Living Environment:</Text> Enjoy the tranquillity of suburban living with lush green surroundings and world-class amenities, all within a stone's throw from urban conveniences. </List.Item>
                    </List>
                </div>
                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={20}>World-Class Amenities:</Text>
                    <List spacing={10}>
                        <List.Item>Entrance Grand Arch</List.Item>
                        <List.Item>Surrounded by compound wall</List.Item>
                        <List.Item>Children's Play Area</List.Item>
                        <List.Item>Jogging Track</List.Item>
                        <List.Item>Parks</List.Item>
                        <List.Item>Landscaped Gardens</List.Item>
                        <List.Item>Underground Drainage System</List.Item>
                        <List.Item>RCC Drainage</List.Item>
                        <List.Item>CC Roads</List.Item>
                        <List.Item>Underground Electricity</List.Item>
                        <List.Item>Wi-Fi cable provided</List.Item>
                        <List.Item>Overhead Tank</List.Item>
                    </List>
                </div>
                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={20}>PROXIMITY:</Text>
                    <List spacing={10}>
                        <List.Item>25 Mins. drive from International Airport</List.Item>
                        <List.Item>30 Mins. drive from Whitefield Metro Station</List.Item>
                        <List.Item>30 Mins. drive from ITPL</List.Item>
                        <List.Item>25 Mins. drive from K R Puram Hanging Bridge</List.Item>
                        <List.Item>10 Mins. drive from MVJ Hospital, Hoskote</List.Item>
                        <List.Item>13 Mins. drive from Hoskote Toll</List.Item>
                        <List.Item>15 Mins. drive from Narasapura Automobile Hub</List.Item>
                        <List.Item>5 mins. drive from Pillagumpe Indl. area, Hoskote</List.Item>
                        <List.Item>1.5 km from VIT university campus </List.Item>
                        <List.Item>1.5 km from National Highway</List.Item>
                        <List.Item>1.5 km from Chintamani Road & Kadapa Highway</List.Item>
                        <List.Item>6 km from Chennai-Bangalore Industrial Corridor</List.Item>
                        <List.Item>Surrounded by Amezon wearhouse, Flipkart, etc</List.Item>
                    </List>
                </div>
                <div className='my-4'>
                    <Text fw={700} style={{ fontSize: "30px" }} pb={20}>Gallery</Text>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={gallery1} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={gallery2} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={gallery3} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={gallery4} alt='img' height={300} />
                        </Grid.Col>
                    </Grid>
                </div>
                <div className='my-3'>
                    <Image src={dsr_rotuemap} alt='img' />
                </div>
                {/* <div className='my-4'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={20}>Location</Text>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15564.848004848904!2d77.65383480000001!3d12.76473995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae6ecacda35401%3A0x4dfe4672a7c89184!2sHaragadde%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1727801959750!5m2!1sen!2sin" width="600" height="250" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Stack>
                                <Text fw={600} size='lg'>For Enquiries contact:</Text>
                                <Text>38/A, Dyavasandra Village, Haragadde Post, Anekal Taluk, Bangalore Urban, <br /> Karnataka- 560099.</Text>
                                <div>
                                    <Text fw={600}>Email</Text>
                                    <Text>Pruthviprojects2005@gmail.com</Text>
                                </div>
                                <div>
                                    <Text fw={600}>Phone</Text>
                                    <Text>9071288899</Text>
                                </div>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                </div> */}
            </Container>
            <Footer />
        </div>
    )
}

export default Sathvikfusioncitypage