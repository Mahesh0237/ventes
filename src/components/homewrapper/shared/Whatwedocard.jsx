import { Card, Group, Text } from '@mantine/core'
import { IconCircleArrowRight } from '@tabler/icons-react'
import React from 'react'

function Whatwedocard({ heading, para }) {
  return (
    <Card withBorder py={40}>
      <div style={{display:"flex", alignItems:"center"}}>
        <div>
          <IconCircleArrowRight size={35} color='#761653'/>
        </div>
        <div className='ms-3'>
          <Text fw={600} style={{ fontSize: "20px" }}>{heading}</Text>
          <Text>{para}</Text>
        </div>
      </div>
    </Card>
  )
}

export default Whatwedocard