import 'components/styles/Swagger.css'
import React from 'react'
import { Box } from '@traefiklabs/faency'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SwaggerUI from 'swagger-ui-react'
import { getInjectedValues } from 'utils/getInjectedValues'

const requestInterceptor = (req) => {
  const token = localStorage.getItem('token')
  return {
    ...req,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
}

const Service = () => {
  const { catalogName } = getInjectedValues()
  const { serviceName } = useParams()

  return (
    <Box>
      <Helmet>
        <title>{serviceName || 'API Portal'}</title>
      </Helmet>
      <Box>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <SwaggerUI url={`/api/${catalogName}/services/${serviceName}`} requestInterceptor={requestInterceptor} />
      </Box>
    </Box>
  )
}

export default Service
