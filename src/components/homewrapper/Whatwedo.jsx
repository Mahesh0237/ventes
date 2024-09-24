import { Button, Container, Grid, Group, Stack, Text } from '@mantine/core'
import { IconArrowNarrowRight } from '@tabler/icons-react'
import React from 'react'
import Whatwedocard from './shared/Whatwedocard'

function Whatwedo() {
    return (
        <Container size={1200} pt={60}>
            <Stack align='center'>
                <Text fw={700} style={{ fontSize: "20px" }} c="black"> <IconArrowNarrowRight color='#cea134' size={30} />WHAT WE DO</Text>
                <Text fw={700} style={{ fontSize: "28px" }} c="black">MASTERING OUR EXPERTISE UNVEILED</Text>
            </Stack>
            <Grid py={30}>
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                    <Whatwedocard
                        heading="Real estate  sales & marketing / construction"
                        para="We specialize in providing comprehensive sales and marketing solutions tailored for the real estate industry."
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                    <Whatwedocard
                        heading="solar panel"
                        para="we offer professional solar panel installation services for residential, commercial, and industrial properties. "
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                    <Whatwedocard
                        heading="mattress"
                        para="We offer high-quality mattress solutions as part of our furnishing services for residential and commercial properties. "
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                    <Whatwedocard
                        heading="Interiors"
                        para="We provide comprehensive interior design and furnishing services to enhance the aesthetic appeal and functionality of residential."
                    />
                </Grid.Col>
                <Grid.Col span={{ base: 12, md: 6, lg: 6 }}>
                    <Whatwedocard
                        heading="lead generation for any project"
                        para="We provide expert lead generation services to help businesses in various industries connect with their target audience and convert prospects into clients"
                    />
                </Grid.Col>
            </Grid>
        </Container>
    )
}

export default Whatwedo