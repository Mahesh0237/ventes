import React from 'react'
import Projectheader from '../components/newprojectwrapper/Projectheader'
import Projectbanner from '../components/newprojectwrapper/Projectbanner'
import { Button, Container, Grid, Group, Image, List, Stack, Text } from '@mantine/core'
import Projectcontactform from '../components/newprojectwrapper/Projectcontactform'
import Sathvik_Amogha_Plots_Brochure from '../assets/brochures/Sathvik_Amogha_Plots_Brochure.pdf'
import { IconDownload, IconPoint } from '@tabler/icons-react'
import Footer from '../components/shared/Footer'
import satvikamogaplot from '../assets/satvikamogaplot.png'
import gallery1 from '../assets/sathvikamogha1.jpeg'
import gallery2 from '../assets/sathvikamogha2.jpeg'
import gallery3 from '../assets/sathvikamogha3.jpeg'
import gallery4 from '../assets/sathvikamogha4.jpeg'
import dsr_rotuemap from '../assets/satvikamogaroutemap.png'

function Sathvikamoghaplotspage() {
    return (
        <div className="body-wrapper">
            <Projectheader />
            <Grid mt={110}>
                <Grid.Col span={{ base: 12, md: 8, lg: 8 }}>
                    <div style={{ position: "relative" }}>
                        <Projectbanner
                            image1={satvikamogaplot}
                            image2={gallery1}
                            image3={gallery3}
                        />
                    </div>
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
                    <Projectcontactform
                        pdf={Sathvik_Amogha_Plots_Brochure}
                        project_name="Sathvik Amogha Plots"
                    />
                </Grid.Col>
            </Grid>
            <Container size={1400}>
                <div className='py-5'>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Image src={gallery2} alt='img' height={400} style={{ objectFit: "fill" }} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Stack mb={50}>
                                <Text ta="center" fw={700} style={{ fontSize: "24px" }}>Satvik Amoga Plots</Text>
                                <Text>
                                    Bangalore is fast developing into a world class city with stateof-the art infrastructure to meet the growing needs of
                                    discerning citizens. A hub of new generation enterprises a
                                    head quarter of Real estate companies, a place with sizable
                                    presence of the IT & BT companies. An attractive destination
                                    for Local & international investments - truly a vibrant
                                    economy and Cosmo society well connected by Rail, Road
                                    and Air to the prominent cities in India and the rest of the
                                    world - Bangalore is undoubtedly the Silicon Valley of India
                                    and Knowledge Capital of India. Here, we are introducing the
                                    great endeavor, DSR Ventures one of the largest vertically
                                    integrated Real Estate Company in Bangalore.
                                    Class living in peaceful and tranquil neighborhoods, where
                                    fresh air, abundant water & blissful silence of countryside.
                                </Text>
                                <Group>
                                    <Button leftSection={<IconDownload size={18} />} size='md' component='a' href={Sathvik_Amogha_Plots_Brochure} download="Sathvik_Amogha_Plots_Brochure">Download Brochure</Button>
                                </Group>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                </div>

                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={30}>Project Highlights</Text>
                    <List spacing={10} listStyleType="disc">
                        <List.Item>45 Mins. drive from Baiyyapanahalli Metro Station</List.Item>
                        <List.Item>30 Mins. drive from International Airport</List.Item>
                        <List.Item>25 Mins. drive from ITPL</List.Item>
                        <List.Item>20 Mins. drive from K R Puram</List.Item>
                        <List.Item>10 Mins. drive from Hoskote</List.Item>
                        <List.Item>8 mins. from MVJ Medical College & Hospital</List.Item>
                        <List.Item>7 Mins. drive from Bangalore - Chennai Express Highway</List.Item>
                        <List.Item>3 Mins. from National Highway</List.Item>
                        <List.Item>Close to Sharanya Narayani Int. School</List.Item>
                        <List.Item>Very Near to Garden City Township</List.Item>
                    </List>
                </div>
                <div className='my-5'>
                    <Text fw={700} style={{ fontSize: "25px" }} pb={20}>World-Class Amenities:</Text>
                    <List spacing={10} listStyleType='disc'>
                        <List.Item>Grand Entrance Arch</List.Item>
                        <List.Item>Concrete Roads</List.Item>
                        <List.Item>Well Plantation</List.Item>
                        <List.Item>Underground Drainage System</List.Item>
                        <List.Item>Underground Water Connection for each plots</List.Item>
                        <List.Item>Well planned Electricity with Street lights</List.Item>
                        <List.Item>24 hrs. Water Supply with over head tank</List.Item>
                        <List.Item>Compound wall </List.Item>
                        <List.Item>Gated community </List.Item>
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
                    </Grid>
                </div>
                <div className='my-3'>
                    <Image src={dsr_rotuemap} alt='img' height={500} style={{objectFit:"fill"}}/>
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

export default Sathvikamoghaplotspage