import React from 'react'
// import useSWR from 'swr'
import { NavigationDrawer, NavigationContainer, Box, NavigationLink, H3, H1 } from '@traefiklabs/faency'
import { useNavigate } from 'react-router-dom'

const SideNavbar = ({ catalogName }: { catalogName: string }) => {
  // const { data: services } = useSWR(`/api/${catalogName}/services`)
  const services = ['petstore-svc@petstore']

  const navigate = useNavigate()

  return (
    <NavigationDrawer css={{ width: 240 }}>
      <NavigationContainer
        css={{
          flexGrow: 1,
        }}
      >
        <>
          <H1>{catalogName}</H1>
          <H3 css={{ mt: '$6' }}>API References</H3>
          {services?.map((service, index) => (
            <Box key={`sidenav-${index}`} css={{ mt: '$1' }}>
              <NavigationLink onClick={() => navigate(`/${service}`)} css={{ whiteSpace: 'nowrap' }}>
                {service}
              </NavigationLink>
            </Box>
          ))}
        </>
      </NavigationContainer>
    </NavigationDrawer>
  )
}

export default SideNavbar
