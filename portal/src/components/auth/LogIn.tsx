import React, { useState } from 'react'
import { Box, Button, Flex, H1, Text } from '@traefiklabs/faency'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import TextFieldWithControls from 'components/TextFieldWithControls'
import SubtleLink from 'components/SubtleLink'

const SCHEMA = Yup.object().shape({
  username: Yup.string().required('Your username is required'),
  password: Yup.string().required('Your password is required'),
})

const INITIAL_VALUES = {
  email: '',
  password: '',
}

const LogIn = ({ catalogName }: { catalogName: string }) => {
  const [errorMsg, setErrorMsg] = useState()

  return (
    <Flex id="login" css={{ minHeight: '100vh' }}>
      <Flex css={{ flex: 1, flexDirection: 'column' }}>
        <Flex
          as="main"
          css={{
            mt: '$3',
            mb: '$6',
            flex: 1,
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Box css={{ mt: 40, minWidth: 320 }}>
            <Box as="header" css={{ mb: '$6', textAlign: 'center' }}>
              <H1 css={{ fontSize: '$10', lineHeight: 1.33 }}>{catalogName}</H1>
            </Box>
            {errorMsg && (
              <Box className="error-wrapper" css={{ my: '$2', maxWidth: 440 }}>
                <Text size="2" css={{ color: '$red9' }}>
                  {errorMsg}
                </Text>
              </Box>
            )}
            <Formik initialValues={INITIAL_VALUES} onSubmit={(v) => console.log(v)} validationSchema={SCHEMA}>
              {(formik) => (
                <Form>
                  <TextFieldWithControls
                    label="Username"
                    name="username"
                    placeholder="Enter your username"
                    css={{ mb: '$4' }}
                  />
                  <Box css={{ mb: '$7', position: 'relative' }}>
                    <TextFieldWithControls
                      label="Password"
                      name="password"
                      type="password"
                      placeholder="Enter your password"
                      errorProps={{ css: { position: 'absolute', mt: '$2' } }}
                    />
                    <Flex
                      css={{
                        mt: '$1',
                        alignItems: 'center',
                        justifyContent: 'end',
                        position: 'absolute',
                        right: 0,
                        top: 65,
                      }}
                    >
                      <Link to="/forget-password" style={{ all: 'unset', cursor: 'pointer' }}>
                        <SubtleLink variant="subtle" css={{ textDecoration: 'none', fontSize: '$1' }}>
                          Forgot your password?
                        </SubtleLink>
                      </Link>
                    </Flex>
                  </Box>
                  <Button
                    type="submit"
                    variant="primary"
                    size="large"
                    css={{ mb: '$4', width: '100%', boxSizing: 'border-box' }}
                    state={formik.isSubmitting ? 'waiting' : undefined}
                  >
                    Log In
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default LogIn
