import { Button, Container, Grid, Group, Image, Stack, Text } from '@mantine/core'
import React from 'react'
import about from '../../assets/ventes_about.avif'
import { IconArrowNarrowRight } from '@tabler/icons-react'
function Whoweare() {
    return (
        <Container size={1400} py={40} mt={30}>
            <Grid>
                <Grid.Col span={{ base: 12, md: 6, lg: 6}}>
                    <Image src={about} alt='img' height={400} />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                    <Stack pl={30} gap={5}>
                        <Text fw={700} style={{ fontSize: "20px" }}> <IconArrowNarrowRight color='#cea134' size={30} /> WHO WE ARE</Text>
                        <Text fw={700} style={{ fontSize: "24px" }}>STRATEGIZE, LAUNCH, LEAD:
                            THE VENTES DIFFERENCE</Text>
                        <Text mb={10}>At Ventes Consulting, we're not just a company</Text>
                        {/* <Text fw={700} style={{ fontSize: "28px" }} c="blue">we're a movement.</Text> */}
                        <Text>Founded by the dynamic duo, Boppanna Monnapa and Rayan Munawer, we've emerged as a trusted Real Estate Mandate Partner, setting new precedents in the market.</Text>
                        <Text py={10}>Over the years, we've achieved significant milestones, including becoming the Launch & Strategic Partner for esteemed developers in Bangalore and managing CRM and operations for industry giants like Manyata Developers, AMT Ventures, and Valmark.</Text>
                        <Text>Powered by a robust team of over 60 seasoned professionals, we're not just meeting industry standards—we're raising them.</Text>
                        <Group pt={10}>
                            <Button color='#c20060' component='a' href='/aboutus'>Read More</Button>
                        </Group>
                    </Stack>
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default Whoweare