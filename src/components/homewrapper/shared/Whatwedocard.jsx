import { Card, Group, Text } from '@mantine/core'
import React from 'react'

function Whatwedocard({ heading, para }) {
  return (
    <Card withBorder py={40}>
      <div style={{display:"flex", alignItems:"center"}}>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-arrow-right" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
            <path d="M16 12l-4 -4" />
            <path d="M16 12h-8" />
            <path d="M12 16l4 -4" />
          </svg>
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