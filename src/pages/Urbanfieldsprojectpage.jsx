import React from 'react'
import Projectheader from '../components/newprojectwrapper/Projectheader'
import Projectbanner from '../components/newprojectwrapper/Projectbanner'
import { Button, Container, Grid, Group, Image, Stack, Text } from '@mantine/core'
import Projectcontactform from '../components/newprojectwrapper/Projectcontactform'
import urban_fields from '../assets/brochures/urban_fields.pdf'
import { IconDownload } from '@tabler/icons-react'
import gallery1 from '../components/newprojectwrapper/newassets/pruthvihome.jpg'
import pool from '../components/newprojectwrapper/newassets/pool.jpg'
import Footer from '../components/shared/Footer'

function Urbanfieldsprojectpage() {
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
                        pdf={urban_fields}
                    />
                </Grid.Col>
            </Grid>
            <Container size={1400}>
                <Stack my={50}>
                    <Text style={{ fontSize: "30px" }} fw={700}>URBAN FIELDS</Text>
                    <Text>
                        FIELDS: YOUR GATEWAY TO LUXURY LIVING Urban Fields, part of our meticulously planned 6-acre layout with local body approval, offers a unique combination of urban luxury and natural tranquillity. Nestled on the outskirts of Whitefield, this development is where UbranFields lifestyle meets serene living. Situated within a 4 km radius of Whitefield Main Road, Urban Fields provides seamless access to key locations, including the school zone in Whitefield, via Kadugodi Road. This prime location ensures that residents enjoy the best of both worlds: the vibrancy of city life and the calm of nature. Urban Fields is strategically situated in the East of Bengaluru, just under 5 km from Hoskote town center. Located a mere 1 km off NH 207, the project offers excellent connectivity to Whitefield Main Road via the approved 300 ft wide TRR.
                    </Text>
                    <Group>
                        <Button leftSection={<IconDownload size={18} />} size='md' component='a' href={urban_fields} download="urban_fields">Download Brochure</Button>
                    </Group>
                </Stack>
                <div className='mb-5'>
                    <Grid>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Image src={pool} alt='img' height={300} />
                        </Grid.Col>
                        <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                            <Stack>
                                <Text ta="center" fw={700} style={{ fontSize: "24px" }}>URBAN FIELDS</Text>
                                <Text>Our endeavor is to create a unique world for you, one that transports you to a realm of fine living and indulgence.</Text>
                                <Text>It has a close proximity to all the public places; yet calm in its own nviron. The sheer verdant atmosphere boosted by the unique landscaping created by renowned designers,upled with the cutting edge lifestyle choices and the breathtaking aesthetics, ensure that you get the best of both worlds. These luxurious Apartments in Bangalore have more value than you could ever imagine.</Text>
                            </Stack>
                        </Grid.Col>
                    </Grid>
                </div>
                <div className='my-4'>
                    <Text fw={700} style={{ fontSize: "30px" }} pb={20}>Gallery</Text>
                    <Image src={gallery1} alt='img' height={400} />
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

export default Urbanfieldsprojectpage