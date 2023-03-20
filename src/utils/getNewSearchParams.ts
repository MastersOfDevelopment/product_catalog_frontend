export const getNewSearchParams = (searchParams: URLSearchParams, paramsToChange: object): string => {
  const newSearchParams = new URLSearchParams(searchParams.toString())

  Object.entries(paramsToChange).forEach(([key, value]) => {
    if (value === null) {
      newSearchParams.delete(key)
    } else if (Array.isArray(value)) {
      newSearchParams.delete(key)
      value.forEach((part) => {
        newSearchParams.append(key, part)
      })
    } else {
      newSearchParams.set(key, value)
    }
  })

  return newSearchParams.toString()
}
