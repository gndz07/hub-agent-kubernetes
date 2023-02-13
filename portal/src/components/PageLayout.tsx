import React from 'react'
import { Flex, Container, VariantProps, CSS } from '@traefiklabs/faency'
import { Helmet } from 'react-helmet-async'
import SideNavbar from 'components/SideNavbar'

type Props = {
  title?: string
  children?: React.ReactNode
  noGutter?: boolean
  containerSize?: VariantProps<typeof Container>['size']
  maxWidth?: CSS['maxWidth']
  contentAlignment?: 'default' | 'left'
  catalogName?: string
}

const PageLayout = ({
  children,
  title,
  noGutter = false,
  containerSize = '3',
  maxWidth,
  contentAlignment = 'default',
  catalogName,
}: Props) => {
  return (
    <>
      <Helmet>
        <title>{title || 'API Portal'}</title>
      </Helmet>
      <Flex>
        <SideNavbar catalogName={catalogName as string} />
        <Flex direction="column" css={{ flex: 1, height: '100vh', overflowY: 'auto', position: 'relative', pb: '$3' }}>
          <Flex direction="column" css={{ flex: 1, pb: noGutter ? 0 : '$2', px: noGutter ? 0 : '$2' }}>
            <Container
              size={containerSize}
              noGutter={noGutter}
              css={{
                display: 'flex',
                maxWidth,
                flexDirection: 'column',
                width: '100%',
                flex: 1,
                mx: contentAlignment === 'left' ? 0 : 'auto',
                pt: '$6',
              }}
            >
              <Flex direction="column" css={{ flex: 1 }}>
                {children}
              </Flex>
              {/* <Footer /> */}
            </Container>
          </Flex>
        </Flex>
      </Flex>
    </>
  )
}

export default PageLayout
