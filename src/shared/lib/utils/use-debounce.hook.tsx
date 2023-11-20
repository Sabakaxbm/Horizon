import { useEffect, useState } from 'react'

export const useDebounce = <T,>(value: T, delay = 400): T | undefined => {
  const [debouncedValue, setDebouncedValue] = useState<T | undefined>(value)
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay)
    return () => {
      clearTimeout(timeout)
    }
  }, [value, delay])
  return debouncedValue
}
