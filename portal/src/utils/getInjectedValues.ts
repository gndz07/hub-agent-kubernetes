interface InjectedValues {
  portalName?: string
  portalDescription?: string
}

export const getInjectedValues = (): InjectedValues => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { portalName, portalDescription } = window as any

  return { portalName, portalDescription }
}
