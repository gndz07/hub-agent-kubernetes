/* eslint-disable react/prop-types */
import React from 'react'
import { Link, styled } from '@traefiklabs/faency'

const CustomLink = styled(Link, {
  textDecoration: 'none',

  '&:hover': {
    color: '$textDefault',
  },
  length: undefined,
})

const SubtleLink = ({ css = {}, ...props }) => (
  <CustomLink as="p" css={{ color: '$textSubtle', mt: 0, ...css }} variant="subtle" {...props} />
)

export default SubtleLink
