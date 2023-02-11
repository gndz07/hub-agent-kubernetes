import React from 'react'
import { Box, H3, Text } from '@traefiklabs/faency'
import { getInjectedValues } from 'utils/getInjectedValues'

const { catalogName, catalogDescription } = getInjectedValues()

const Dashboard = () => {
  return (
    <Box>
      <H3>{catalogName}</H3>
      <Text>{catalogDescription}</Text>
    </Box>
  )
}

export default Dashboard
