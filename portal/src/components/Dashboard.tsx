import React from 'react'
import { Box, H3, Text } from '@traefiklabs/faency'

const { catalogName, catalogDescription } = window as any

const Dashboard = () => {
  return (
    <Box>
      <H3>{catalogName}</H3>
      <Text>{catalogDescription}</Text>
    </Box>
  )
}

export default Dashboard
