import type { MouseEventHandler } from 'react'

import type { Option } from './type'

type OptionProperties = {
  option: Option
  onClick: (value: Option['value']) => void
}

export const OptionComponent = (props: OptionProperties) => {
  const {
    option: { value, title },
    onClick,
  } = props

  const handleClick =
    (clickedValue: Option['value']): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue)
    }

  return (
    <li
      className={'py-0.5 hover:text-active-link'}
      value={value}
      onClick={handleClick(value)}
      tabIndex={0}
    >
      {title}
    </li>
  )
}
