import React from 'react'
import { Box, H2 } from '@traefiklabs/faency'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useServices } from 'hooks/use-services'

const Service = () => {
  const { serviceName } = useParams()
  const data = useServices()

  return (
    <Box>
      <Helmet>{serviceName}</Helmet>
      <H2>{serviceName}</H2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </Box>
  )
}

export default Service
