import { Button, Stack, Text } from '@mantine/core'
import React from 'react'
import { IconMapPin } from '@tabler/icons-react'
function Latestprojectcard({ title, desc, location, image, pdf, project_link }) {
    return (
        <a href={project_link} style={{ position: "relative", height: "100%" }}>
            <img src={image} height={370} />
            <div style={{ position: "absolute", left: '0px', bottom: "0px", background: "rgba(23, 23, 23, 0.68)", padding: "20px" }}>
                <Stack gap={0}>
                    <Text size='lg' c="white" fw={700} component='a' href={project_link}>{title}</Text>
                    <div className="d-flex justify-content-start align-items-center my-2">
                        <IconMapPin size={16} color='#fab005' />
                        <Text size='md' c="#fab005" fw={700}>{location}</Text>
                    </div>
                    <Text size='sm' c="white">{desc}</Text>
                    <Button color='#68164b' fullWidth mt={10} component='a' href={pdf} download={pdf}>Download Brochure</Button>
                </Stack>
            </div>
        </a>
    )
}

export default Latestprojectcard