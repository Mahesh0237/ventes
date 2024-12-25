import React from 'react'
import Projectheader from '../components/newprojectwrapper/Projectheader'
import Projectbanner from '../components/newprojectwrapper/Projectbanner'
import { Button, Container, Grid, Group, Image, List, Stack, Text } from '@mantine/core'
import Projectcontactform from '../components/newprojectwrapper/Projectcontactform'
import pruthvi_vivantha from '../assets/brochures/pruthvi_vivantha.pdf'
import { IconDots, IconDownload, IconPoint } from '@tabler/icons-react'
import gallery1 from '../components/newprojectwrapper/newassets/pruthvihome.jpg'
import pool from '../components/newprojectwrapper/newassets/pool.jpg'
import Footer from '../components/shared/Footer'
import vivantha_gallery1 from '../assets/vivantha_gallery1.jpeg'
import vivantha_gallery2 from '../assets/vivantha_gallery2.jpeg'
import vivantha_gallery3 from '../assets/vivantha_gallery3.jpeg'
import vivantha_gallery4 from '../assets/vivantha_gallery4.jpeg'
import vivantha_gallery5 from '../assets/vivantha_gallery5.jpeg'
import vivantha_gallery6 from '../assets/vivantha_gallery6.jpeg'

function Pruthvivivanthaprojectpage() {
    return (
        <div className="body-wrapper">
            <Projectheader />
            <Grid mt={50}>
                <Grid.Col span={{ base: 12, md: 8, lg: 8 }}>
                    <div style={{ position: "relative" }}>
                        <Projectbanner />
                    </div>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcontactform
                        pdf={pruthvi_vivantha}
                        project_name = "Pruthvi Vivantha"
                    />
                </Grid.Col>
            </Grid>
            <Container size={1400}>
                <Stack my={50}>
                    <Text style={{ fontSize: "30px" }} fw={700}>PRUTHVI VIVANTA</Text>
                    <Text>
                        Our endeavor is to create a unique world for you, one that transports you to a realm of fine living and indulgence. Our Luxury Villa project in the flourishing environs of Bengaluru, we are poised to deliver on this promise. You often dream of a place close to Bengaluru, yet calm. The spacious Villas in Bengaluru are well equipped to embrace all your dreams. A luxurious Villas in Bengaluru, PRUTHVI PROJECTS is poised with mazing architectural efforts. It has a close proximity to all the public places; yet calm in its own nviron. The sheer verdant atmosphere boosted by the unique landscaping created by renowned designers,upled with the cutting edge lifestyle choices and the breathtaking aesthetics, ensure that you get the best of both worlds. These luxurious Villas in Bengaluru have more value than you could ever imagine.
                    </Text>
                    <Group>
                        <Button leftSection={<IconDownload size={18} />} size='md' component='a' href={pruthvi_vivantha} download="pruthvi_vivantha">Download Brochure</Button>
                    </Group>
                </Stack>
                <div className='mb-5'>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Image src={vivantha_gallery1} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Stack>
                                <Text ta="center" fw={700} style={{ fontSize: "24px" }}>PRUTHVI VIVANTA</Text>
                                <Text>Our endeavor is to create a unique world for you, one that transports you to a realm of fine living and indulgence.</Text>
                                <Text>It has a close proximity to all the public places; yet calm in its own nviron. The sheer verdant atmosphere boosted by the unique landscaping created by renowned designers,upled with the cutting edge lifestyle choices and the breathtaking aesthetics, ensure that you get the best of both worlds. These luxurious Apartments in Bangalore have more value than you could ever imagine.</Text>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                </div>
                <Text>Zen-themed villas are designed to promote relaxation, harmony, and balance, inspired by Zen philosophy and Japanese aesthetics. Some common features of Zen-themed villas include:</Text>
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
                </List>
                <div className='my-4'>
                    <Text fw={700} style={{ fontSize: "30px" }} pb={20}>Gallery</Text>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={vivantha_gallery1} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={vivantha_gallery2} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={vivantha_gallery3} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={vivantha_gallery4} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={vivantha_gallery5} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                            <Image src={vivantha_gallery6} alt='img' height={300} />
                        </Grid.Col>
                    </Grid>
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

export default Pruthvivivanthaprojectpage