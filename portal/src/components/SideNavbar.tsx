import React from 'react'
import { NavigationDrawer, NavigationContainer, NavigationLink, H3, H1, Flex, Link, Text } from '@traefiklabs/faency'
import { useLocation, useNavigate } from 'react-router-dom'
import { useServices } from 'hooks/use-services'
import { FiPower } from 'react-icons/fi'
import { useAuthDispatch, useAuthState } from 'context/auth'
import { handleLogOut } from 'context/auth/actions'

const CustomNavigationLink = NavigationLink as any

const SideNavbar = ({ catalogName }: { catalogName: string }) => {
  const { pathname } = useLocation()
  const { data: services } = useServices()
  const authDispatch = useAuthDispatch()
  const { user } = useAuthState()

  const navigate = useNavigate()

  return (
    <NavigationDrawer css={{ width: 240 }}>
      <NavigationContainer
        css={{
          flexGrow: 1,
        }}
      >
        <>
          <Link
            onClick={() => navigate(`/`)}
            css={{ textDecoration: 'none', '&:hover': { textDecoration: 'none', cursor: 'pointer' } }}
          >
            <Flex css={{ height: '$10' }}>
              <H1>{catalogName}</H1>
            </Flex>
          </Link>
          <H3>Available APIs</H3>
          <Flex direction="column" css={{ mt: '$5' }}>
            {services?.map((service: string, index: number) => (
              <NavigationLink
                active={pathname.slice(1) === service}
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
      <NavigationContainer>
        <Text css={{ pl: '$3', fontWeight: '500' }}>{user?.username}</Text>
        <CustomNavigationLink as="button" startAdornment={<FiPower />} onClick={() => handleLogOut(authDispatch)}>
          Log Out
        </CustomNavigationLink>
      </NavigationContainer>
    </NavigationDrawer>
  )
}

export default SideNavbar
