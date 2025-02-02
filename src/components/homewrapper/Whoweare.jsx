import { Button, Container, Grid, Group, Image, List, Stack, Text } from '@mantine/core'
import React from 'react'
import about from '../../assets/ventes_about.avif'
import { IconArrowNarrowRight } from '@tabler/icons-react'
function Whoweare() {
    return (
        <Container size={1400} py={40} mt={30}>
            <Grid>
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                    <Image src={about} alt='img' height={400} />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                    <Stack pl={30} gap={5}>
                        <Text fw={700} style={{ fontSize: "20px" }}> <IconArrowNarrowRight color='#cea134' size={30} /> WHO WE ARE</Text>
                        <Text fw={700} style={{ fontSize: "24px" }}>The Ventes Difference: Strategize, Launch, Lead</Text>
                        <Text mb={10}>At Ventes Consulting, we are not just another real estate firm—we are your trusted mandate partner, driving success through strategic expertise and operational excellence.</Text>
                        {/* <Text fw={700} style={{ fontSize: "28px" }} c="blue">we're a movement.</Text> */}
                        {/* <Text>Founded by a dynamic duo, Ventes Enterprises  has emerged as a leading force in the real estate mandate space, setting new benchmarks in strategy, launch execution, and project management.</Text>
                        <Text py={10}>Over the years, we've achieved significant milestones, including becoming the Launch & Strategic Partner for esteemed developers in Bangalore and managing CRM and operations for industry giants like Manyata Developers, AMT Ventures, and Valmark.</Text>
                        <Text>Powered by a robust team of over 60 seasoned professionals, we're not just meeting industry standards—we're raising them.</Text> */}
                        <List >
                            <List.Item >✔ Strategic Launch Partnerships – Collaborating with top developers to ensure successful project launches.</List.Item>
                            <List.Item>✔ CRM & Operations Management – Streamlining processes for industry giants like Manyata Developers, AMT Ventures, Valmark, and Pioneer Developers.</List.Item>
                            <List.Item>✔  End-to-End Sales & Marketing Solutions – Delivering results-driven strategies to maximize project success.</List.Item>
                        </List>
                        <List mt={10}>
                            <List.Item>🚀 A proven track record in driving real estate success.</List.Item>
                            <List.Item>👥 A team of 20+ experienced professionals raising industry standards.</List.Item>
                            <List.Item>📈 A deep understanding of market trends and buyer behavior.</List.Item>
                        </List>
                        <Text>At Ventes Consulting, we don’t just meet expectations—we exceed them. Partner with us and experience real estate excellence like never before.</Text>
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