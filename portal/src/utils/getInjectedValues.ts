interface InjectedValues {
  catalogName?: string
  catalogDescription?: string
}

export const getInjectedValues = (): InjectedValues => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { catalogName, catalogDescription } = window as any

  return { catalogName, catalogDescription }
}
