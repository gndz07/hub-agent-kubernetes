import React from 'react'
import { NavigationDrawer, NavigationContainer, NavigationLink, H3, H1, Flex } from '@traefiklabs/faency'
import { useNavigate } from 'react-router-dom'
import { useServices } from 'hooks/use-services'

const SideNavbar = ({ catalogName }: { catalogName: string }) => {
  const { data: services } = useServices()

  const navigate = useNavigate()

  return (
    <NavigationDrawer css={{ width: 240 }}>
      <NavigationContainer
        css={{
          flexGrow: 1,
        }}
      >
        <>
          <Flex css={{ height: '$10' }}>
            <H1>{catalogName}</H1>
          </Flex>
          <H3>API References</H3>
          <Flex direction="column" css={{ mt: '$5' }}>
            {services?.map((service: string, index: number) => (
              <NavigationLink
                key={`sidenav-${index}`}
                onClick={() => navigate(`/${service}`)}
                css={{ whiteSpace: 'nowrap' }}
              >
                {service}
              </NavigationLink>
            ))}
          </Flex>
        </>
      </NavigationContainer>
    </NavigationDrawer>
  )
}

export default SideNavbar
