import type { Option } from '@shared/lib'
import { clsx } from 'clsx'
import type { MouseEventHandler } from 'react'

type OptionProperties = {
  option: Option
  selected?: Option | null
  onClick: (value: Option['value']) => void
}

export const OptionComponent = (props: OptionProperties) => {
  const {
    option: { value, title },
    onClick,
    selected,
  } = props

  const handleClick =
    (clickedValue: Option['value']): MouseEventHandler<HTMLLIElement> =>
    () => {
      onClick(clickedValue)
    }

  return (
    <li
      className={clsx(
        'cursor-pointer py-1 hover:text-active-link',
        selected?.value === value && 'text-active-link'
      )}
      value={value}
      onClick={handleClick(value)}
      tabIndex={0}
    >
      {title}
    </li>
  )
}
