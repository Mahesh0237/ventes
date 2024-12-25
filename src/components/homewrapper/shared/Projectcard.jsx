import { Card, Group, Image, Text } from '@mantine/core'
import React from 'react'

function Projectcard({ img, name, desc, project_link }) {
    return (

        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section inheritPadding>
                <Image
                    src={img}
                    height={300}
                    alt="img"
                />
            </Card.Section>

            <Group justify="space-between" mt="md" mb="xs">
                <Text fw={700} ta="center" size='lg' component='a' href={project_link}>{name} </Text>
            </Group>

            <Text ta="justify">
                {desc}
            </Text>
        </Card>
    )
}

export default Projectcard