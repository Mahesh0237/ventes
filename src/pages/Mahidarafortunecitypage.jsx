import React from 'react'
import Projectheader from '../components/newprojectwrapper/Projectheader'
import Projectbanner from '../components/newprojectwrapper/Projectbanner'
import { Button, Container, Grid, Group, Image, List, Stack, Text } from '@mantine/core'
import Projectcontactform from '../components/newprojectwrapper/Projectcontactform'
import Mahidhara_fortune from '../assets/brochures/Mahidhara_fortune.pdf'
import { IconDownload, IconPoint } from '@tabler/icons-react'
import gallery1 from '../components/newprojectwrapper/newassets/pruthvihome.jpg'
import pool from '../components/newprojectwrapper/newassets/pool.jpg'
import mahidhara_about from '../assets/mahidhara_about.png'
import mahidhara_layout from '../assets/mahidhara_layout.png'
import mahidhara_gallery1 from '../assets/mahidhara_gallery1.png'
import mahidhara_gallery2 from '../assets/mahidhara_gallery2.png'
import mahidhara_gallery3 from '../assets/mahidhara_gallery3.png'
import Footer from '../components/shared/Footer'

function Mahidarafortunecitypage() {
    return (
        <div className="body-wrapper">
            <Projectheader />
            <Grid mt={110}>
                <Grid.Col span={{ base: 12, md: 8, lg: 8 }}>
                    <div style={{ position: "relative" }}>
                        <Projectbanner />
                    </div>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcontactform
                        pdf={Mahidhara_fortune}
                        project_name="Mahidhara Fortune CMR PPR City"
                    />
                </Grid.Col>
            </Grid>
            <Container size={1400}>
                <Stack my={50}>
                    <Text style={{ fontSize: "30px" }} fw={700}>Mahidara CMR PPR Fortune City</Text>
                    <Text>
                        Living at Mahidhara Fortune City is a compliment to elegant engineering. For the connoisseurs of the fine living who wish to take the right size of living space, Fortune City comprising over 1000 housing units spreads forward an ample choice of lifestyle measurements. With Plots measuring 1200 to 2400 sq.ft.Mahidhara Fortune City also caters plots to the investing enthusiast. Mahidhara Fortune City is a commitment to dedication.
                    </Text>
                    <Group>
                        <Button leftSection={<IconDownload size={18} />} size='md' component='a' href={Mahidhara_fortune} download="Mahidhara_fortune">Download Brochure</Button>
                    </Group>
                </Stack>
                <div className='mb-5'>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Image src={mahidhara_about} alt='img' height={400} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Stack>
                                <Text ta="center" fw={700} style={{ fontSize: "24px" }}>Mahidara CMR PPR Fortune City</Text>
                                <Text>Live in the part of the city, where every element is brought together for you to experience the comforts and luxuries of life every day. Draped in the scenic beauty of nature, Mahidhara Fortune City is the largest township in south Bengaluru, with villa plots, thus catering to everyone who desires to live a perfect life here at Mahidhara Fortune City.</Text>
                                <Text>At Fortune City, the havens are designed with a central focus on comfort and convenience. These perfectly secure abodes come at an affordable price, making them a highly preferred choice for settling in.</Text>
                                <Text>The sports arena at Fortune City nurtures a healthy lifestyle with a varied array of activities for all ages that lets you rejuvenate your physical and mental health for a fortified living.</Text>
                                <Text>Discover the joy of indulging in the present moments of life with the array of amenities in the lavishly spread 20,000 sft clubhouse that lets you escape into the world of tranquillity and bliss.</Text>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                </div>
                <Stack>
                    <Text fw={700} style={{ fontSize: "25px" }}>Why Choose Mahidhara CMR PPR Fortune City?</Text>
                    <Text>Largest Township in South Bengaluru
                        Scenic Surroundings – Draped in lush greenery and natural beauty
                        Premium Villa Plots – Spacious plots tailored for your dream home
                        Modern Amenities – Designed for a comfortable and luxurious lifestyle
                        Prime Location – Excellent connectivity to key areas in Bengaluru
                        High ROI Potential – A smart investment in a growing area
                    </Text>
                    <Text fw={700} style={{ fontSize: "25px" }}>Strategically Located for Your Convenience</Text>
                    <Text>Situated in South Bengaluru, Mahidhara Fortune City offers:</Text>
                    <List
                        icon={<IconPoint />}
                    >
                        <List.Item>Easy access to major highways and city centers</List.Item>
                        <List.Item>Proximity to schools, hospitals, shopping centers, and IT hubs</List.Item>
                        <List.Item>A serene environment away from the city’s hustle, yet close to all
                            essentials</List.Item>
                    </List>
                </Stack>
                <div className='my-4'>
                    <Text fw={700} style={{ fontSize: "30px" }} pb={20}>Gallery</Text>
                    <Grid>
                        {/* <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={gallery1} alt='img' height={300} />
                        </Grid.Col> */}

                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={mahidhara_gallery1} alt='img' height={300} /></Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={mahidhara_gallery2} alt='img' height={300} /></Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={mahidhara_gallery3} alt='img' height={300} /></Grid.Col>
                    </Grid>
                    {/* <Image src={gallery1} alt='img' height={400} /> */}
                </div>
                <Image src={mahidhara_layout} alt='img' />
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

export default Mahidarafortunecitypage