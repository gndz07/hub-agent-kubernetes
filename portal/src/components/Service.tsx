import React from 'react'
import { Box, H2 } from '@traefiklabs/faency'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

const Service = () => {
  const { serviceName } = useParams()

  return (
    <Box>
      <Helmet>{serviceName}</Helmet>
      <H2>{serviceName}</H2>
    </Box>
  )
}

export default Service
