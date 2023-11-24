import type { Option } from '@shared/lib'
import { useState } from 'react'

export function useSelect(options: Option[], handleFunction?: (value: string) => void) {
  const [element, setElement] = useState<string>('')

  const handleElement = (value: string) => {
    setElement(value)
    if (handleFunction) {
      handleFunction(value)
    }
  }

  const selected = options.find((item) => item.value === element)

  return {
    element,
    setElement,
    handleElement,
    selected,
  }
}
