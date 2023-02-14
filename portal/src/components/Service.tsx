import React from 'react'
import { Box, H2 } from '@traefiklabs/faency'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { useGetService } from 'hooks/use-services'

const Service = () => {
  const { serviceName } = useParams()

  const { data } = useGetService(serviceName as string)

  return (
    <Box>
      <Helmet>
        <title>{serviceName || 'API Portal'}</title>
      </Helmet>
      <H2>{serviceName}</H2>
      <Box css={{ mt: '$5' }}>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Box>
    </Box>
  )
}

export default Service
