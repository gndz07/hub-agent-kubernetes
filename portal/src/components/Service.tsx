import 'components/styles/Swagger.css'
import React from 'react'
import { Box } from '@traefiklabs/faency'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
// import { useGetService } from 'hooks/use-services'
import SwaggerUI from 'swagger-ui-react'

const Service = () => {
  const { serviceName } = useParams()

  // const { data } = useGetService(serviceName as string)

  return (
    <Box>
      <Helmet>
        <title>{serviceName || 'API Portal'}</title>
      </Helmet>
      <Box>
        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        <SwaggerUI url="https://petstore.swagger.io/v2/swagger.json" />
      </Box>
    </Box>
  )
}

export default Service
