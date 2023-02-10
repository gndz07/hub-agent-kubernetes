import React from 'react'
import { Box, H2 } from '@traefiklabs/faency'
import { useParams } from 'react-router-dom'

const Service = () => {
  const { serviceName } = useParams()

  return (
    <Box>
      <H2>{serviceName}</H2>
    </Box>
  )
}

export default Service
