import React from 'react'
import {
  NavigationDrawer,
  NavigationContainer,
  H3,
  H1,
  Flex,
  Link,
  NavigationTreeContainer,
  NavigationTreeItem as FaencyNavTreeItem,
} from '@traefiklabs/faency'
import { useLocation, useNavigate } from 'react-router-dom'
import { useServices } from 'hooks/use-services'
// import { FiPower } from 'react-icons/fi'
import { FaFolder, FaFolderOpen, FaFileAlt } from 'react-icons/fa'
// import { useAuthDispatch, useAuthState } from 'context/auth'
// import { handleLogOut } from 'context/auth/actions'

// const CustomNavigationLink = NavigationLink as any

const NavigationTreeItem = ({
  key,
  name,
  type,
  children,
  ...props
}: {
  key: string
  name: string
  type: string
  children?: React.ReactNode
}) => {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  return (
    <FaencyNavTreeItem
      active={pathname.slice(1) === name}
      key={key}
      onClick={() => navigate(`/${name}`)}
      css={{ textAlign: 'justify', width: '100%' }}
      label={name}
      startAdornment={type === 'api-group' ? null : <FaFileAlt />}
      {...props}
    >
      {children}
    </FaencyNavTreeItem>
  )
}

const SideNavbar = ({ catalogName }: { catalogName: string }) => {
  const { data: services } = useServices()
  // const authDispatch = useAuthDispatch()
  // const { user } = useAuthState()

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
            <NavigationTreeContainer defaultCollapseIcon={<FaFolderOpen />} defaultExpandIcon={<FaFolder />}>
              {services?.map((service, index: number) => (
                <NavigationTreeItem key={`sidenav-${index}`} name={service.name} type={service.type}>
                  {service.apis?.length &&
                    service.apis.map((api: string, idx: number) => (
                      <NavigationTreeItem key={`sidenav-${index}-${idx}`} name={api} type="api" />
                    ))}
                </NavigationTreeItem>
              ))}
            </NavigationTreeContainer>
          </Flex>
        </>
      </NavigationContainer>
      {/* <NavigationContainer>
        <Text css={{ pl: '$3', fontWeight: '500' }}>{user?.username}</Text>
        <CustomNavigationLink as="button" startAdornment={<FiPower />} onClick={() => handleLogOut(authDispatch)}>
          Log Out
        </CustomNavigationLink>
      </NavigationContainer> */}
    </NavigationDrawer>
  )
}

export default SideNavbar
