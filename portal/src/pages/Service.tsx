import 'components/styles/Swagger.css'
import React, { useMemo } from 'react'
import { Box } from '@traefiklabs/faency'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import SwaggerUI from 'swagger-ui-react'
import { getInjectedValues } from 'utils/getInjectedValues'

// const requestInterceptor = (req) => {
//   const token = localStorage.getItem('token')
//   return {
//     ...req,
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }
// }

const Service = () => {
  const { portalName } = getInjectedValues()
  const { apiName, collectionName } = useParams()

  const specUrl = useMemo(() => {
    if (collectionName) {
      return `/api/${portalName}/collections/${collectionName}/apis/${apiName}`
    }

    return `/api/${portalName}/apis/${apiName}`
  }, [collectionName, portalName, apiName])

  return (
    <Box>
      <Helmet>
        <title>{apiName || 'API Portal'}</title>
      </Helmet>
      <Box>
        <SwaggerUI url={specUrl} />
      </Box>
    </Box>
  )
}

export default Service
