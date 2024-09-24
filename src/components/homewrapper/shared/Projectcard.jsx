import { Button, Card, Group, Image, Text } from '@mantine/core'
import { IconDownload } from '@tabler/icons-react'
import React from 'react'
function Projectcard({ img, name, desc, brochuer, brochuer_name }) {
    return (

        <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section p={10}>
                <Image
                    src={img}
                    height={300}
                    alt="img"
                />
            </Card.Section>

            <Card.Section p={10}>
                <Group justify="space-between" mt="md" mb="xs">
                    <Text fw={700} ta="center" size='lg'>{name} </Text>
                </Group>

                <Text ta="justify">
                    {desc}
                </Text>
            </Card.Section>
            {
                brochuer &&
                <Card.Section p={20} pt={10}>
                    <Button color='dark' leftSection={<IconDownload size={14} />} component='a' href={brochuer} download={brochuer_name}>Download brochure</Button>
                </Card.Section>
            }
        </Card>
    )
}

export default Projectcard