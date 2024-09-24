import { Card, Group, Stack, Text } from '@mantine/core'
import { IconCircleArrowRight } from '@tabler/icons-react'
import React, { useState } from 'react'

function Whatwedocard({ heading, para }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div>
      <Card withBorder py={40} className='whatwedocard'
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <IconCircleArrowRight size={60}
            color={isHovered ? 'white' : 'rgb(118, 23, 83)'} />
          <Stack ml={10} gap={2}>
            <Text fw={600} style={{ fontSize: "20px" }}>{heading}</Text>
            <Text>{para}</Text>
          </Stack>
        </div>
      </Card>
    </div>
  )
}

export default Whatwedocard