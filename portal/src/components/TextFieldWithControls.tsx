/* eslint-disable @typescript-eslint/no-empty-function */
import React from 'react'
import { Box, Flex, TextField, Text, CSS } from '@traefiklabs/faency'
import { useField, useFormikContext } from 'formik'
import { useCallback, useMemo } from 'react'

export const FieldErrorText = ({ hasError, error, ...props }: { hasError: boolean; error: string }) => {
  return (
    <>
      {hasError && (
        <Box>
          <Text css={{ pt: '$2', whiteSpace: 'pre-wrap' }} role="alert" variant="invalid" {...props}>
            {error}
          </Text>
        </Box>
      )}
    </>
  )
}

interface TextFieldWithControlsProps {
  disabled?: boolean
  css?: CSS
  label?: string
  controls?: any
  size?: 'small' | 'medium' | 'large'
  hideErrorMsg?: boolean
  id?: string
  onChange?: () => void
  onBlur?: () => void
  errorProps?: any
}

const TextFieldWithControls = ({
  disabled,
  css,
  label,
  controls,
  size = 'large',
  hideErrorMsg = false,
  id,
  onChange = () => {},
  onBlur = () => {},
  errorProps,
  ...props
}: TextFieldWithControlsProps & React.ComponentProps<typeof TextField>) => {
  const { name } = props
  const [field, { touched, error }] = useField(props as any)
  const { isSubmitting } = useFormikContext()

  const hasError = useMemo(() => touched && !!error, [touched, error])

  const idOrName = useMemo(() => id || name, [id, name])

  const handleChange = useCallback(
    (e) => {
      field.onChange(e)
      onChange(e)
    },
    [field, onChange],
  )

  const handleBlur = useCallback(
    (e) => {
      field.onBlur(e)
      onBlur(e)
    },
    [field, onBlur],
  )

  return (
    <Box css={css}>
      <Flex align={label ? 'end' : 'center'}>
        <TextField
          size={size}
          label={label}
          state={hasError ? 'invalid' : undefined}
          disabled={disabled || isSubmitting}
          css={{ width: '100%' }}
          id={idOrName}
          {...field}
          onChange={handleChange}
          onBlur={handleBlur}
          {...props}
        />
        {controls}
      </Flex>
      <FieldErrorText hasError={hasError && !hideErrorMsg} error={error} {...errorProps} />
    </Box>
  )
}

export default TextFieldWithControls
