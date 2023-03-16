import React from 'react'
import { Box, H3, Text } from '@traefiklabs/faency'
import { getInjectedValues } from 'utils/getInjectedValues'

const { portalName, portalDescription } = getInjectedValues()

const Dashboard = () => {
  return (
    <Box>
      <H3>{portalName}</H3>
      <Text>{portalDescription}</Text>
    </Box>
  )
}

export default Dashboard
